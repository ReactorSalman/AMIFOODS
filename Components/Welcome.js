import React from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
} from "react-native";

import axios from "axios";
import deviceStorage from "./Services/deviceStorage";

const Welcome = (props) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="contain"
        style={styles.background}
        source={require("../assets/background.jpg")}
      >
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require("../assets/logo.png")} />
          <Text>Eat healthy be healthy</Text>
        </View>
        <TouchableHighlight style={styles.loginButton}>
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.registerButton}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableHighlight>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  button: {
    height: 36,
    backgroundColor: "#48BBEC",
    borderColor: "#48BBEC",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: "stretch",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    alignSelf: "center",
  },
  container: {
    backgroundColor: "gold",
    flex: 1,
  },
  loginButton: {
    height: 36,
    backgroundColor: "#fc5c65",
    borderColor: "#48BBEC",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: "stretch",
    justifyContent: "center",
  },
  logo: {
    width: 150,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  registerButton: {
    height: 36,
    backgroundColor: "#4ecdc4",
    borderColor: "#48BBEC",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: "stretch",
    justifyContent: "center",
  },
});

export default Welcome;
