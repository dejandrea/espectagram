import React from "react";
import { Text, View, StyleSheet, StatusBar, Platform, Image } from "react-native";
import { RFValue } from 'react-native-responsive-fontsize';

export default class AppTitle extends React.Component {
  render() {
    return (
      <View style={styles.appTitle}>
        <View style={styles.appIcon}>
          <Image
            source={require("../assets/logo.png")}
            style={styles.iconImage}
          ></Image>
        </View>
        <View style={styles.appTitleTextContainer}>
          <Text style={styles.appTitleText}>{this.props.titleText}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  appTitle: {
    flex: 0.08,
    flexDirection: "row",
  },
  appIcon: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center"
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  appTitleTextContainer: {
    flex: 0.8,
    justifyContent: "center"
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(28),
  },
});