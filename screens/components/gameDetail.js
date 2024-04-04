import { View, Text, StyleSheet, Pressable } from "react-native";
import gameData from "../../gameData";

export default gameDetail = ({gameInfo, navigation}) => {

    const actualGame = gameData.games.filter((game) => game.id === gameInfo.id);


    return( 
        <View style={styles.container}>
            <Text style={styles.title}>{actualGame.id}</Text>
        </View>
    )
      
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        verticalAlign:'top',
        flexDirection:'row'
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