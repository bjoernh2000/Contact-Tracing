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

  renderForms = () => {
    if (this.login) {
      return <Login switchState={this.switchState} />;
    } else {
      return <Registration switchState={this.switchState} />;
    }
  };

  switchState = () => {
    this.setState({ login: !this.state.login });
  };

  render() {
    return <View style={styles.container}> {this.renderForms} </View>;
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
