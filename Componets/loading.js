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
  ScrollView,
} from "react-native";
import React, { useRef, useEffect } from "react";
import LottieView from "lottie-react-native";
export default function LoadingScreen() {
  const animation = useRef(null);
  useEffect(() => {
    // You can control the ref programmatically, rather than using autoPlay
    // animation.current?.play();
  }, []);
  return (
    <View
      style={{
        height: Dimensions.get("screen").height,
        backgroundColor: "rgba(255, 255, 255, 0.86)",
        width: Dimensions.get("window").width,
        position: "absolute",
        zIndex: 100,
        top: 0,
      }}
    >
      {/* <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 200,
          height: 200,
          backgroundColor: "#eee",
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require("./assets/gradientBall.json")}
      /> */}
    </View>
  );
}
