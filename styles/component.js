import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const componentStyles = StyleSheet.create({
  bgGradient: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
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

    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 7,
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
  optionButton: {
    backgroundColor: "#fff",
    padding: 8,
    shadowColor: "rgba(0, 0, 0, 0.64)",
    borderRadius: 6,
    marginTop: 16,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    flexDirection: "row",
    alignItems: "center",
  },
});
export default componentStyles;
