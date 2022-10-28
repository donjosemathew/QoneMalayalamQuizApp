import { StyleSheet } from "react-native";
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
  option: {
    fontSize: RFValue(15),
  },
});
export default fontStyles;
