import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert
} from "react-native";

import HandleBack from "./HandleBack";

class ProfileScreen extends Component {
  static navigationOptions = {
    title: "Profile"
  };

  state = {
    editing: false
  };

  onBack = () => {
    if (this.state.editing) {
      Alert.alert(
        "You are still editing!",
        "Are you sure you do not want to save your edits?",
        [
          {
            text: "Keep Editing",
            onPress: () => {},
            style: "cancel"
          },
          {
            text: "Go Home",
            onPress: () => this.props.navigation.goBack()
          }
        ],
        { cancelable: false }
      );

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
            <Text
              style={{
                fontSize: 30
              }}
            >
              Toggle Editing {editing ? "Off" : "ON"}
            </Text>
          </TouchableOpacity>
        </View>
      </HandleBack>
    );
  }
}

export default ProfileScreen;
