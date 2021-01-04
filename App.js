import React, { Component } from "react";
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
import { Login } from "./components/Login";

class App extends Component {
  state = {
    currPage: "home",
  };

  updateState = (page) => this.setState({ currPage: page });

  renderCases = () => {
    switch (this.state.currPage) {
      case "home":
        return <Login />;
      case "login":
        return <Login />;
      default:
        return <Text>HELLOO</Text>;
    }
  };

  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      },
      title: {
        color: "black",
        fontSize: 50,
      },
      loginView: {
        flex: 1,
        justifyContent: "center",
      },
    });

    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity>
          <Text style={styles.title}>Contact Tracing</Text>
        </TouchableOpacity>
        <View style={styles.loginView}>
          <Button
            title="Test"
            onPress={() => {
              this.setState({ currPage: "login" }, () => this.handleCaseView());

              // Alert.alert("Login", "You tried logging in", [
              //   {
              //     text: "Ok",
              //     onPress: () => console.log("Ok"),
              //   },
              // ])
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default App;
