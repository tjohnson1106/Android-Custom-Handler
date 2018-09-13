import React, { Component } from "react";
import { View, Text, StyleSheet, BackHandler } from "react-native";
import { withNavigation } from "react-navigation";

class HandleBack extends Component {
  constructor(props) {
    super(props);

    this.didFocus = props.navigation.addListener(
      "didFocus",
      payload => {}
    );
  }

  componentDidMount() {
    this.willBlur = this.props.navigation.addListener(
      "willBlur",
      payload => {}
    );
  }

  render() {
    return this.props.children;
  }
}

export default withNavigation(HandleBack);
