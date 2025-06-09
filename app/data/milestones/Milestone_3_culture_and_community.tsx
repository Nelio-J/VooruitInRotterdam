import { MilestoneDataInterface } from "@/app/components/MilestoneDataInterfaces";
import { Feather } from "@expo/vector-icons";
import { Image, Linking, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  content: {
    flex: 1,
    minWidth: 0, // Allow text to shrink if needed
    fontSize: 16,
    fontFamily: "NotoSerif_400Regular",
    marginRight: 10,
  },
  H2: {
    fontSize: 18,
    fontFamily: "NotoSerif_700Bold",
    marginTop: 10,
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
    wordWrap: "break-word",
    textAlign: "left",
    marginRight: 5,
  },
  bulletListContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bulletList: {
    fontSize: 16,
    fontFamily: "NotoSerif_400Regular",
    paddingVertical: 10,
    wordWrap: "break-word",
    textAlign: "left",
  },
  contentImage: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
  },
});

export const MilestoneData3: MilestoneDataInterface = {
  milestoneId: "milestone_3_culture_and_community",
  milestoneTitle: "Milestone 3",
  milestoneSubtitle: "Culture and Community",
  activities: [
    {
      id: "m3-language",
      milestoneId: "milestone3",
      category: "Language",
      title: "National Holidays",
      content:
        "The Netherlands has plenty of holidays. On these days, many people are off work and school, and a bunch of events are held.",
      image: "",
      contentExtra: (
        <Text style={[styles.content]}>
          <View style={{ justifyContent: "space-between" }}>
            <Text style={[styles.bulletList]}>
              {"\u2B24"} New Years Day (1 January)
              {"\n"}
              <Image
                source={{
                  uri: "https://www.rotterdamcentrum.nl/media/Bezienswaardigheden-architectuur/Erasmusbrug/Fotos/_1600xAUTO_crop_center-center_90_none_ns/Erasmusbrug-vuurwerk-rotterdam-2016-Peter-Bezemer.jpg?v=1695207845",
                }}
                style={styles.contentImage}
                alt="An image of the King's Day celebration in Rotterdam, showing people dressed in orange and celebrating."
              ></Image>
              The start of the new year gets celebrated with fireworks and new
              year’s wishes.
            </Text>

            <Text style={[styles.bulletList]}>
              {"\u2B24"} Good Friday (in April, date varies)
              {"\n"}
              The Friday before Easter.
            </Text>
            <Text style={[styles.bulletList]}>
              {"\u2B24"} Easter (in April, date varies)
              {"\n"}
              An important Christian holiday. Easter is celebrated with
              chocolate Easter eggs and an Easter breakfast.
            </Text>
            <Text style={[styles.bulletList]}>
              {"\u2B24"} King's Day (27 April)
              {"\n"}
              <Image
                source={{
                  uri: "https://assets.foleon.com/eu-central-1/de-uploads-7e3kk3/48001/image_-resultaten_k_voor_iedereen_3-2.4eb81481dd45.jpg?",
                }}
                style={styles.contentImage}
                alt="An image of the King's Day celebration in Rotterdam, showing people dressed in orange and celebrating."
              ></Image>
              The King’s birthday. The entire country paints itself orange.
              There are a ton of fun events.
            </Text>
            <Text style={[styles.bulletList]}>
              {"\u2B24"} Liberation Day (5 May)
              {"\n"}
              The day on which the Netherlands celebrates its liberation from
              World War II.
            </Text>
            <Text style={[styles.bulletList]}>
              {"\u2B24"} Ascension Day (in May, date varies)
            </Text>
            <Text style={[styles.bulletList]}>
              {"\u2B24"} Whit days (in May or June, date varies)
            </Text>
            <Text style={[styles.bulletList]}>
              {"\u2B24"} Christmas (25 and 26 December)
              {"\n"}
              <Image
                source={{
                  uri: "https://images.pubble.cloud/worker/jpg/quick/1920/51188/d9f3425a/content/2022/12/dd708102-ebbe-45fe-b02a-ecfaa9c00730",
                }}
                style={styles.contentImage}
                alt="An image of the King's Day celebration in Rotterdam, showing people dressed in orange and celebrating."
              ></Image>
              A very festive time of year. Many people celebrate Christmas
              with family, friends, good food, and gifts.
            </Text>
          </View>
        </Text>
      ),
    },
    {
      id: "m3-rotterdam",
      milestoneId: "milestone3",
      category: "Rotterdam",
      title: "Learn about Feyenoord",
      content:
        "Feyenoord is a famous footballclub from Rotterdam. The club is an important part of the culture of Rotterdam.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Feyenoord_logo_since_2024.svg/2048px-Feyenoord_logo_since_2024.svg.png",
      contentExtra: (
        <View style={styles.content}>
          <Text style={styles.contentText}>
            Feyenoord has existed for more than 100 years! A lot of people in
            Rotterdam are fan of Feyenoord.
          </Text>
          <Text style={styles.contentText}>
            The club plays in the stadium De Kuip.
          </Text>
        </View>
      ),
    },
    {
      id: "m3-integration",
      milestoneId: "milestone3",
      category: "Integration",
      title: "A trip to the Central Library",
      content: (
        <Text style={[styles.content]}>
          <Image
            source={{
              uri: "https://www.bibliotheek.rotterdam.nl/templates/yootheme/cache/a9/141261_Bibliotheeek_Lokatie_CentraleBib-a98eec53.jpeg",
            }}
            style={styles.contentImage}
            alt="An image of a group of people sitting at a table in the library"
          ></Image>
          {"\n"}
          The Library (Centrale Bibliotheek) is a place full of knowledge! It is
          not just a place to read books.
        </Text>
      ),
      image: "",
      contentExtra: (
        <View style={styles.content}>
          <Text style={styles.contentText}>
            At the Library, you can practice the Dutch language, learn more
            about the Netherlands, use free computers to sort things out, and
            take part in all sorts of fun activities.
          </Text>
          <Image
            source={{
              uri: "https://www.bibliotheek.rotterdam.nl/templates/yootheme/cache/c2/Taalcaf-c2f31b4d.jpeg",
            }}
            style={styles.contentImage}
            alt="An image of a group of people sitting at a table in the library"
          />
          <Text style={styles.contentText}>
            On the first floor of the Library, you can find the Ontwikkelplein.
            You can come here for information and practical assistance with
            things such as language skills, digital skills, and government
            business.
          </Text>

          <View style={styles.linkContainer}>
            <Text
              onPress={() =>
                Linking.openURL(
                  "https://www.bibliotheek.rotterdam.nl/ontwikkelplein"
                )
              }
              style={styles.link}
              accessibilityLabel="Link to the Ontwikkelplein page on the Rotterdam Library website, opens in a new window"
            >
              Overview of the different activities at the Ontwikkelplein{" "}
              <Feather
                name="external-link"
                size={16}
                style={{ marginLeft: 5 }}
              />
            </Text>
          </View>
          <Text style={styles.contentText}>
            Drop by and see what the Library can do for you!
          </Text>
          <Text style={styles.contentText}>Address: Hoogstraat 110</Text>
        </View>
      ),
    },
    {
      id: "m3-work",
      milestoneId: "milestone3",
      category: "Work",
      title: "Working in the Netherlands",
      content:
        "Working is an important step to contribute to society and to take care of yourself and your family. " +
        "\n\n" +
        "Being able to take care of yourself is not the only benefit of working. Work connects you with new people and helps you learn the language.",
      image: "",
      contentExtra: (
        <View style={styles.content}>
          <Text style={styles.H2}>Can I work?</Text>
          <Text style={styles.contentText}>
            Do you have a permit (verblijfs-vergunning)?
            {"\n"}
            Status holders have the same rights as Dutch citizens and are
            allowed to work.
          </Text>
          <Text style={styles.contentText}>
            Are you an asylum seeker? Then it works a bit differently.
            {"\n"}
            Asylum seekers are not allowed payed work during the first 6 months
            of their asylum application. If the application is still pending
            after 6 months, you are allowed to start working. Your employer must
            apply for a Work Permit (TWV) to hire you.
          </Text>
          <Text style={[styles.contentText, {marginBottom: 20}]}>
            Everyone can do volunteer work.
          </Text>
          <Text style={styles.H2}>Finding work</Text>
          <Text style={styles.contentText}>
            Finding work as a newcomer is not always easy. Luckily, help is
            available.
          </Text>
          <Text style={styles.contentText}>
            Participation Desk (meedoenbalie)
            {"\n"}
            There is a weekly participation desk in the shelter. You can stop by
            here for help with finding work.
          </Text>
          <Text style={[styles.contentText, { fontFamily: "NotoSerif_600SemiBold" }]}>
            <Feather name="arrow-right" size={16} />
            Tuesday 15:00 - 16:00 on deck 8
          </Text>
          <Text style={styles.contentText}>
            For more information about working in the Netherlands, you can also
            check the RefugeeHelp website.
          </Text>
          <View style={styles.linkContainer}>
            <Text
              onPress={() =>
                Linking.openURL(
                  "https://www.refugeework.nl/en/practical-matters-rights-and-obligations"
                )
              }
              style={styles.link}
              accessibilityLabel="Check out the step-by-step guides to find work as a newcomer (available in multiple languages), opens in a new window"
            >
              Check out the step-by-step guides to find work as a newcomer
              (available in multiple languages)
              {" "}
              <Feather
                name="external-link"
                size={16}
                style={{ marginLeft: 5 }}
              />
            </Text>
          </View>
        </View>
      ),
    },
  ],
};
