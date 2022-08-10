import React from "react";
import { Text, View, StyleSheet, StatusBar, Platform, SafeAreaView, Image } from "react-native";
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from "react-native-vector-icons/Ionicons"

export default class PostCard extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.cardContainer}>
          <View style={styles.authorContainer}>
            <View style={styles.authorImageContainer}>
              <Image
                source={require('../assets/profile_img.png')}
                style={styles.profileImage}
              />
            </View>
            <View style={styles.authorNameContainer}>
              <Text style={styles.authorNameText}>{this.props.post.author}</Text>
            </View>
          </View>
          <Image
            source={require('../assets/post.jpeg')}
            style={styles.postImage}
          />
          <View style={styles.captionContainer}>
            <Text style={styles.captionText}>
              {this.props.post.caption}
            </Text>
          </View>
          <View style={styles.actionContainer}>
            <View style={styles.likeButton}>
              <Ionicons name={"heart"} size={RFValue(30)} color={"white"}/>
              <Text style={styles.likeText}>12k</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  cardContainer: {
    margin: RFValue(13),
    backgroundColor: "#2f345d",
    borderRadius: RFValue(20),
    padding: RFValue(20)
  },
  authorContainer: {
    flex:0.1,
    //justifyContent:"flex-start",
    flexDirection:"row"
  },
  authorImageContainer: {
    flex:0.15,
    justifyContent: "center",
    alignItems: "center"
  },
  profileImage: {
    resizeMode: "contain",
    width: "100%",
    height: "100%",
    borderRadius:100
  },
  authorNameContainer: {
    flex:0.85,
    justifyContent:"center",
  },
  authorNameText: {
    fontSize: RFValue(20),
    color: "white"
  },
  
  postImage: {
    marginTop: RFValue(20),
    resizeMode: "contain",
    width: "95%",
    alignSelf: "center",
    height: RFValue(250),
    marginTop:20
  },
  captionContainer: {
    marginTop: RFValue(15)
  },
  captionText: {
    fontSize: RFValue(13),
    color: "white",
    backgroundColor:"black",
    padding:5,
    borderRadius:10
  },
  actionContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: RFValue(10)
  },
  likeButton:{
    flexDirection:"row",
    backgroundColor:"red",
    justifyContent:"center",
    alignItems:"center",
    padding:5,
    borderRadius:10,
    width: RFValue(160),
    height: RFValue(40),
  },
  likeText: {
    color: "white",
    //fontFamily: "Bubblegum-Sans",
    fontSize: 25,
    marginLeft: 25,
  },
});