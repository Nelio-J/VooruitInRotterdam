
interface FlagArea {
  id: string;
  x: number;
  y: number;
  width: number; // Width of the clickable area
  height: number; // Height of the clickable area
  
  milestoneId?: string;
  progressTextX?: number;
  progressTextY?: number;
  action?: () => void;
}

const MilestoneFlags: FlagArea[] = [
  {
    id: "flag1",
    x: 296,
    y: 568,
    width: 136,
    height: 123,    
    milestoneId: "milestone1", // 'milestone1' should match the data file key
    progressTextX: 190,
    progressTextY: 550,
    action: () => console.log("Flag 1 clicked"),
  },
  {
    id: "flag2",
    x: 520,
    y: 518,
    width: 89,
    height: 82,    
    milestoneId: "milestone2",
    progressTextX: 385,
    progressTextY: 492,
    action: () => console.log("Flag 2 clicked"),
  },
  {
    id: "flag3",
    x: 415,
    y: 461,
    width: 58,
    height: 53,
    milestoneId: "milestone3",
    progressTextX: 300,
    progressTextY: 400,
    action: () => console.log("Flag 3 clicked"),
  },
  {
    id: "flag4",
    x: 352,
    y: 420,
    width: 40,
    height: 36,
    action: () => console.log("Flag 4 clicked"),
    // screenToNavigateTo: "MilestoneDetailScreen2",
    // dataId: "milestone-data-4",
  },
  {
    id: "flag5",
    x: 316,
    y: 398,
    width: 25,
    height: 23,
    action: () => console.log("Flag 5 clicked"),
    // screenToNavigateTo: "MilestoneDetailScreen2",
    // dataId: "milestone-data-5",
  },
  {
    id: "flag6",
    x: 392,
    y: 389,
    width: 21,
    height: 19,
    action: () => console.log("Flag 6 clicked"),
    // screenToNavigateTo: "MilestoneDetailScreen2",
    // dataId: "milestone-data-6",
  },
];

export default MilestoneFlags;