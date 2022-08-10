import React from "react";
import { StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons"
import { RFValue } from "react-native-responsive-fontsize";


import Feed from "../screens/Feed";
import CreatePost from '../screens/CreatePost';

const Tab = createMaterialBottomTabNavigator();

const TabNavigator =()=>{
  return(
    <Tab.Navigator
    labeled={false}
    barStyle={styles.bottomTabStyle}
      screenOptions={({route})=>({
        tabBarIcon:({focused, color, size})=>{
          let iconName;
          if (route.name === "Feed") {
            iconName = focused ? 'home' : 'home-outline'
          } else if(route.name === 'Create Post'){
            iconName = focused ? "add-circle" : "add-circle-outline"
          }
          return <Ionicons name={iconName} size={RFValue(30)} color={color} style={styles.icons}/>
        },
      })}
      activeColor={"tomato"}
      inactiveColor={"gray"}
    >
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Create Post" component={CreatePost} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: "#161624",
    height: "8%",
    borderTopLeftRadius: RFValue(30),
    borderTopRightRadius: RFValue(30),
    overflow: "hidden",
    position: "absolute"
  },
  icons: {
    width: RFValue(30),
    height: RFValue(30)
  }
});

export default TabNavigator;
