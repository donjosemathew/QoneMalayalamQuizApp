import {
  Dimensions,
  TouchableOpacity,
  Button,
  StyleSheet,
  Text,
  View,
  StatusBar as StatusBar2,
  SafeAreaView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "react-native-elements";
import fontStyles from "../styles/font";
import componentStyles from "../styles/component";

export default function HomeScreen() {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", backgroundColor: "#fff" }}
    >
      <StatusBar color="transparent" style="inverted" />

      <View
        style={{
          backgroundColor: "#5C62FB",
          paddingHorizontal: 20,
          height: Dimensions.get("window").height * 0.4,
        }}
      >
        <View
          style={{
            marginTop: StatusBar2.currentHeight + 7,
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
        <View
          style={{
            flex: 1,

            justifyContent: "center",
          }}
        >
          <Text style={fontStyles.question}>
            ഭരണഘടന അനുവദിച്ചിരിക്കുന്ന മൗലികാവകാശങ്ങൾ എത്ര
          </Text>
        </View>
      </View>
      <View style={componentStyles.page}>
        <TouchableOpacity style={componentStyles.optionButton}>
          <View style={componentStyles.optionGradient}>
            <Text style={fontStyles.optionPos}>A</Text>
          </View>
          <Text style={fontStyles.optiontext}>സിക്കിം </Text>
        </TouchableOpacity>

        <View
          style={{
            height: "10%",
          }}
        />
      </View>
    </SafeAreaView>
  );
}
