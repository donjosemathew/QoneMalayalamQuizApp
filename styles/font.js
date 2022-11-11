import { StyleSheet, StatusBar as StatusBar2 } from "react-native";
import { Dimensions } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
const fontStyles = StyleSheet.create({
  question: {
    textAlign: "left",
    fontSize: 22,

    fontWeight: "500",
    color: "#fff",
    fontFamily: "MalayalamFont",
    lineHeight: 31,
    letterSpacing: 0.1,
    marginBottom: 6,
  },
  life: {
    marginLeft: 3,
    fontSize: RFValue(15),
    fontWeight: "bold",
    color: "#fff",
  },
  score: {
    marginLeft: 3,
    fontSize: RFValue(20),

    color: "#fff",
  },
  optiontext: {
    fontSize: RFValue(15),
    fontFamily: "MalayalamFont",
    color: " rgba(0, 0, 0, 0.74)",
    letterSpacing: -1,
  },
  optionPos: {
    fontSize: RFValue(18),
    fontWeight: "bold",
    color: "#fff",
  },
  textHead: {
    color: "#fff",
  },
});
export default fontStyles;
