import React, { Component } from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";
import { Login, Registration } from "../components";

export class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true,
    };
    this.renderForms = this.renderForms.bind(this);
  }

  renderForms() {
    if (this.state.login) {
      return <Login switchState={this.switchState} />;
    } else {
      return <Registration switchState={this.switchState} />;
    }
  }

  switchState = () => {
    this.setState({ login: !this.state.login });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>{this.renderForms()}</SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default Auth;
