import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, Button, Touchable, TextInput } from "react-native";
import { useState } from "react/cjs/react.development";


export default function bags() {
    
    const [quantity, setQuantity] = useState(0);
    const handleDecrement = () => {
        if(quantity > 1){
        setQuantity(prevCount => prevCount -1,);
        }
    }

    const handleIncrement = () => {
        if(quantity < 200){
        setQuantity(prevCount => prevCount +1);
        }
    }

    const [price, setPrice] = useState(100);
    const handlePrice = () => {
        setPrice( price => price * quantity);
    }
    return(

        
            <View style={{flex:1, backgroundColor:'pink'}}>

                    <View style={{flex:1,}}>
                            <Image
                             style={{
                                 width:'100%', 
                                 height:"90%", 
                                 borderRadius:10,
                                 marginBottom:20,
                              
                                
                                 
                             }}
                             source={require("../assets/clothing/office.jpg")}
                            >

                            </Image>
                    </View>

                    <View style={{flex:1.5, backgroundColor:'white', borderTopRightRadius:30, 
                    borderTopLeftRadius:30, justifyContent:'space-evenly'}}>
                        <Text style={{fontSize:20, fontStyle:'italic', fontWeight:'bold'}}>Description:</Text>
                        <Text style={{fontSize:15, justifyContent:'center',}}>
                            This Elegant Dress is perfectly tailored to flatter every body type. The detailed design gives it an elegant presentation 
                            and a playful twist to the dress making it absolutely gorgeous. The beyond knee length makes it perfect for not jsut work, but 
                            for the other formal events
                            
                        </Text>
                       

                        <View style={{flexDirection:'row'}}>
                        <TouchableOpacity style={{backgroundColor:'#ebaf0c',
                                        padding:10,
                                    paddingHorizontal:30,
                                    flexDirection:'row',
                                    marginTop:40,
                                    marginRight:10,
                                    width:70,
                                    height:40,
                                    borderTopRightRadius:30, 
                                    borderTopLeftRadius:30, 
                                    borderBottomLeftRadius:30, 
                                    borderBottomRightRadius:30,
                                    alignItems:'center'
                                    }} onPress={handleDecrement}><Text style={{fontSize:20,}}>-</Text></TouchableOpacity>


<Text   style={{   borderWidth:1,
        borderColor:'red',
        padding:8,
        margin:10,
        width:60,
        marginTop:45,
        height:40}}>
                 {quantity}   </Text>  


<TouchableOpacity style={{backgroundColor:'#ebaf0c',
                                        padding:10,
                                    paddingHorizontal:30,
                                    flexDirection:'row',
                                    marginTop:40,
                                    marginRight:10,
                                    width:70,
                                    height:40,
                                    borderTopRightRadius:30, 
                                    borderTopLeftRadius:30, 
                                    borderBottomLeftRadius:30, 
                                    borderBottomRightRadius:30,
                                    
                                   
                                    }} onPress={handleIncrement}><Text style={{fontSize:16}}>+</Text></TouchableOpacity>

                                    
                        </View>


                        <Text>{price}</Text>

                                        <TouchableOpacity style={{backgroundColor:'#ebaf0c',
                                                        padding:10,
                                                    paddingHorizontal:30,
                                                    flexDirection:'row',
                                                    marginTop:40,
                                                    marginLeft:80,
                                                    width:170,
                                                    height:40,
                                                    borderTopRightRadius:30, 
                                                    borderTopLeftRadius:30, 
                                                    borderBottomLeftRadius:30, 
                                                    borderBottomRightRadius:30,
                                                    
                                                
                                                    }}  onPress={handlePrice} >
                                                                <Text style={{marginLeft:10}}>press</Text>
                                        </TouchableOpacity>


                        <TouchableOpacity style={{backgroundColor:'#ebaf0c',
                                        padding:10,
                                    paddingHorizontal:30,
                                    flexDirection:'row',
                                    marginTop:40,
                                    marginLeft:80,
                                    width:170,
                                    height:40,
                                    borderTopRightRadius:30, 
                                    borderTopLeftRadius:30, 
                                    borderBottomLeftRadius:30, 
                                    borderBottomRightRadius:30,
                                    
                                   
                                    }} >
                                                <Text style={{marginLeft:10}}>Add to cart</Text>
                        </TouchableOpacity>
                        
                    </View>
                
            </View>
    );
}