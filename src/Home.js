import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

class Home extends Component {
  static navigationOptions = {
    title: "Home"
  };
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => this.props.navigation.push("Profile")}
        >
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Home;
