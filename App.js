import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";

import HomeScreen from "./src/Home";
import ProfileScreen from "./src/Profile";

const Navigation = createStackNavigator({
  Home: HomeScreen,
  Profile: ProfileScreen
});

export default class App extends Component {
  render() {
    return <Navigation />;
  }
}
