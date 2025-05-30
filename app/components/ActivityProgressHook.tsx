import { useContext } from "react";
import ActivityProgressContext from "../context/ActivityProgressContext";

const useActivityProgress = () => {
   const activityProgress = useContext(ActivityProgressContext);

    return activityProgress;
};

export default useActivityProgress;