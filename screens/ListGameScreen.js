import React from "react";
import { View, Text, StyleSheet, Button, Image, VirtualizedList } from "react-native";
import gameData from "../gameData";
import GameCard from "./components/gameCard";
import { useBoundStore } from "../store/store";


const ListGameScreen = ({ navigation }) => {

  const {user} = useBoundStore();
  console.log('navigation :>> ', navigation);
  return (
    <View style={styles.container}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Text>Hello {user?.name} !!!</Text>
      {gameData.games.map((game) => (
        <GameCard gameInfo={game} navigation={navigation} key={game.id} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5FCFF",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  image: {
    width: 200,
    height: 200,
    margin: 15,
  },
  text: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
});

export default ListGameScreen;
