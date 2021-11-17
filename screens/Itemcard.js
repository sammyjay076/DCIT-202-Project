import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, Button, Touchable, TextInput } from "react-native";
import { useState } from "react/cjs/react.development";
import white_nike_5 from '../assets/shoes/white_nike_5.jpg';
import { useCart } from "react-use-cart"
import Cart from "./Cart";



    

    const Itemcard = (props) => {
        const {addItem} = useCart();


        return (
            <View style={{width:'100%', height:'39%', padding:10,}}>
                {/* <Image
                style={{height:100}}
                source={require("../assets/clothing/office.jpg")}
                /> */}
                <Image style={{height:200, width:180}} source={props.Image}/>
                <Text>{props.title}</Text>
                <Text>{props.desc}</Text>

                <Text>$ {props.price}</Text>
                <Text>{props.desc}</Text>

                <TouchableOpacity
                onPress={() => {addItem(props.item)}}

                style={{backgroundColor:'#ebaf0c',
                        padding:10,
                    paddingHorizontal:30,
                    flexDirection:'row',
                    marginTop:3,
                    marginRight:10,
                    width:150,
                    height:40,
                    borderTopRightRadius:30, 
                    borderTopLeftRadius:30, 
                    borderBottomLeftRadius:30, 
                    borderBottomRightRadius:30,
                    alignContent:'center'}}
                >
                    <Text>Add to Cart</Text>
                    </TouchableOpacity>
            </View>
        )
    }
   
    // return(
    //     <View style={{flex:1, backgroundColor:'#8ee8c1'}}>
            
    //     </View>        
           
    // );
    export default  Itemcard;