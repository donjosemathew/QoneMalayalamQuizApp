import {
  Dimensions,
  TouchableOpacity,
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  StatusBar as StatusBar2,
} from "react-native";
import { Icon } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import fontStyles from "../styles/font";
import componentStyles from "../styles/component";
import { RFValue } from "react-native-responsive-fontsize";
import { ScrollView } from "react-native-gesture-handler";

export default function DashboardScreen() {
  const data = [
    {
      color: "#3FE0AE",
      text: "When building your own native code,",
    },
    {
      color: "#F78E1E",
      text: "When building your own native code,",
    },
  ];
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        paddingLeft: 25,
        paddingRight: 25,
        paddingBottom: 40,
      }}
    >
      <StatusBar style="auto" />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          marginTop: StatusBar2.currentHeight + 5,
        }}
      >
        <Icon
          name="reorder-two-outline"
          type="ionicon"
          color="#2D2E31"
          size={40}
        />
        <Image
          style={{
            height: 45,
            width: 45,
            borderRadius: 45 / 2,
          }}
          source={{
            uri: "https://randomuser.me/api/portraits/women/12.jpg",
          }}
        />
      </View>
      <View
        style={{
          width: "100%",
          marginTop: 6,
        }}
      >
        <Text
          style={{
            fontSize: RFValue(45),

            letterSpacing: -2.8,
            fontFamily: "DMSansBold",
            color: "#2D2E31",
          }}
        >
          Qone
        </Text>
        <Text
          style={{
            fontSize: RFValue(40),
            marginTop: -20,
            color: "#fff",
            letterSpacing: -2.5,
            fontFamily: "DMsans",
            color: "#2D2E31",
          }}
        >
          Quiz App
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          height: Dimensions.get("window").height * 0.38,
          backgroundColor: "#5C62FB",
          marginTop: 30,
          padding: 20,
          position: "relative",
          justifyContent: "flex-end",
          flexDirection: "column",
        }}
      >
        <Image
          style={{
            position: "absolute",
            top: -60,
            right: -40,
          }}
          source={require("../assets/3d-casual-life-books-and-cup.png")}
        />
        <Text
          style={{
            fontFamily: "DMsans",
            fontSize: RFValue(23),
            lineHeight: 27,
            color: "#fff",
          }}
        >
          When building your own native code,
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            width: "70%",
            marginTop: 7,
            padding: 12,
            borderRadius: 1000,
            paddingHorizontal: 40,
            marginBottom: 10,
          }}
        >
          <Text
            style={{
              fontFamily: "DMSansBold",
              color: "#fff",
              fontSize: RFValue(18),
            }}
          >
            Start Playing
          </Text>
        </TouchableOpacity>
      </View>

      {/* <ScrollView horizontal>
            {data.map((item, i) => {
              return (
                <View
                  key={i}
                  style={{
                    borderRadius: 10,
                    padding: 10,

                    marginLeft: i != 0 ? 0 : 30,

                    height: 300,
                    margin: 20,
                    marginTop: 30,
                    backgroundColor: "white",
                    width: 200,
                  }}
                >
                  <Text>sds</Text>
                </View>
              );
            })}
          </ScrollView> */}

      {/* <LinearGradient
        locations={[0, 1]}
        colors={["#19ABFB", "#586FEC"]}
        useAngle={true}
        angle={45}
        style={componentStyles.bgGradient2}
      ></LinearGradient> */}
      <View
        style={{
          height: Dimensions.get("window").height * 0.28,
          justifyContent: "center",
        }}
      >
        <ScrollView
          showsHorizontalScrollIndicator={false}
          style={{
            marginTop: 15,
          }}
          contentContainerStyle={{
            alignItems: "center",
          }}
          horizontal
        >
          {data.map((item, i) => {
            return (
              <View
                key={i}
                style={{
                  marginRight: 30,
                  width: "100%",
                  height: Dimensions.get("window").height * 0.28,
                  width: Dimensions.get("window").width * 0.5,
                  backgroundColor: item.color,
                  marginTop: 0,
                  padding: 20,
                  position: "relative",
                  justifyContent: "flex-end",
                  flexDirection: "column",
                }}
              >
                <Text
                  style={{
                    fontFamily: "DMsans",
                    fontSize: RFValue(23),
                    lineHeight: 27,
                    color: "#fff",
                  }}
                >
                  {item.text}
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.3)",

                    marginTop: 7,
                    width: 50,
                    height: 50,
                    borderRadius: 1000,
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: 10,
                  }}
                >
                  <Icon
                    name="arrow-forward-outline"
                    type="ionicon"
                    color="#FFF"
                    size={30}
                  />
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
