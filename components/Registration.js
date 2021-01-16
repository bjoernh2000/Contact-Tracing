import React, { Component } from "react";
import { View, Text } from "react-native";
import { Input, TextLink, Button, Loading } from "./common";

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      password_confirmation: "",
      error: "",
      loading: false,
    };
  }

  render() {
    const {
      email,
      password,
      password_confirmation,
      error,
      loading,
    } = this.state;

    return (
      <View style={styles.form}>
        <View style={styles.section}>
          <Input
            placeholder="user@email.com"
            label="Email"
            value={email}
            onChangeText={(email) => this.setState({ email })}
          />
        </View>

        <View style={styles.section}>
          <Input
            secureTextEntry
            placeholder="password"
            label="Password"
            value={password}
            onChangeText={(password) => this.setState({ password })}
          />
        </View>

        <View style={styles.section}>
          <Input
            secureTextEntry
            placeholder="confirm password"
            label="Confirm Password"
            value={password_confirmation}
            onChangeText={(password_confirmation) =>
              this.setState({ password_confirmation })
            }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    width: "100%",
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
  section: {
    flexDirection: "row",
    borderBottomWidth: 1,
    backgroundColor: "#fff",
    borderColor: "#ddd",
  },
});

export { Registration };
