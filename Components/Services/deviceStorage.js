import { AsyncStorage } from "react-native";

const deviceStorage = {
  async SaveItem(key, value) {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.log("AsyncStorage Error: " + error.message);
    }
  },
};

export default deviceStorage;
