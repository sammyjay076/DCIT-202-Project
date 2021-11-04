import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";


export default function cloths() {
    
    return(
            <View style={{flex:1, backgroundColor:'pink'}}>

                    <View style={{flex:1,}}>
                            <Image
                             style={{
                                 width:'100%', 
                                 height:"80%", 
                                 borderRadius:10,
                                 marginBottom:20,
                              
                                 marginTop:30,
                                 
                             }}
                             source={require("../assets/clothing/office.jpg")}
                            >

                            </Image>
                    </View>

                    <View style={{flex:1.5, backgroundColor:'blue', borderTopRightRadius:30, 
                    borderTopLeftRadius:30,}}>
                        <Text style={{fontSize:30, justifyContent:'center', alignItems:'center'}}>
                            Office Wear
                        </Text>

                    </View>
            </View>
    );
}