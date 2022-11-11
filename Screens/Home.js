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
      <StatusBar color="transparent" style="inverted" />
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
            ഭിന്നലിംഗക്കാര്‍ക്കായി പ്രേത്യേക നയമുണ്ടാക്കിയ ആദ്യ സംസ്ഥാനം
          </Text>

          <TouchableOpacity style={componentStyles.optionButton}>
            <LinearGradient
              locations={[0, 0.7]}
              colors={["rgba(25, 171, 251, 1)", "rgba(88, 111, 236, 1)"]}
              useAngle={true}
              angle={20}
              style={componentStyles.optionGradient}
            >
              <Text style={fontStyles.optionPos}>A</Text>
            </LinearGradient>
            <Text style={fontStyles.optiontext}>സിക്കിം </Text>
          </TouchableOpacity>
          <TouchableOpacity style={componentStyles.optionButton}>
            <LinearGradient
              locations={[0, 0.7]}
              colors={["rgba(25, 171, 251, 1)", "rgba(88, 111, 236, 1)"]}
              useAngle={true}
              angle={20}
              style={componentStyles.optionGradient}
            >
              <Text style={fontStyles.optionPos}>B</Text>
            </LinearGradient>
            <Text style={fontStyles.optiontext}>മേഘാലയ </Text>
          </TouchableOpacity>
          <TouchableOpacity style={componentStyles.optionButton}>
            <LinearGradient
              locations={[0, 0.7]}
              colors={["rgba(25, 171, 251, 1)", "rgba(88, 111, 236, 1)"]}
              useAngle={true}
              angle={20}
              style={componentStyles.optionGradient}
            >
              <Text style={fontStyles.optionPos}>C</Text>
            </LinearGradient>
            <Text style={fontStyles.optiontext}>കേരളം </Text>
          </TouchableOpacity>
          <TouchableOpacity style={componentStyles.optionButton}>
            <LinearGradient
              locations={[0, 0.7]}
              colors={["rgba(25, 171, 251, 1)", "rgba(88, 111, 236, 1)"]}
              useAngle={true}
              angle={20}
              style={componentStyles.optionGradient}
            >
              <Text style={fontStyles.optionPos}>D</Text>
            </LinearGradient>
            <Text style={fontStyles.optiontext}>അസ്സം </Text>
          </TouchableOpacity>
          <View
            style={{
              height: "10%",
            }}
          />
        </View>
      </LinearGradient>
    </View>
  );
}
