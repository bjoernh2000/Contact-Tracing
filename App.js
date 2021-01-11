import "react-native-gesture-handler";
import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
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
import Login from "./components/Login";
import Home from "./components/Home";

const Stack = createStackNavigator();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currPage: "home",
    };
  }

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
        textAlign: "center",
      },
      loginView: {
        flex: 1,
        justifyContent: "center",
      },
    });

    return (
      <NavigationContainer>
        <SafeAreaView>
          <TouchableOpacity>
            <Text style={styles.title}>Contact Tracing</Text>
          </TouchableOpacity>
        </SafeAreaView>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Welcome" }}
          />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
