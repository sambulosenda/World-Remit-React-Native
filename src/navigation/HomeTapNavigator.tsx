import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home";
import { AntDesign } from '@expo/vector-icons'; 
import Home from "../screens/Home";
import { FontAwesome } from "@expo/vector-icons"; 
import { Ionicons } from "@expo/vector-icons"; 
import transfareOptions from "../screens/TranfereOptions";


const Tab = createBottomTabNavigator();

const HomeTabNavigator = (props) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#813fd6",
        labelStyle: { fontSize: 12, color: "#813fd6" },
      }}
    >
      <Tab.Screen
        name={"Send"}
        component={transfareOptions}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="send" size={24} color="#813fd6" />
          ),
        }}
      />

      <Tab.Screen
        name={"Activity"}
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-menu-sharp" size={24} color="#813fd6" />
          ),
        }}
      />
      <Tab.Screen
        name={"Account"}
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-person-outline" size={24} color="#813fd6" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
