import React from "react";
import { Image, ImageStyle, StyleProp } from "react-native";
import { microgoalImageMapping } from "../config/MicrogoalsImagesMapping";

type MicrogoalImageProps = {
  name: string;
  style?: StyleProp<ImageStyle>;
};

export default function MicrogoalImages({ name, style }: MicrogoalImageProps) {
  const source = microgoalImageMapping[name];
  if (!source) return null;
  return <Image source={source} style={style} resizeMode="cover"/>;
}