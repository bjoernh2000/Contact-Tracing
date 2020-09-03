import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Button,
  Alert,
  Platform,
  StatusBar
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.title}>Contact Tracing</Text>
      </TouchableOpacity>
      <View style={styles.loginView}>
        <Button
          title="Button"
          onPress={() =>
            Alert.alert("Login", "You tried logging in", [
              {
                text: "Ok",
                onPress: () => console.log("Ok")
              }
            ])
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  title: {
    color: "black",
    fontSize: 50
  },
  loginView: {
    flex: 1,
    justifyContent: "center"
  }
});
