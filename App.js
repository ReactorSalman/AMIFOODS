import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  Platform,
  StatusBar,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Center from "./Components/Center";
import Welcome from "./Components/Welcome";
import Login from "./Components/Login";

export default function App() {
  const { landscape } = useDeviceOrientation();

  return (
    <SafeAreaView style={styles.container}>
      <Login />
      {/* <Welcome /> */}
      {/* <Header /> */}
      {/* <Text>Salman this is your first app</Text>
      <TouchableOpacity onPress={() => console.log("image tapped")}>
        <Image
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableOpacity> */}
      {/* <Center /> */}
      {/* <View
        style={{
          backgroundColor: "dodgerblue",
          width: "100%",
          height: landscape ? "100%" : "30%",
        }}
      ></View>
      <StatusBar style="auto" />
      <Button
        color="orange"
        title="Sign in"
        onPress={() => alert("Sorry! try again later")}
      /> */}
      {/* <Footer /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
