import { MilestoneDataInterface } from "@/app/components/MilestoneDataInterfaces"

export const MilestoneData1: MilestoneDataInterface = {
  milestoneId: "milestone_1_first_steps",
  milestoneTitle: "Milestone 1",
  milestoneSubtitle: "The first steps",
  activities: [
     {
    id: "m1-language",
    category: "Language",
    title: "Language Activity",
    content: "This is the description of the language activity. It provides details about what the activity entails and how to complete it.",
    image: require("@/assets/images/app-logo.png"),
    contentExtra: "This is additional content for the language activity. It provides more context and information about the activity. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: "m1-rotterdam",
    category: "Rotterdam",
    title: "Rotterdam Activity",
    content: "This is the description of the Rotterdam activity. It provides details about what the activity entails and how to complete it.",
    image: require("@/assets/images/app-logo.png"),
    contentExtra: "This is additional content for the Rotterdam activity. It provides more context and information about the activity.",
  },
  {
    id: "m1-integration",
    category: "Integration",
    title: "Integration Activity",
    content: "This is the description of the integration activity. It provides details about what the activity entails and how to complete it.",
    image: require("@/assets/images/app-logo.png"),
    contentExtra: "",
  },
    {
    id: "m1-social",
    category: "Social",
    title: "Social Activity",
    content: "This is the description of the social activity. It provides details about what the activity entails and how to complete it.",
    image: "",
    contentExtra: "",
  },
  ]
}
