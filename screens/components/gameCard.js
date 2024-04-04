import { View, Text, StyleSheet, Pressable } from "react-native";
import GameScreen from "../GameScreen";


export default gameCard = ({gameInfo, navigation}) => {

    return( 
        <View style={styles.container}>
            <Text style={styles.title}>{gameInfo.id}</Text>
            <Text style={styles.title}>{gameInfo.name}</Text>
            <Pressable onPress={() => navigation.navigate('GameScreen', {gameInfo, navigation})}>
                <Text>
                    Let's go
                </Text>
            </Pressable>
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