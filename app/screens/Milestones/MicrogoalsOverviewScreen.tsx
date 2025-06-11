import * as React from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import Svg, { Path } from 'react-native-svg';

import MicrogoalImages from "@/app/components/MicrogoalsImagesComponent";
import { Ionicons } from "@expo/vector-icons";

import useActivityProgress from "@/app/components/ActivityProgressHook";
import useActiveColors from "@/app/components/activeColorsHook";
import { useNotoSerifFonts } from "@/assets/fonts/NotoSerifFontConfig";

import { MicrogoalssOverviewScreenProps, MilestonesStackParamList } from "@/app/components/navigation/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { ActivityDataInterface, MilestoneDataInterface } from "@/app/components/MilestoneDataInterfaces";
import { MilestoneFlagMapping } from "@/app/config/MilestoneFlagMapping";

import { useNavigation } from "@react-navigation/native";

// interface ItemProps extends ActivityDataInterface {}

type ItemScreenNavigationProp = NativeStackNavigationProp<MilestonesStackParamList, "MicrogoalsOverviewScreen">;

const Item = ({ id, milestoneId, category, title, content, image, contentExtra }: ActivityDataInterface) => {
  const activityProgress = useActivityProgress();
  const navigation = useNavigation<ItemScreenNavigationProp>();

  // Check which activities are completed for the given milestone
  const completedActivities = activityProgress?.isActivityCompleted(milestoneId, id);
  console.log("Activity completed:", completedActivities, "for ID:", id + " in milestone:", milestoneId);
  
  const handlePress = () => {
    console.log("Tapped on item");
    navigation.navigate("ActivityScreen", {
      id,
      milestoneId,
      category,
      title,
      content,
      image,
      contentExtra,
    });
  };

  return (
    <Pressable style={styles.item} onPress={handlePress}>
      <MicrogoalImages name={category} style={styles.itemImage} />
        <View style={styles.itemRow}>
          <Text style={styles.listTitles}>{category}</Text>
          {completedActivities ? (
            <Ionicons name="checkmark-circle" size={18} color="black" />
          ) : (
            <Ionicons name="arrow-forward" size={18} color="black" />
          )}
        </View>
    </Pressable>
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

export default function MicrogoalsOverviewScreen({ route }: MicrogoalssOverviewScreenProps) {
    // const route = useRoute<MicrogoalssOverviewScreenProps['route']>();
    console.log("ActivityScreen params:", route.params);

    const [fontsLoaded] = useNotoSerifFonts();
    const activeColors = useActiveColors();

    // Extract the milestoneId parameter from the route. If the route params are not defined, use an empty object to avoid errors.
    const { milestoneId } = route.params ?? {};

    // Retrieve the current milestone data based on the milestoneId from the MilestoneFlagMapping
    const currentMilestoneData: MilestoneDataInterface | undefined = MilestoneFlagMapping[milestoneId];

    if (!fontsLoaded) return null;

    if (!currentMilestoneData) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <Text style={{ color: activeColors.text, fontSize: 18 }}>Milestone data not found.</Text>
        <Text style={{ color: activeColors.text }}>ID: {milestoneId}</Text>
      </View>
    );
  }
    
    return (
      <View
        style={[styles.container, { backgroundColor: activeColors.background }]}
      >
        <BookmarkSvgComponent>
          <Text style={[styles.H1, {color: activeColors.text}]}>{currentMilestoneData.milestoneTitle}</Text>
        </BookmarkSvgComponent>
          <Text style={[styles.H2, {color: activeColors.text}]}>{currentMilestoneData.milestoneSubtitle}</Text>
        <BookmarkBottomSvgComponent />
          <Text style={[styles.H3, {color: activeColors.text}]}>Learn about</Text>
        <FlatList 
        data={currentMilestoneData.activities} 
        renderItem={({item}) => (
        <Item
          id={item.id}
          milestoneId={milestoneId}
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