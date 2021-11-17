import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, Button, Touchable, TextInput } from "react-native";
import { useState } from "react/cjs/react.development";
import Itemcard from "../screens/Itemcard";
import data from "./data";
import white_nike_5 from '../assets/shoes/white_nike_5.jpg';
import { useCart } from "react-use-cart";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

    

    const bags = (props) => {
        

        return (

            <View style={{flex:1,}}>

            
            <View style={{flex:1, width:'100%', height:'30%', padding:10, backgroundColor:'#95dea8'}}>
                <Text>All items</Text>
                {data.productData.map((item, index) =>{
                    return(
                        <Itemcard
               
                       Image={item.Image} 
                        title={item.title}
                         desc={item.desc}
                          price={item.price} 
                          item={item}
                          key={index}
                    />
                    )

                })}

               
                                
                            </View>

                            {/* <View style={{flex:0.1, backgroundColor:"yellow", justifyContent:"space-between", alignItems:"center", flexDirection:"row"}}>
                        
                        <TouchableOpacity  onPress={() => {navigation.navigate("Prod")}}>
                        <Ionicons name="settings" size={24} color="black" style={{marginLeft:12}} /> 
                        </TouchableOpacity>
                        
                                <TouchableOpacity onPress={() => {navigation.navigate("Cart")}}>
                        <Feather name="shopping-cart" size={24} color="black" style={{marginRight:12}} />
                        </TouchableOpacity>               
                        </View> */}
                            </View>
            

            
        )
    }
   
    
        
    export default bags ;