import {
  Dimensions,
  TouchableOpacity,
  Button,
  StyleSheet,
  Text,
  View,
  StatusBar as StatusBar2,
  SafeAreaView,
} from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "react-native-elements";
import fontStyles from "../styles/font";
import componentStyles from "../styles/component";
import { useEffect } from "react";
import { useState } from "react";

export default function HomeScreen({ navigation }) {
  ///Move to home
  const backToHome = () => {
    navigation.navigate("Dashboard");
  };
  ///if new game
  ///set score to 0
  ///life to 5
  ///timer to 15s
  ///load random question
  /////
  const [score, setScore] = useState(0);
  const [life, setLife] = useState(5);
  useEffect(() => {
    setInterval(() => {
      setScore(score + 1);
    }, 100);
  }, [life]);

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", backgroundColor: "#fff" }}
    >
      <StatusBar color="transparent" style="inverted" />

      <View
        style={{
          backgroundColor: "#5C62FB",
          paddingHorizontal: 20,
          height: Dimensions.get("window").height * 0.4,
        }}
      >
        <View
          style={{
            marginTop: StatusBar2.currentHeight + 7,
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              margin: 1,
              alignItems: "flex-start",
            }}
          >
            <View onTouchEnd={backToHome} style={componentStyles.roundedItem}>
              <Icon type="material" size={25} name="close" color="#fff" />
            </View>
          </View>
          <View
            style={{
              flex: 1,

              margin: 1,
              alignItems: "center",
            }}
          >
            <CircularProgress
              value={score}
              radius={35}
              duration={2000}
              progressValueColor={"#ecf0f1"}
              maxValue={20}
              inActiveStrokeColor={"rgba(255, 255, 255, 0.64)"}
              titleColor={"white"}
              titleStyle={{ fontWeight: "bold" }}
              activeStrokeWidth={5}
              inActiveStrokeWidth={5}
            />
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              margin: 1,
              alignItems: "flex-end",
            }}
          >
            <View
              style={{
                ...componentStyles.roundedItem,
                flexDirection: "row",
                width: Dimensions.get("window").width * 0.2,
              }}
            >
              <Icon type="material" name="favorite" color="#fff" />
              <Text style={fontStyles.life}>{life}</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 1,

            justifyContent: "center",
          }}
        >
          <Text style={fontStyles.question}>
            ഭരണഘടന അനുവദിച്ചിരിക്കുന്ന മൗലികാവകാശങ്ങൾ എത്ര
          </Text>
        </View>
      </View>
      <View style={componentStyles.page}>
        <TouchableOpacity style={componentStyles.optionButton}>
          <View style={componentStyles.optionGradient}>
            <Text style={fontStyles.optionPos}>A</Text>
          </View>
          <Text style={fontStyles.optiontext}>സിക്കിം </Text>
        </TouchableOpacity>
        <TouchableOpacity style={componentStyles.optionButton}>
          <View style={componentStyles.optionGradient}>
            <Text style={fontStyles.optionPos}>B</Text>
          </View>
          <Text style={fontStyles.optiontext}>സിക്കിം </Text>
        </TouchableOpacity>
        <TouchableOpacity style={componentStyles.optionButton}>
          <View style={componentStyles.optionGradient}>
            <Text style={fontStyles.optionPos}>C</Text>
          </View>
          <Text style={fontStyles.optiontext}>സിക്കിം </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
