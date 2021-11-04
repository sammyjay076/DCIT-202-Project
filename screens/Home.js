import React, {useState}  from "react";
import {StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, FlatList, ImageBackground, } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { State, TextInput } from "react-native-gesture-handler";
import * as Animatable from "react-native-animatable"

export default function Home({navigation}) {
  
   
    return (

            // Beginning the Homepage
      
            // creating the searchbar
        <View style={{flex: 1, backgroundColor: "white",}}>
         
         <View style={{height:80, backgroundColor:"#c45653", justifyContent:"center", paddingHorizontal:5,}}>

        <Animatable.View animation="slideInRight" duration={500} style={{height: 50, backgroundColor:"white", flexDirection:"row", padding: 5, alignItems:"center"}}>
        <AntDesign name="search1" size={24} color="black" />
        <TextInput placeholder="Search"
        style={{fontSize:24, marginLeft:15}}
        >

        </TextInput>
        </Animatable.View>

         
         </View>

                    {/* The entire Menu is done here.
                    The lists bellow contains the items which are sold on the app. */}


                            {/* First Item collection: CLOTHING */}
            <Text style={styles.heads}>Clothing</Text>
         <ScrollView style={styles.contentContainer}>
                    {/* <View style={styles.container}>  */}
                
                            <View style={styles.box}>
                                <View style={styles.inner}>
                                        {/* <View style={{flex: 1, flexDirection:"row", alignItems:"center", marginLeft:100}}>
                                    <AntDesign  name="hearto" size={24} color="black" />
                                    </View>  */}
                                    
                                      
                                       
                                       <Image  style={{
                                            borderTopLeftRadius:30, 
                                            borderBottomLeftRadius:30, 
                                            borderBottomRightRadius:30,
                                           marginTop:18,
                                           borderTopRightRadius:30,
                                    height:"70%",
                                    width:140,
                                    backgroundColor: "#D7CFCD"
                                }} source={require("../assets/bikey.jpg")}>

                                    </Image>

                                    <Text style={{marginTop:10, marginLeft:13}}>
                                      Clothing for purchase: 
                                    </Text>
                                      <Text style={{marginTop:30,}}>hello</Text>
                                </View>
                            </View>
                           

                           {/* Second Item Collection: FURNITURE */}

                           <Text style={styles.heads}>Furniture</Text>
                            
                   
                                <View style={styles.box}>
                                    <View style={styles.inner}>
                                        
                                        
                                        
                                        
                                        <Image  style={{
                                                borderTopLeftRadius:30, 
                                                borderBottomLeftRadius:30, 
                                                borderBottomRightRadius:30,
                                            marginTop:18,
                                            borderTopRightRadius:30,
                                        height:"70%",
                                        width:140,
                                        backgroundColor: "#D7CFCD"
                                    }} source={require("../assets/furniture/brown.jpg")}>

                                        </Image>

                                        <Text style={{marginTop:10}}>
                                        Furniture for sale
                                        </Text>
                                        
                                    </View>
                                </View>
                                <View style={styles.box}>
                                    <View style={styles.inner}>
                                        
                                        
                                        
                                        
                                        <Image  style={{
                                                borderTopLeftRadius:30, 
                                                borderBottomLeftRadius:30, 
                                                borderBottomRightRadius:30,
                                            marginTop:18,
                                            borderTopRightRadius:30,
                                        height:"70%",
                                        width:140,
                                        backgroundColor: "#D7CFCD"
                                    }} source={require("../assets/furniture/furn.jpg")}>

                                        </Image>

                                        <Text style={{marginTop:10}}>
                                        hello world hello world hello ww world
                                        </Text>
                                        
                                    </View>
                                </View>
                                <View style={styles.box}>
                                    <View style={styles.inner}>
                                        
                                        
                                        
                                        
                                        <Image  style={{
                                                borderTopLeftRadius:30, 
                                                borderBottomLeftRadius:30, 
                                                borderBottomRightRadius:30,
                                            marginTop:18,
                                            borderTopRightRadius:30,
                                        height:"70%",
                                        width:140,
                                        backgroundColor: "#D7CFCD"
                                    }} source={require("../assets/furniture/sit.jpg")}>

                                        </Image>

                                        <Text style={{marginTop:10}}>
                                        hello world hello world hello ww world
                                        </Text>
                                        
                                    </View>
                                </View>
                                <View style={styles.box}>
                                    <View style={styles.inner}>
                                        
                                        
                                        
                                        
                                        <Image  style={{
                                                borderTopLeftRadius:30, 
                                                borderBottomLeftRadius:30, 
                                                borderBottomRightRadius:30,
                                            marginTop:18,
                                            borderTopRightRadius:30,
                                        height:"70%",
                                        width:140,
                                        backgroundColor: "#D7CFCD"
                                    }} source={require("../assets/furniture/couch.jpg")}>

                                        </Image>

                                        <Text style={{marginTop:10}}>
                                        hello world hello world hello ww world
                                        </Text>
                                        
                                    </View>
                                </View>
                           
                            
                   
                </ScrollView>
           
           
            

          <View style={{flex:0.1, backgroundColor:"yellow", justifyContent:"space-between", alignItems:"center", flexDirection:"row"}}>
        
        <TouchableOpacity  onPress={() => {navigation.navigate("Prod")}}>
        <Ionicons name="settings" size={24} color="black" style={{marginLeft:12}} /> 
        </TouchableOpacity>
          
                                
          <Feather name="shopping-cart" size={24} color="black" style={{marginRight:12}} />
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {

      width : '100%',
      height : '85%',
      padding : 5,
     
      flex: 7,
    
      paddingBottom:30
  },

 
 
  inner: {
    flex:1,
    backgroundColor: '#eee',
    alignItems:'flex-start',
    // justifyContent:'space-between',    
    borderTopRightRadius:30, 
    borderTopLeftRadius:30, 
    borderBottomLeftRadius:30, 
    borderBottomRightRadius:30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    // borderBottomColor:'green',
    borderColor:'red'

    // alignItems:'stretch',
    // justifyContent:'space-between'
},
  
box: {
    width: '100%',
    height: '39%',
    padding: 10,
   borderColor: 'red'
    // flexDirection:"row"
    // alignItems:'stretch'
    
  
    
},

//   item: {
//       marginTop:24,
//       padding:30,
//       backgroundColor:'pink',
//       fontSize:24,
//       flexDirection:"row",
//       justifyContent:"space-between"
      
//   },
  contentContainer:{
      width : '100%',
      height : '85%',
      padding : 5,
      flexDirection: 'row',
      flexWrap: 'wrap',
      flex: 7,
      flexDirection:'row',
      flexWrap:'wrap',
      alignContent:'center'
  },

  heads:{
    fontSize:20,
    fontWeight:'bold',
    fontStyle:'italic',
    marginLeft:40
  }
 
})