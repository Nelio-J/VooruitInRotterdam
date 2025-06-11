import * as React from "react";
import { getData, removeData, storeData } from "../config/asyncStorage";
import { ActivityProgressContext } from "./ActivityProgressContext";

// Define how the completed activities are stored
// It maps milestone IDs to objects that map activity IDs to booleans.
// e.g., {"milestone1":{"m1-language":true}}
export interface CompletedActivities {
    [milestoneId: string]: {
        [activityId: string]: boolean;
    };
}

export interface ActivityProgressState {
    completedActivities: CompletedActivities;
    markActivityAsCompleted: (milestoneId: string, activityId: string) => void;
    isActivityCompleted: (milestoneId: string, activityId: string) => boolean;
    countCompletedActivities: (milestoneId: string) => number;
    removeActivity: (milestoneId: string, activityId: string) => void;
    clearAllProgress: () => void;
}

interface ActivityProgressProviderProps {
  children: React.ReactNode;
}

const ASYNC_STORAGE_PROGRESS_KEY = "ActivityProgressKeyV2";

const ActivityProgressProvider: React.FC<ActivityProgressProviderProps> = ({ children }) => {
  const [completedActivities, setCompletedActivities] = React.useState<CompletedActivities>({});
  const [isLoading, setIsLoading] = React.useState(true);

  const loadProgress = async () => {
    try {
      setIsLoading(true);
      const storedProgress = await getData(ASYNC_STORAGE_PROGRESS_KEY);
      if (storedProgress) {
        setCompletedActivities(storedProgress);
      }
      else {
       setCompletedActivities({}); 
      }
    } catch (e) {
      alert(e);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    loadProgress();
  }, []);

  const markActivityAsCompleted =  async (milestoneId: string, activityId: string) => {
    console.log(`Marking activity ${activityId} in ${milestoneId} as completed.`);
    
    // Create a new object to avoid mutating the state directly
    const newCompletedActivities = {...completedActivities};
    console.log("Current completed activities:", newCompletedActivities);

    if (!newCompletedActivities[milestoneId]) {
      newCompletedActivities[milestoneId] = {};
    }

    if (completedActivities[milestoneId]?.[activityId]) {
      console.warn(`Activity ${activityId} in ${milestoneId} is already marked as completed.`);
      return;
    }
    
    // Access the nested activity object in the milestone and mark it as completed
    newCompletedActivities[milestoneId][activityId] = true;
    console.log("Updated completed activities:", newCompletedActivities);

    setCompletedActivities(newCompletedActivities);
    storeData(ASYNC_STORAGE_PROGRESS_KEY, newCompletedActivities);
    };

    const isActivityCompleted = (milestoneId: string, activityId: string): boolean => {
        // Checks if the activityId exists in completedActivities. !! converts the value to a boolean
        return !!completedActivities[milestoneId]?.[activityId];
    };

    const countCompletedActivities = (milestoneId: string): number => {
        const count = completedActivities[milestoneId];

        if (!count) {
            console.warn(`No completed activities found for ${milestoneId}.`);
            return 0;
        }
        const activityCount = Object.keys(count).length;
        console.log(`Counted ${activityCount} completed activities for ${milestoneId}.`);
        return activityCount;
    }

    // NOTE: currently unused and still needs some changing
    const removeActivity = (activityId: string) => {
        removeData(activityId);
    };

    const clearAllProgress = async () => {
      await removeData(ASYNC_STORAGE_PROGRESS_KEY);
      setCompletedActivities({});
    };

    // If the data is still loading, return null to avoid rendering the context too early
    if (isLoading) {
        return null;
    }

    return (
        <ActivityProgressContext.Provider
        value={{
            completedActivities,
            markActivityAsCompleted,
            isActivityCompleted,
            countCompletedActivities,
            removeActivity,
            clearAllProgress,
        }}
        >
        {children}
        </ActivityProgressContext.Provider>
    );
};

export default ActivityProgressProvider;