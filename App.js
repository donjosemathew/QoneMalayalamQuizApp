import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";

import HomeScreen from "./Screens/Home";
import DashboardScreen from "./Screens/Dashboard";
const Stack = createNativeStackNavigator();
export default function App() {
  const [fontsLoaded] = useFonts({
    DMsans: require("./assets/fonts/DMSans-Regular.ttf"),
    DMSansBold: require("./assets/fonts/DMSans-Bold.ttf"),
    DMBold: require("./assets/fonts/DMSans-Medium.ttf"),
    MalayalamFont: require("./assets/fonts/NotoSansMalayalam-Regular.ttf"),
    MalayalamFontBold: require("./assets/fonts/NotoSansMalayalam-Light.ttf"),
    MalayalamFontLight: require("./assets/fonts/NotoSansMalayalam-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
