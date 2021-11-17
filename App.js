import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Login";
import Home from "./screens/Home";
import Cart from "./screens/Cart";
import Prod from "./screens/Prod";
import bike from "./products/bike";
import cloths from "./products/cloths";
import bags from "./products/bags";





export default function App() {
  const MainNavigator = createStackNavigator();

  return (
   <View style={{flex: 1}}>
     <NavigationContainer>
       <MainNavigator.Navigator screenListeners={{headerShown: false}} initialRouteName="Login">
         <MainNavigator.Screen name="Home" component={Home}></MainNavigator.Screen>
         <MainNavigator.Screen name="Login" component={Login}></MainNavigator.Screen>
         <MainNavigator.Screen name="Cart" component={Cart}></MainNavigator.Screen>
         <MainNavigator.Screen name="Prod" component={Prod}></MainNavigator.Screen>
         <MainNavigator.Screen name="bike" component={bike}></MainNavigator.Screen>
         <MainNavigator.Screen name="cloths" component={cloths}></MainNavigator.Screen>
         <MainNavigator.Screen name="bags" component={bags}></MainNavigator.Screen>
        
        
        
        
         
       </MainNavigator.Navigator>
     </NavigationContainer>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
