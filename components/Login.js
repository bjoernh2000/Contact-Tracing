import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";

class Login extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <SafeAreaView>
        <Text style={{ textAlign: "center", textAlignVertical: "center" }}>
          LoginView
        </Text>
      </SafeAreaView>
    );
  }
}

export { Login };
