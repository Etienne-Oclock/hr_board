import React from "react";
import {
  NavigationContainer,
  createStaticNavigation,
} from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Button, Pressable, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import { useBoundStore } from "./store/store";
import HomeScreen from "./screens/HomeScreen";
import ListGameScreen from "./screens/ListGameScreen";
import GameScreen from "./screens/GameScreen";


export default function App() {

  const { id, isLogged } = useBoundStore((state) => state.user);
  const {logout} = useBoundStore();

  const gameData = { name: "whwuhuwhuw "};

  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  const signInRouter = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          headerLeft: () => (
            <Pressable onPress={logout} title="Back" color='#fff'>
              <Text>Logout</Text>
            </Pressable>
          ),
        }}
      >
        <Tab.Screen name="ListGame" component={ListGameScreen} />
        <Tab.Screen name="GameScreen" component={GameScreen} />
      </Tab.Navigator>
    );
  };
  const signOutRouter = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
      </Tab.Navigator>
    );
  };
  

  return (
    <NavigationContainer>
      {isLogged ? signInRouter() : signOutRouter()}
    </NavigationContainer>
  );
}
