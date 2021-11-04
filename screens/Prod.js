import React from "react";
import {View, Text, ImageBackground, StyleSheet} from "react-native";

export default function Prod() {

    return(
        
        <ImageBackground source={require("../assets/furniture/brown.jpg")} style={styles.container}>
                
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        height:'100%',
        width:'100%',
    }
})