import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  SafeAreaView,
  StatusBar,
  Platform,
  Dimensions,
  Image
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { color } from "react-native-reanimated";
import { RFValue } from "react-native-responsive-fontsize";
import AppTitle from "../components/AppTitle";

export default class CreatePost extends React.Component {
  constructor() {
    super()
    this.state = {
      previewImage: "image_1",
      dropDownHeight:60,
    }
  }
  render() {
    let preview_images = {
      "image_1": require("../assets/image_1.jpg"),
      "image_2": require("../assets/image_2.jpg"),
      "image_3": require("../assets/image_3.jpg"),
      "image_4": require("../assets/image_4.jpg"),
      "image_5": require("../assets/image_5.jpg")
    };
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <AppTitle titleText={"New Post"} />

        <View style={styles.fieldsContainer}>
          <ScrollView>
            <Image source={preview_images[this.state.previewImage]} style={styles.previewImage} />
            <View style={{ height: RFValue(this.state.dropDownHeight) }}>
                <DropDownPicker
                  items={[
                    { label: "Image 1", value: "image_1" },
                    { label: "Image 2", value: "image_2" },
                    { label: "Image 3", value: "image_3" },
                    { label: "Image 4", value: "image_4" },
                    { label: "Image 5", value: "image_5" }
                  ]}
                  defaultValue={this.state.previewImage}
                  open={this.state.dropDownHeight == 170 ? true : false}
                  containerStyle={{
                    height: 40,
                    borderRadius: RFValue(20),
                    marginBottom: RFValue(20),
                    marginHorizontal: RFValue(10),
                    width:370
                  }}
                  onOpen={() => {
                    this.setState({ dropDownHeight: 170 });
                  }}
                  onClose={() => {
                    this.setState({ dropDownHeight: 60 });
                  }}
                  style={{ backgroundColor: "transparent" }}
                  itemStyle={{
                    justifyContent: "flex-start"
                  }}
                  dropDownStyle={{ backgroundColor:"#2f345d" }}
                  labelStyle={{color:"white"}}
                  arrowStyle={
                    {color:"white"}
                  }
                  onSelectItem={(item) =>
                    this.setState({
                      previewImage: item.value,
                    })
                  }
                />
              </View>
            <TextInput style={styles.inputFont} />
          </ScrollView>
        </View>

        <View style={{ flex: 0.08 }} />
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
  fieldsContainer: {
    flex:0.5
  },
  previewImage: {
    marginTop: RFValue(20),
    resizeMode: "contain",
    width: "95%",
    alignSelf: "center",
    height: RFValue(250),
    marginTop:20
  },
  inputFont: {}
})