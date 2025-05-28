import { ImageSourcePropType } from "react-native";

export interface MilestoneDataInterface {
  milestoneId: string;
  milestoneTitle: string;
  milestoneSubtitle: string;
  activities: ActivityDataInterface[];  
}

export interface ActivityDataInterface {
  id: string;
  category: string;
  title: string;
  content: string;
  image?: ImageSourcePropType | string;
  contentExtra?: string;
}