import * as React from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import Svg, { Path } from 'react-native-svg';

import MicrogoalImages from "@/app/components/MicrogoalsImagesComponent";
import { Ionicons } from "@expo/vector-icons";

import useActiveColors from "@/app/components/activeColorsHook";
import { useNotoSerifFonts } from "@/assets/fonts/NotoSerifFontConfig";

import { MilestonesStackParamList } from "@/app/components/navigation/types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    category: 'Language',
    title: "Language Activity",
    content: "This is the description of the language activity. It provides details about what the activity entails and how to complete it.",
    image: require("@/assets/images/app-logo.png"),
    contentExtra: "This is additional content for the language activity. It provides more context and information about the activity. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    category: 'Rotterdam',
    title: "Rotterdam Activity",
    content: "This is the description of the Rotterdam activity. It provides details about what the activity entails and how to complete it.",
    image: require("@/assets/images/app-logo.png"),
    contentExtra: "This is additional content for the Rotterdam activity. It provides more context and information about the activity.",
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    category: 'Integration',
    title: "Integration Activity",
    content: "This is the description of the integration activity. It provides details about what the activity entails and how to complete it.",
    image: require("@/assets/images/app-logo.png"),
    contentExtra: "",
  },
    {
    id: '58694a0f-3da1-471f-bd96-1478gfd7g8f2',
    category: 'Social',
    title: "Social Activity",
    content: "This is the description of the social activity. It provides details about what the activity entails and how to complete it.",
    image: "",
    contentExtra: "",
  },
];

type ItemProps = {
  id: string;
  category: string
  title: string;
  content: string;
  image?: any;
  contentExtra?: string;
};

// Define the type for the navigation object within the Item component's context
type ItemScreenNavigationProp = NativeStackNavigationProp<MilestonesStackParamList, "MicrogoalsOverviewScreen">;

const Item = ({ id, category, title, content, image, contentExtra }: ItemProps) => {
  const navigation = useNavigation<ItemScreenNavigationProp>();
  
  const handlePress = () => {
    console.log("Tapped on item");
    navigation.navigate("ActivityScreen", {
      id: id,
      category: category,
      title: title,
      content: content,
      image: image, // Pass the image if it exists
      contentExtra: contentExtra, // Pass additional content if it exists
    });
  };

  return (
    <View style={styles.item}>
      <MicrogoalImages name={category} style={styles.itemImage} />
      <Pressable onPress={handlePress}>
        <View style={styles.itemRow}>
          <Text style={styles.listTitles}>{category}</Text>
          <Ionicons name="arrow-forward" size={18} color="black" />
        </View>
      </Pressable>
    </View>
  );
};

export function BookmarkSvgComponent({ children }: { children?: React.ReactNode }) {
  const originalWidth = 332;
  const originalHeight = 100;
  const aspectRatio = originalWidth / originalHeight;

  return (
    <View style={{ width: "100%", aspectRatio }}>
      <Svg
        width="85%"
        height="100%"
        viewBox={`0 0 ${originalWidth} ${originalHeight}`}
        fill="none"
      >
        <Path
          d="M331.594 0.256187L0 0.256173L52.1953 50.1313L-4.36022e-06 100.006L331.594 100.006L331.594 0.256187Z"
          fill="#73BA81"
        />
      </Svg>
      <View style={styles.centeredOverlay}>
        {children}
        </View>
    </View>
  );
}

export function BookmarkBottomSvgComponent() {
  const originalWidth = 336;
  const originalHeight = 105;
  const aspectRatio = originalWidth / originalHeight;

  return (
    <View style={[{ width: "100%", aspectRatio }, styles.bottomSVGContainer]}>
      <Svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${originalWidth} ${originalHeight}`}
        fill="none"
      >
        <Path
          d="M336 1.52588e-05L315.5 1.36852e-05L315.5 90.25L24 90.25L-4.56784e-06 104.5L336 104.5L336 1.52588e-05Z"
          fill="#73BA81"
        />
      </Svg>
    </View>
  );
}

export default function MicrogoalsOverviewScreen() {
    const [fontsLoaded] = useNotoSerifFonts();
    const activeColors = useActiveColors();

    if (!fontsLoaded) return null;
    
    return (
      <View
        style={[styles.container, { backgroundColor: activeColors.background }]}
      >
        <BookmarkSvgComponent>
            <Text style={[styles.H1, {color: activeColors.text}]}>Milestone 1</Text>
        </BookmarkSvgComponent>
        <Text style={[styles.H2, {color: activeColors.text}]}>The first steps</Text>
        <BookmarkBottomSvgComponent />
        <Text style={[styles.H3, {color: activeColors.text}]}>Learn about</Text>
        <FlatList 
        data={DATA} 
        renderItem={({item}) => (
        <Item 
          id={item.id}
          category={item.category}
          title={item.title}
          content={item.content}
          image={item.image}
          contentExtra={item.contentExtra}
        />
      )}
        keyExtractor={item => item.id}
        numColumns={2}>
        </FlatList>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    // paddingHorizontal: 10,
    justifyContent: "flex-start",
    alignItems: "stretch",
  },
  centeredOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomSVGContainer: {
    marginTop: -115,
  },
  H1: {
    fontSize: 36,
    fontFamily: "NotoSerif_700Bold",
    textAlign: "center",
  },
  H2: {
    fontSize: 28,
    fontFamily: "NotoSerif_700Bold",
    textAlign: "right",
    paddingRight: 40,
    marginBottom: 16,
  },
  H3: {
    fontSize: 28,
    fontFamily: "NotoSerif_700Bold",
    textAlign: "left",
    marginTop: 30,
    paddingHorizontal: 10,
  },
  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "orange",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomRightRadius: 10,
    bottom: 4,
  },
  item: {
    backgroundColor: "#000000",
    width: "45%",
    aspectRatio: 1,
    overflow: "hidden",
    position: "relative",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    margin: 10,
    borderRadius: 10,
  },
  listTitles: {
    fontSize: 12,
    fontFamily: "NotoSerif_700Bold",
    color: "#000000",
    minWidth: 80,
  },
  itemImage: {
    position: "absolute",
    left: 4,
    bottom: 4,
    objectFit: "cover",
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
});