import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, Button, Touchable, TextInput } from "react-native";
import { useState } from "react/cjs/react.development";
import Itemcard from "../screens/Itemcard";
import data from "./data";
import white_nike_5 from '../assets/shoes/white_nike_5.jpg';

    

    const bags = (props) => {
        

        return (
            <View style={{width:'68%', height:'50%', padding:10, backgroundColor:'#95dea8', marginLeft:40}}>
                <Text>All items</Text>
                {data.productData.map((item, index) =>{
                    return(
                        <Itemcard
               
                       Image={item.Image}  title={item.title} desc={item.desc} price={item.price} key={index}
                    />
                    )

                })}

                
            </View>
        )
    }
   
    
        
    export default bags;