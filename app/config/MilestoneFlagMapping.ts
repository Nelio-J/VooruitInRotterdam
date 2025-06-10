import { MilestoneData1 } from "../data/milestones/Milestone_1_first_steps";
import { MilestoneData2 } from "../data/milestones/Milestone_2_discover_your_neighbourhood";
import { MilestoneData3 } from "../data/milestones/Milestone_3_culture_and_community";

import { MilestoneDataInterface } from "../components/MilestoneDataInterfaces";

export const MilestoneFlagMapping: Record<string, MilestoneDataInterface> = {
    milestone1: MilestoneData1,
    milestone2: MilestoneData2,
    milestone3: MilestoneData3,
};

// export type { MilestoneDataInterface, ActivityDataInterface };