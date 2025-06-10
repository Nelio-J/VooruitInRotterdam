import { MilestoneDataInterface } from "@/app/components/MilestoneDataInterfaces";
import { Feather } from "@expo/vector-icons";
import * as React from "react";
import { Image, Linking, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  content: {
    flex: 1,
    minWidth: 0, // Allow text to shrink if needed
    fontSize: 16,
    fontFamily: "NotoSerif_400Regular",
    paddingVertical: 10,
    marginRight: 10,
  },
  H2: {
    fontSize: 18,
    fontFamily: "NotoSerif_700Bold",
    marginTop: 20,
  },
  contentText: {
    fontSize: 16,
    fontFamily: "NotoSerif_400Regular",
    paddingVertical: 10,
    marginRight: 10,
  },
  linkContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  link: {
    textDecorationLine: "underline",
    fontFamily: "NotoSerif_400Regular",
    fontSize: 16,
  },
  bulletListContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bulletList: {
    fontSize: 16,
    fontFamily: "NotoSerif_400Regular",
    paddingVertical: 1,
    paddingLeft: 10,
    marginBottom: 10,
    wordWrap: "break-word",
    textAlign: "left",
  },
  contentImage: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
    marginBottom: 10,
  },
});

export const MilestoneData1: MilestoneDataInterface = {
  milestoneId: "milestone_1_first_steps",
  milestoneTitle: "Milestone 1",
  milestoneSubtitle: "The first steps",
  activities: [
    {
      id: "m1-language",
      milestoneId: "milestone1",
      category: "Language",
      title: "Learn the Dutch numbers",
      content: (
        <Text style={[styles.content]}>
          You encounter numbers everywhere. From the price in the supermarket to
          the time until your bus arrives. If you know the numbers, it becomes
          easier to understand what is happening around you.
          {"\n\n"}
          <View style={[styles.bulletListContainer]}>
            <View style={{ marginRight: 40 }}>
              <Text style={[styles.bulletList]}>{"\u2B24"} 0 (nul)</Text>
              <Text style={[styles.bulletList]}>{"\u2B24"} 1 (één)</Text>
              <Text style={[styles.bulletList]}>{"\u2B24"} 2 (twee)</Text>
              <Text style={[styles.bulletList]}>{"\u2B24"} 3 (drie)</Text>
              <Text style={[styles.bulletList]}>{"\u2B24"} 4 (vier)</Text>
              <Text style={[styles.bulletList]}>{"\u2B24"} 5 (vijf)</Text>
              <Text style={[styles.bulletList]}>{"\u2B24"} 6 (zes)</Text>
            </View>
            <View>
              <Text style={[styles.bulletList]}>{"\u2B24"} 7 (zeven)</Text>
              <Text style={[styles.bulletList]}>{"\u2B24"} 8 (acht)</Text>
              <Text style={[styles.bulletList]}>{"\u2B24"} 9 (negen)</Text>
              <Text style={[styles.bulletList]}>{"\u2B24"} 10 (tien)</Text>
              <Text style={[styles.bulletList]}>{"\u2B24"} 20 (twintig)</Text>
              <Text style={[styles.bulletList]}>{"\u2B24"} 30 (dertig)</Text>
            </View>
          </View>
        </Text>
      ),
      image: "",
      contentExtra: (
        <View style={styles.content}>
          <Text style={styles.contentText}>
            Counting in Dutch is sometimes a bit different from what you might be used to.
          </Text>
          <Text style={styles.contentText}>
            The rule for numbers like 21, 35, etc. is: You say the last number first, then the first number.
          </Text>
          <Text style={styles.contentText}>
            An example:
            {"\n"}
            You say ‘21’ as ‘één-en-twintig’ (so: 1 and 20).
            {"\n"}
            You say ‘35’ as ‘vijf-en-dertig’ (so: 5 and 30).
          </Text>
          <View style={styles.linkContainer}>
            <Text
              onPress={() =>
                Linking.openURL(
                  "https://www.dutchpod101.com/dutch-vocabulary-lists/numbers?src=numbers_dutch"
                )
              }
              style={styles.link}
              accessibilityLabel="Vocabulary list of Dutch numbers, opens in a new window"
            >
              View and practice the Dutch numbers
              <Feather name="external-link" size={16} style={{ marginLeft: 5 }} />
            </Text>
          </View>
        </View>
      ),
    },
    {
      id: "m1-rotterdam",
      milestoneId: "milestone1",
      category: "Rotterdam",
      title: "Learn about Rotterdam",
      content:
        "Rotterdam is the second largest city in the Netherlands. It is a beautiful and modern city.",
      image: "",
      contentExtra: (
        <View style={styles.content}>
          <Text style={styles.H2}>Some facts about Rotterdam</Text>
          <Text style={styles.bulletList}>
            {"\u2B24"} Rotterdam has the largest port in Europe!
          </Text>
          <Image
            source={require("@/assets/images/content/port-of-rotterdam.jpg")}
            style={styles.contentImage}
            alt="An image of the port of Rotterdam"
          />
          <Text style={styles.bulletList}>
            {"\u2B24"} Rotterdam is home to people from over 170 countries. This creates a very diverse city where you can learn about different cultures.
          </Text>
          <Image
            source={require("@/assets/images/content/flag-parade-rotterdam.jpg")}
            style={styles.contentImage}
            alt="An image of the port of Rotterdam"
          />
          <Text style={styles.bulletList}>
            {"\u2B24"} 010 is the area code for Rotterdam and a number that people value. ‘010 isn’t just a code’ is a phrase you will often hear and see in Rotterdam.
          </Text>
          <Text style={styles.bulletList}>
            {"\u2B24"} A city of "niet lullen, maar poetsen": Rotterdammers are known as hard workers. This phrase means: no talking, but getting things done! That’s why Rotterdam's motto is: Make it happen.
          </Text>
          <Image
            source={require("@/assets/images/content/RMIH label_2_links_wit.png")}
            style={[styles.contentImage, { resizeMode: "contain" }]}
            alt="An image showing weekly activities offered by Stichting Mano on the Silja ferry"
          />
        </View>
      ),
    },
    {
      id: "m1-integration",
      milestoneId: "milestone1",
      category: "Integration",
      title: "Important terms",
      content:
        "As a status holder, you have to integrate. This means that you have to learn the Dutch language and learn how live in the Netherlands works.",
      image: require("@/assets/images/content/divosa-inburgering-video-thumbnail.png"),
      contentExtra: `3 words that you are gonna hear a lot:
      \u2022 Inburgering 
      \u2022 Gemeente 
      \u2022 Taalles`,
    },
    {
      id: "m1-social",
      milestoneId: "milestone1",
      category: "Social",
      title: "Activities in the shelter",
      content: (
        <View style={styles.content}>
          <Text style={[styles.contentText, { color: "white" }]}>
            Mano offers fun and helpful activities in the shelter.
          </Text>
          <Image
              source={require("@/assets/images/content/mano-activities.png")}
              style={styles.contentImage}
              alt="An image showing weekly activities offered by Stichting Mano on the Silja ferry"
            />
          <View style={styles.linkContainer}>
            <Text
              onPress={() => Linking.openURL("https://welkominrotterdam.com/")}
              style={[styles.link, { color: "white" }]}
              accessibilityLabel="View this week's activities, opens in a new window"
            >
              View this week's activities
              {" "}
              <Feather name="external-link" size={16} style={{ marginLeft: 5, color: "white" }} />
            </Text>
          </View>
        </View>
      ),
      image: "",
      contentExtra:
        "Take a look and find an activity in the shelter that looks interesting for you to join!",
    },
  ],
};