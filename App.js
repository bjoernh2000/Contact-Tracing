import "react-native-gesture-handler";
import React, { Component } from "react";
import { Loading } from "./components/common/";
import Auth from "./screens/Auth";
import LoggedIn from "./screens/LoggedIn";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jwt: "",
    };
  }

  render() {
    if (!this.state.jwt) {
      return <Auth />;
    } else if (this.state.jwt) {
      return <LoggedIn />;
    }
  }
}

export default App;
