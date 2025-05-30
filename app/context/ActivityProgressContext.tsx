import { createContext } from "react";
import { ActivityProgressState } from "./ActivityProgressProvider";

export const ActivityProgressContext = createContext<ActivityProgressState | undefined>(undefined);

export default ActivityProgressContext;