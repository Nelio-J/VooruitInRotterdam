import * as React from "react";
import { getData, removeData, storeData } from "../config/asyncStorage";
import { ActivityProgressContext } from "./ActivityProgressContext";

export interface CompletedActivities {
    [milestoneId: string]: {
        [activityId: string]: boolean;
    };
}

export interface ActivityProgressState {
    completedActivities: CompletedActivities;
    markActivityAsCompleted: (milestoneId: string, activityId: string) => void;
    isActivityCompleted: (milestoneId: string, activityId: string) => boolean;
    removeActivity: (milestoneId: string, activityId: string) => void;
    countCompletedActivities: (milestoneId: string) => number;
    // isMilestoneCompleted: (milestoneId: string, totalActivites: number) => boolean;
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
    const newCompletedActivities = {...completedActivities};
    console.log("Current completed activities:", newCompletedActivities);

    if (!newCompletedActivities[milestoneId]) {
      newCompletedActivities[milestoneId] = {};
    }

    if (completedActivities[milestoneId]?.[activityId]) {
      console.warn(`Activity ${activityId} in ${milestoneId} is already marked as completed.`);
      return;
    }
    
    newCompletedActivities[milestoneId][activityId] = true;
    console.log("Updated completed activities:", newCompletedActivities);

    setCompletedActivities(newCompletedActivities);
    storeData(ASYNC_STORAGE_PROGRESS_KEY, newCompletedActivities);
    };

    const isActivityCompleted = (milestoneId: string, activityId: string): boolean => {
        // !! checks if the activityId exists in completedActivities
        return !!completedActivities[milestoneId]?.[activityId];
    };

    const removeActivity = (activityId: string) => {
        removeData(ASYNC_STORAGE_PROGRESS_KEY);
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
            removeActivity,
            countCompletedActivities,
        }}
        >
        {children}
        </ActivityProgressContext.Provider>
    );
};

export default ActivityProgressProvider;