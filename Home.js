import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Home = () => {
    return(
        <View style ={styles.container}>
            <Text style={styles.title}>Bienvenue sur l'app</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1, 
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent:'center'
    }, 
    title :{
        fontSize:24,
        fontWeight:'bold'
    }
})

export default Home;