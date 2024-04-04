import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


const GameScreen = ({fullGameInfo, navigation }) => {
    return(
        <View style= {styles.container}>
            <Text style={styles.title}>Game Screen</Text>

        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor : '#F5FCFF',
    },
    title:{
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    image:{
        width:200,
        height:200,
        margin:15,
    },
    text: {
        textAlign:'center',
        color:'#333333',
        marginBottom : 5,
    }
})

export default GameScreen;