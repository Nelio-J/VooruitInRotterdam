
interface FlagArea {
  id: string;
  x: number;
  y: number;
  width: number; // Width of the clickable area
  height: number; // Height of the clickable area
  
  // You might also want to store an action or data associated with this flag
  action?: () => void;
  screenToNavigateTo?: string; // Example for navigation
  dataId?: string; // Example for passing data
}

const MilestoneFlags: FlagArea[] = [
  {
    id: "flag1",
    x: 296,
    y: 568,
    width: 136,
    height: 123,
    action: () => console.log("Flag 1 clicked"),
    screenToNavigateTo: "MicrogoalsOverviewScreen",
    // dataId: "milestone-data-1",
  },
  {
    id: "flag2",
    x: 520,
    y: 518,
    width: 89,
    height: 82,
    action: () => console.log("Flag 2 clicked"),
    // screenToNavigateTo: "MilestoneDetailScreen2",
    // dataId: "milestone-data-2",
  },
  {
    id: "flag3",
    x: 415,
    y: 461,
    width: 58,
    height: 53,
    action: () => console.log("Flag 3 clicked"),
    // screenToNavigateTo: "MilestoneDetailScreen2",
    // dataId: "milestone-data-3",
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