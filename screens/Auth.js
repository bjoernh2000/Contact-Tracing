import React, { Component } from "react";
import { View } from "react-native";
import { Login, Registration } from "../components";

export class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
    };
  }
  render() {
    return <View style={styles.container}></View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Auth;
