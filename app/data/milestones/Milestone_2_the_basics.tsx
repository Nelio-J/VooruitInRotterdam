import { MilestoneDataInterface } from "@/app/components/MilestoneDataInterfaces"

export const MilestoneData2: MilestoneDataInterface = {
  milestoneId: "milestone_2_the_basics",
  milestoneTitle: "Milestone 2",
  milestoneSubtitle: "The basics",
  activities: [
     {
    id: "m2-language",
    milestoneId: "milestone2",
    category: "Language",
    title: "Language Activity 2",
    content: "This is the description of the language activity. It provides details about what the activity entails and how to complete it.",
    image: require("@/assets/images/app-logo.png"),
    contentExtra: "This is additional content for the language activity. It provides more context and information about the activity. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: "m2-rotterdam",
    milestoneId: "milestone2",
    category: "Rotterdam",
    title: "Rotterdam Activity 2",
    content: "This is the description of the Rotterdam activity. It provides details about what the activity entails and how to complete it.",
    image: require("@/assets/images/app-logo.png"),
    contentExtra: "This is additional content for the Rotterdam activity. It provides more context and information about the activity.",
  },
  {
    id: "m2-integration",
    milestoneId: "milestone2",
    category: "Integration",
    title: "Integration Activity 2",
    content: "This is the description of the integration activity. It provides details about what the activity entails and how to complete it.",
    image: require("@/assets/images/app-logo.png"),
    contentExtra: "",
  },
    {
    id: "m2-social",
    milestoneId: "milestone2",
    category: "Social",
    title: "Social Activity 2",
    content: "This is the description of the social activity. It provides details about what the activity entails and how to complete it.",
    image: "",
    contentExtra: "",
  },
  ]
}
