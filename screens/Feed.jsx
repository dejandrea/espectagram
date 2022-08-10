import React from "react";
import { Text, View, StyleSheet, StatusBar, Platform, SafeAreaView, Image } from "react-native";
import { RFValue } from 'react-native-responsive-fontsize';
import { FlatList } from "react-native-gesture-handler";
import PostCard from './PostCard';
import AppTitle from '../components/AppTitle';


let posts = require("./temp_posts.json")


export default class Feed extends React.Component {

  renderItem = ({ item: post }) => {
    return <PostCard post={post} />;
  };

  keyExtractor = (item, index) => index.toString();

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <AppTitle titleText={"Espectagram"} />

        <View style={styles.cardContainer}>
          <FlatList
            keyExtractor={this.keyExtractor}
            data={posts}
            renderItem={this.renderItem}
          />
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#23232b",
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  cardContainer: {
    flex: 0.85
  },
});