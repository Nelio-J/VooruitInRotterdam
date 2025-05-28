import { MilestoneData1 } from "../data/milestones/Milestone_1_first_steps";
import { MilestoneData2 } from "../data/milestones/Milestone_2_the_basics";

import { MilestoneDataInterface } from "../components/MilestoneDataInterfaces";

export const MilestoneFlagMapping: Record<string, MilestoneDataInterface> = {
    milestone1: MilestoneData1,
    milestone2: MilestoneData2,
};

// export type { MilestoneDataInterface, ActivityDataInterface };