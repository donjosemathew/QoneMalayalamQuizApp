import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const componentStyles = StyleSheet.create({
  bgGradient: {
    flex: 1,
    alignItems: "center",

    width: Dimensions.get("window").width,
    padding: 20,
  },
  bgGradient2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    width: Dimensions.get("window").width,
    padding: 30,
    fontFamily: "DMsans",
    paddingRight: 0,
    paddingLeft: 0,
  },
  optionGradient: {
    width: 50,
    height: 50,
    backgroundColor: "#5C62FB",
    borderRadius: 250,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 7,
  },
  page: {
    padding: 20,
    width: "100%",
    backgroundColor: "#FAFAFA",
    flex: 1,
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
  optionButton: {
    backgroundColor: "#fff",
    padding: 10,
    shadowColor: "rgba(92, 98, 251, 0.26)",

    elevation: 8,
    borderRadius: 6,
    marginTop: 16,

    flexDirection: "row",
    alignItems: "center",
  },
});
export default componentStyles;
