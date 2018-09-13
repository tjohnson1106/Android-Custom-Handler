import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert
} from "react-native";

import HandleBack from "./HandleBack";

class Profile extends Component {
  static navigationOptions = {
    title: "Profile"
  };

  state = {
    editing: false
  };

  onBack = () => {
    if (this.state.editing) {
      return true;
    }

    return false;
  };

  render() {
    const { editing } = this.state;

    return (
      <HandleBack onBack={this.onBack}>
        <View>
          <TouchableOpacity
            onPress={() =>
              this.setState({
                editing: !editing
              })
            }
          >
            <Text>Toggle Editing {editing ? "Off" : "ON"}</Text>
          </TouchableOpacity>
        </View>
      </HandleBack>
    );
  }
}

export default Profile;
