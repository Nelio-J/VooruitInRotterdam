import * as React from "react";
import { getData, removeData, storeData } from "../config/asyncStorage";
import { ActivityProgressContext } from "./ActivityProgressContext";

export interface CompletedActivities {
    [activityId: string]: boolean;
}

export interface ActivityProgressState {
    completedActivities: CompletedActivities;
    markActivityAsCompleted: (activityId: string) => void;
    isActivityCompleted: (activityId: string) => boolean;
    removeActivity: (activityId: string) => void;
}

interface ActivityProgressProviderProps {
  children: React.ReactNode;
}

const ASYNC_STORAGE_PROGRESS_KEY = "ActivityProgressKey";

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
      setIsLoading(false);
    } catch (e) {
      alert(e);
    }
  };

  React.useEffect(() => {
    loadProgress();
  }, []);

  const markActivityAsCompleted = (activityId: string) => {
    if (completedActivities[activityId]) {
      console.warn(`Activity ${activityId} is already marked as completed.`);
      return;
    }
    const newCompletedActivities = {
      ...completedActivities,
      [activityId]: true,
    };
    setCompletedActivities(newCompletedActivities);
    storeData(ASYNC_STORAGE_PROGRESS_KEY, newCompletedActivities);
  };

  const isActivityCompleted = (activityId: string): boolean => {
    return !!completedActivities[activityId];
  };

  const removeActivity = (activityId: string) => {
    removeData(ASYNC_STORAGE_PROGRESS_KEY);
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
        removeActivity,
      }}
    >
      {children}
    </ActivityProgressContext.Provider>
  );
};

export default ActivityProgressProvider;