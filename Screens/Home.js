import {
  Dimensions,
  TouchableOpacity,
  Button,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "react-native-elements";
import fontStyles from "../styles/font";
import componentStyles from "../styles/component";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <StatusBar style="auto" />
      <LinearGradient
        locations={[0, 1]}
        colors={["#19ABFB", "#586FEC"]}
        useAngle={true}
        angle={45}
        style={componentStyles.bgGradient}
      >
        <View
          style={{
            position: "absolute",
            top: 50,

            flex: 1,
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
            <View style={componentStyles.roundedItem}>
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
            <View style={componentStyles.roundedCenter}>
              <Text style={fontStyles.score}>23</Text>
            </View>
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
              <Text style={fontStyles.life}>3</Text>
            </View>
          </View>
        </View>
        <View style={componentStyles.page}>
          <Text style={fontStyles.question}>
            ആധുനിക മലയാള സാഹിത്യത്തിന്റെ പിതാവായി അറിയപ്പെടുന്നത്?
          </Text>

          <TouchableOpacity
            style={{
              backgroundColor: "#fff",
              padding: 16,
              shadowColor: "rgba(0, 0, 0, 0.64)",
              borderRadius: 5,
              marginTop: 10,
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
            }}
          >
            <Text style={fontStyles.option}>ആധുനിക മലയാള</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}
