import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions } from "react-native";
import fontStyles from "../styles/font";
export default function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <LinearGradient
        locations={[0, 1]}
        colors={["#19ABFB", "#586FEC"]}
        useAngle={true}
        angle={45}
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          width: Dimensions.get("window").width,
          padding: 20,
        }}
      >
        <View
          style={{
            padding: 5,
          }}
        >
          <Text style={fontStyles.question}>
            ആധുനിക മലയാള സാഹിത്യത്തിന്റെ പിതാവായി അറിയപ്പെടുന്നത്?
          </Text>
          <StatusBar style="auto" />
        </View>
      </LinearGradient>
    </View>
  );
}
