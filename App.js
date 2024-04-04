import React from "react";
import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import ListGameScreen from "./screens/ListGameScreen";
import SimpleForm from "./screens/SignInScreen";
import GameScreen from "./screens/GameScreen";
import { useBoundStore } from "./store/store";

//const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const { id } = useBoundStore((state) => state.user);

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
      
        {id ? (   
          <>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="ListGame" component={ListGameScreen}  />
          </>
        ):(
          <>
            <Tab.Screen name="Home" component={HomeScreen} />
          </>
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
