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
  contentText: {
    fontSize: 16,
    fontFamily: "NotoSerif_400Regular",
    paddingVertical: 10,
    marginRight: 10,
  },
  linkContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
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
    marginRight: 40,
    wordWrap: "break-word",
    textAlign: "left",
  },
  contentImage: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
  },

});

export const MilestoneData2: MilestoneDataInterface = {
  milestoneId: "milestone_2_discover_your_neighbourhood",
  milestoneTitle: "Milestone 2",
  milestoneSubtitle: "Discover your neighbourhood",
  activities: [
    {
      id: "m2-language",
      milestoneId: "milestone2",
      category: "Language",
      title: "Learn to introduce yourself",
      content:
        "You are going to meet a lot of new people in the Netherlands. It is important that you can introduce yourself.",
      image: "",
      contentExtra: (
      <View style={styles.content}>
        <Text style={styles.contentText}>
          “Goedemorgen, Ik heet Mo. Ik kom uit Syrië. Ik woon hier een maand.”
        </Text>
        <Text style={styles.contentText}>
          Try it out! Try saying it yourself.
        </Text>
      </View>
      ),
    },
    {
      id: "m2-rotterdam",
      milestoneId: "milestone2",
      category: "Rotterdam",
      title: "Discover your neighbourhood",
      content:
        "Now that you live here, it's useful to get to know your new neighbourhood." +
        "\n\n" +
        "Let's start with your COA location. Try to find the ship on the map.",
      image: "",
      contentExtra: (
        <View style={styles.content}>
          <Image
            source={require("@/assets/images/content/silja-google-maps.png")}
            style={styles.contentImage}
            alt="a map showing the area where the Silja ferry is located."
          />
          <View style={styles.linkContainer}>
            <Text
              onPress={() =>
                Linking.openURL("https://maps.app.goo.gl/B1ctSnJEP3CgHnhv6")
              }
              style={styles.link}
              accessibilityLabel="Google Maps link, opens in a new window"
            >
              View the map on Google Maps
              {" "}
              <Feather name="external-link" size={16} style={{ marginLeft: 5 }} />
            </Text>
          </View>
          <Text style={styles.contentText}>
            Let's discover what else is in your area! Try to find the nearest supermarket on the map.
          </Text>
        </View>
      ),
    },
    {
      id: "m2-integration",
      milestoneId: "milestone2",
      category: "Integration",
      title: "How does integration work?",
      content:
        "Integrating can feel quite overwhelming. A lot comes your way when you arrive in a new country.",
      image: "",
      contentExtra: (
        <View style={[styles.content]}>
          <Text style={styles.contentText}>
            Luckily, support organisation Divosa has created a useful video to quickly explain the integration process. This video helps you understand what to expect during your own integration.
          </Text>
          <Text style={styles.contentText}>
            Watch the video in a language you prefer:
          </Text>
          <View>
            <View style={styles.linkContainer}>
              <Text
                onPress={() => Linking.openURL("https://vimeo.com/657411996")}
                style={styles.link}
                accessibilityLabel="Dutch, opens in a new window"
              >
                Nederlands
              </Text>
              <Feather
                name="external-link"
                size={16}
                style={{ marginLeft: 5 }}
              />
            </View>

            <View style={styles.linkContainer}>
              <Text
                onPress={() => Linking.openURL("https://vimeo.com/658668365")}
                style={styles.link}
                accessibilityLabel="English, opens in a new window"
              >
                English
              </Text>
              <Feather
                name="external-link"
                size={16}
                style={{ marginLeft: 5 }}
              />
            </View>

            <View style={styles.linkContainer}>
              <Text
                onPress={() => Linking.openURL("https://vimeo.com/658663765")}
                style={styles.link}
                accessibilityLabel="Arabic, opens in a new window"
              >
                العربية (Arabic)
              </Text>
              <Feather
                name="external-link"
                size={16}
                style={{ marginLeft: 5 }}
              />
            </View>

            <View style={styles.linkContainer}>
              <Text
                onPress={() => Linking.openURL("https://vimeo.com/658654860")}
                style={styles.link}
                accessibilityLabel="Tigrinya, opens in a new window"
              >
                (Tigrinya) ትግርኛ
              </Text>
              <Feather
                name="external-link"
                size={16}
                style={{ marginLeft: 5 }}
              />
            </View>

            <View style={styles.linkContainer}>
              <Text
                onPress={() => Linking.openURL("https://vimeo.com/658657024")}
                style={styles.link}
                accessibilityLabel="Dari, opens in a new window"
              >
                دری (Dari)
              </Text>
              <Feather
                name="external-link"
                size={16}
                style={{ marginLeft: 5 }}
              />
            </View>

            <View style={styles.linkContainer}>
              <Text
                onPress={() => Linking.openURL("https://vimeo.com/658661769")}
                style={styles.link}
                accessibilityLabel="Farsi, opens in a new window"
              >
                فارسی (Farsi)
              </Text>
              <Feather
                name="external-link"
                size={16}
                style={{ marginLeft: 5 }}
              />
            </View>

            <View style={styles.linkContainer}>
              <Text
                onPress={() => Linking.openURL("https://vimeo.com/658658769")}
                style={styles.link}
                accessibilityLabel="Pashto, opens in a new window"
              >
                پښتو (Pashto)
              </Text>
              <Feather
                name="external-link"
                size={16}
                style={{ marginLeft: 5 }}
              />
            </View>

            <View style={styles.linkContainer}>
              <Text
                onPress={() => Linking.openURL("https://vimeo.com/658651205")}
                style={styles.link}
                accessibilityLabel="Soomaali, opens in a new window"
              >
                Soomaali
              </Text>
              <Feather
                name="external-link"
                size={16}
                style={{ marginLeft: 5 }}
              />
            </View>

            <View style={styles.linkContainer}>
              <Text
                onPress={() => Linking.openURL("https://vimeo.com/658665978")}
                style={styles.link}
                accessibilityLabel="Español, opens in a new window"
              >
                Español
              </Text>
              <Feather
                name="external-link"
                size={16}
                style={{ marginLeft: 5 }}
              />
            </View>
          </View>
        </View>
      ),
    },
    {
      id: "m2-social",
      milestoneId: "milestone2",
      category: "Social",
      title: "Get to know a fellow resident",
      content:
        "It's nice to get to know your neighbours. You can learn a lot from each other, and exploring the neighbourhood together is a fun way to find your way around.",
      image: "",
      contentExtra: (
      <View style={styles.content}>
        <Text style={[styles.contentText, {color: "white"}]}>
          Try talking to a fellow resident of the shelter about where you both come from. It feels good to share your story with someone else. You might have similar experiences.
        </Text>
        <Text style={[styles.contentText, {color: "white"}]}>
          Tip: Ask a fellow resident if they would like to take a walk around the neighbourhood with you. This way, you will also get to know the area better.
        </Text>
        </View>
      ),
    },
  ],
};
