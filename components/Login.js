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
  StatusBar,
} from "react-native";

export default function Login() {
  return (
    <SafeAreaView>
      <Text style={{ textAlign: "center", textAlignVertical: "center" }}>
        LoginView
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  title: {
    color: "black",
    textAlign: "center",
    fontSize: 30,
  },
  loginView: {
    flex: 1,
    justifyContent: "center",
  },
});
