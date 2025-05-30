import { ReactNode } from "react";
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
  content: ReactNode | string;
  image?: ImageSourcePropType | string;
  contentExtra?: ReactNode | string;
}