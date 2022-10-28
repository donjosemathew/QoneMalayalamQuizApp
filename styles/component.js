import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const componentStyles = StyleSheet.create({
  bgGradient: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width,
    padding: 20,
  },
  page: {
    padding: 1,
    width: "100%",
  },
  roundedItem: {
    alignItems: "center",
    justifyContent: "center",
    width: 44,
    height: 44,

    justifyContent: "center",
    alignContent: "center",
    borderWidth: 1,
    borderRadius: 22,
    borderColor: "rgba(255, 255, 255, 0.44)",
  },
  roundedCenter: {
    alignItems: "center",
    justifyContent: "center",
    width: 68,
    height: 68,

    justifyContent: "center",
    alignContent: "center",
    borderWidth: 4,
    borderRadius: 34,
    borderColor: "rgba(255, 255, 255, 0.64)",
  },
});
export default componentStyles;
