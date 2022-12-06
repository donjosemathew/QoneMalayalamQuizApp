import {
  Dimensions,
  TouchableOpacity,
  Button,
  StyleSheet,
  Text,
  View,
  StatusBar as StatusBar2,
  Animated,
  SafeAreaView,
} from "react-native";
import React from "react";
import { useFocusEffect } from "@react-navigation/native";
import CircularProgress from "react-native-circular-progress-indicator";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "react-native-elements";
import fontStyles from "../styles/font";
import componentStyles from "../styles/component";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import LottieView from "lottie-react-native";
import AfterAnswer from "./afterAnswer";
export default function HomeScreen({ navigation }) {
  ///Move to home
  const { goBack } = navigation;
  const backToHome = () => {
    navigation.navigate("Dashboard");
  };
  ///if new game
  ///set score to 0
  ///life to 5
  ///timer to 15s
  ///load random question
  /////

  const data = [
    {
      question: "ഭരണഘടന അനുവദിച്ചിരിക്കുന്ന മൗലികാവകാശങ്ങൾ എത്ര1",
      optiona: "സിക്കിം",
      optionb: "സിക്കിം",
      optionc: "സിക്കിം",
      optiond: "സിക്കിം",
      answer: "a",
    },
    {
      question: "ഭരണഘടന അനുവദിച്ചിരിക്കുന്ന മൗലികാവകാശങ്ങൾ എത്ര2",
      optiona: "സിക്കിം",
      optionb: "സിക്കിം",
      optionc: "സിക്കിം",
      optiond: "സിക്കിം",
      answer: "b",
    },
    {
      question: "ഭരണഘടന അനുവദിച്ചിരിക്കുന്ന മൗലികാവകാശങ്ങൾ എത്ര3",
      optiona: "സിക്കിം",
      optionb: "സിക്കിം",
      optionc: "സിക്കിം",
      optiond: "സിക്കിം",
      answer: "c",
    },
    {
      question: "ഭരണഘടന അനുവദിച്ചിരിക്കുന്ന മൗലികാവകാശങ്ങൾ എത്ര4",
      optiona: "സിക്കിം",
      optionb: "സിക്കിം",
      optionc: "സിക്കിം",
      optiond: "സിക്കിം",
      answer: "d",
    },
    {
      question: "ഭരണഘടന അനുവദിച്ചിരിക്കുന്ന മൗലികാവകാശങ്ങൾ എത്ര5",
      optiona: "സിക്കിം",
      optionb: "സിക്കിം",
      optionc: "സിക്കിം",
      optiond: "സിക്കിം",
      answer: "a",
    },
  ];

  const [score, setScore] = useState(0);

  const [life, setLife] = useState(5);

  const [counter, setCounter] = useState(30); ///timer variable
  const [startCountdown, setStartCountdown] = useState(false); //select reset
  useEffect(() => {
    if (startCountdown) {
      const timer =
        counter > 0 && setInterval(() => setCounter(counter - 1), 100);

      if (counter === 0) {
        // countdown is finished
        setStartCountdown(false);
        // update your redux state here
        // updateReduxCounter(0);
      }

      return () => clearInterval(timer);
    }
  }, [counter, startCountdown]);
  ///////////////////////////////Get a question
  const [question, setQuestion] = useState({});
  const getaRandomQuestion = () => {
    const number = Math.floor(Math.random() * data.length);
    setQuestion(data[number]);
  };
  const newQuestion = () => {
    console.log("sds");
    setOptionSelected("");
    setQuestion();
    getaRandomQuestion();
    setCounter(33);

    setStartCountdown(true);
  };
  //////mark answer
  const [optionSelected, setOptionSelected] = useState("");
  const markAnswer = (value) => {
    setOptionSelected(value);
    setStartCountdown(false);
    console.log(value);
    if (value == question.answer) {
    }
  };

  ////Load question initially
  // useEffect(() => {
  //   console.log("sdssdsd");
  //   newQuestion();
  // }, []);
  useFocusEffect(
    React.useCallback(() => {
      newQuestion();
      return () => null;
    }, [])
  );
  const animation = useRef(null);
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", backgroundColor: "#fff" }}
    >
      <StatusBar color="transparent" style="inverted" />
      <AfterAnswer newQuestion={newQuestion} backToHome={backToHome} />
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
              value={counter}
              radius={35}
              duration={200}
              maxValue={30}
              activeStrokeColor={counter < 10 ? "#E53935" : "#66BB6A"}
              activeStrokeSecondaryColor={counter < 10 ? "#FF5722" : "#66BB6A"}
              inActiveStrokeColor={"rgba(255, 255, 255, 0.64)"}
              titleColor={"white"}
              titleStyle={{ fontWeight: "bold" }}
              activeStrokeWidth={5}
              title={"" + score}
              inActiveStrokeWidth={5}
              titleStyle={{
                fontSize: RFValue(20),
                fontFamily: "DMBold",
              }}
              progressValueStyle={{
                display: "none",
              }}
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
          {question ? (
            <Text style={fontStyles.question}>{question.question}</Text>
          ) : (
            ""
          )}
        </View>
      </View>

      {/* <View
        style={{
          position: "absolute",
          zIndex: 100,
          bottom: 0,
        }}
      >
        <LottieView
          autoPlay
          ref={animation}
          style={{
            width: 200,
            height: 200,
            backgroundColor: "#F4433600",
          }}
          // Find more Lottie files at https://lottiefiles.com/featured
          source={require("../assets/layer.json")}
        />
      </View> */}
      {question ? (
        <View style={componentStyles.page}>
          <TouchableOpacity
            disabled={optionSelected}
            onPress={() => {
              markAnswer("a");
            }}
            style={{
              ...componentStyles.optionButton,
              borderRightWidth:
                optionSelected == "a" || question.answer == "a" ? 10 : 0,

              borderColor:
                optionSelected && question.answer == "a"
                  ? "rgba(100, 221, 23, 0.62)"
                  : optionSelected == "a"
                  ? "rgba(244, 67, 54, 0.62)"
                  : "rgba(244, 67, 54, 0)",
            }}
          >
            <View style={componentStyles.optionGradient}>
              <Text style={fontStyles.optionPos}>A</Text>
            </View>
            <Text style={fontStyles.optiontext}>{question.optiona} </Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={optionSelected}
            onPress={() => {
              markAnswer("b");
            }}
            style={{
              ...componentStyles.optionButton,
              borderRightWidth:
                optionSelected == "b" || question.answer == "b" ? 10 : 0,

              borderColor:
                optionSelected && question.answer == "b"
                  ? "rgba(100, 221, 23, 0.62)"
                  : optionSelected == "b"
                  ? "rgba(244, 67, 54, 0.62)"
                  : "rgba(244, 67, 54, 0)",
            }}
          >
            <View style={componentStyles.optionGradient}>
              <Text style={fontStyles.optionPos}>B</Text>
            </View>
            <Text style={fontStyles.optiontext}>{question.optionb} </Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={optionSelected}
            onPress={() => {
              markAnswer("c");
            }}
            style={{
              ...componentStyles.optionButton,
              borderRightWidth:
                optionSelected == "c" || question.answer == "c" ? 10 : 0,

              borderColor:
                optionSelected && question.answer == "c"
                  ? "rgba(100, 221, 23, 0.62)"
                  : optionSelected == "c"
                  ? "rgba(244, 67, 54, 0.62)"
                  : "rgba(244, 67, 54, 0)",
            }}
          >
            <View style={componentStyles.optionGradient}>
              <Text style={fontStyles.optionPos}>C</Text>
            </View>
            <Text style={fontStyles.optiontext}>{question.optionc} </Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={optionSelected}
            onPress={() => {
              markAnswer("d");
            }}
            style={{
              ...componentStyles.optionButton,
              borderRightWidth:
                optionSelected == "d" || question.answer == "d" ? 10 : 0,

              borderColor:
                optionSelected && question.answer == "d"
                  ? "rgba(100, 221, 23, 0.62)"
                  : optionSelected == "d"
                  ? "rgba(244, 67, 54, 0.62)"
                  : "rgba(244, 67, 54, 0)",
            }}
          >
            <View style={componentStyles.optionGradient}>
              <Text style={fontStyles.optionPos}>D</Text>
            </View>
            <Text style={fontStyles.optiontext}>{question.optiond} </Text>
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: "#5C62FB",
              width: 60,
              marginTop: 50,
              height: 60,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 30,
              alignSelf: "center",
            }}
          >
            <Icon
              solid
              name="arrow-forward-outline"
              type="ionicon"
              color="#fff"
              size={50}
            />
          </View>
        </View>
      ) : (
        ""
      )}
    </SafeAreaView>
  );
}
