import { View, Dimensions, StatusBar, Text } from "react-native";
import { Icon } from "react-native-elements";
import { RFValue } from "react-native-responsive-fontsize";

export default function AfterAnswer() {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  return (
    <View
      style={{
        position: "absolute",
        zIndex: 100,
        width: windowWidth,
        height: windowHeight * 0.2,

        paddingBottom: 0,
        bottom: 0,
      }}
    >
      <View
        style={{
          backgroundColor: "#fff",
          padding: 10,
          shadowColor: "rgba(92, 98, 251, 0.96)",
          flex: 1,
          alignItems: "center",
          elevation: 18,
          borderTopRightRadius: 26,
          borderTopLeftRadius: 26,
        }}
      >
        <Text
          style={{
            fontFamily: "DMSansBold",
            fontSize: RFValue(24),
            marginTop: 5,
          }}
        >
          Next Question
        </Text>
        <View
          style={{
            flexDirection: "row",
            marginTop: 2,
          }}
        >
          <View
            style={{
              backgroundColor: "blue",
              padding: 10,
              borderRadius: 30,
              width: 60,

              height: 60,
            }}
          >
            <Icon
              solid
              name="arrow-forward-outline"
              type="ionicon"
              color="red"
              size={50}
            />
          </View>
          <Icon solid name="close" type="ionicon" color="red" size={50} />
        </View>
      </View>
    </View>
  );
}
