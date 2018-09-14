import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

class HomeScreen extends Component {
  static navigationOptions = {
    title: "Home"
  };
  render() {
    return (
      <View
        style={{
          paddingTop: 10,
          borderRadius: 20,
          backgroundColor: "dodgerblue",
          justifyContent: "center"
        }}
      >
        <TouchableOpacity
          onPress={() => this.props.navigation.push("Profile")}
        >
          <Text style={{ fontSize: 25 }}>Profile</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default HomeScreen;
