import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class DailyPics extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{textAlign:"center"}}>Daily Pics !</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
