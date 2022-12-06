import {
  View,
  Dimensions,
  StatusBar,
  Text,
  TouchableOpacity,
} from "react-native";
import LottieView from "lottie-react-native";
import { Icon } from "react-native-elements";
import { RFValue } from "react-native-responsive-fontsize";
import { useRef } from "react";

export default function AfterAnswer({ newQuestion, backToHome }) {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const animation = useRef(null);

  return (
    <View
      style={{
        position: "absolute",
        zIndex: 100,
        width: windowWidth,

        paddingBottom: 9,
        bottom: 0,
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
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
      </View>
      <View
        style={{
          backgroundColor: "#FAFAFA",
          padding: 10,
          // shadowColor: "rgba(#424242, 0.96)",
          flex: 1,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "DMSansBold",
            fontSize: RFValue(24),
            marginTop: 5,
          }}
        >
          Nexts Question
        </Text>
        <View
          style={{
            flexDirection: "row",
            marginTop: 6,
          }}
        >
          <TouchableOpacity
            onPress={newQuestion}
            style={{
              borderRadius: 30,
              width: 60,
              alignItems: "center",
              justifyContent: "center",
              height: 60,
              borderWidth: 2,
              borderColor: "#eeeeee",
            }}
          >
            <Icon
              solid
              name="arrow-forward-outline"
              type="ionicon"
              color="#00c853"
              size={40}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={backToHome}
            style={{
              borderRadius: 30,
              width: 60,
              alignItems: "center",
              justifyContent: "center",
              height: 60,
              marginLeft: 60,
              borderWidth: 2,
              borderColor: "#eeeeee",
            }}
          >
            <Icon solid name="close" type="ionicon" color="#e57373" size={40} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
