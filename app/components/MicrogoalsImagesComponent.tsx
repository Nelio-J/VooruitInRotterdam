import React from "react";
import { Image, ImageStyle, StyleProp } from "react-native";
import { microgoalImageMapping } from "../config/MicrogoalsImagesMapping";

type MicrogoalImageProps = {
  name: string;
  style?: StyleProp<ImageStyle>;
  alt?: string;
};

export default function MicrogoalImages({ name, style, alt }: MicrogoalImageProps) {
  const source = microgoalImageMapping[name];
  if (!source) return null;
  return <Image source={source} style={style} resizeMode="cover" alt={alt}/>;
}