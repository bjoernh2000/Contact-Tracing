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

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currPage: "home",
    };
  }

  updateState = (page) => this.setState({ currPage: page });

  renderCases = () => {
    switch (this.state.currPage) {
      case "home":
        return <Text>Home</Text>;
      case "login":
        return <Text>Login</Text>;
      default:
        return <Text>HELLOO</Text>;
    }
  };
  render() {
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

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loginView}>
          <Button
            title="Login"
            onPress={() => this.props.navigation.navigate("Login")}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default Home;
