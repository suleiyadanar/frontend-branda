/* eslint-disable react/react-in-jsx-scope */
import {useState, useEffect} from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AntDesign } from "@expo/vector-icons";
import About from "./components/About";
import Library from "./components/Library";
import ItemDetail from "./components/ItemDetail";
import Home from "./components/Home";
// import todo from "./todo.json";

export default function App() {
 
  return (
    <PaperProvider>
      <NavigationContainer>
        <Root.Navigator>
          <Root.Screen name="Home" component={Home} options={({ navigation }) => ({
            
            headerRight: () => (
              <View style={styles.container}> 
                <TouchableOpacity style={styles.about} onPress={() => navigation.navigate("Library")}>
                  <Text style={{padding: 5, fontSize: 18}}>Library Hours</Text>
                              
                </TouchableOpacity>
                <TouchableOpacity style={styles.about} onPress={() => navigation.navigate("About")}>
                  <Text style={{padding: 5, fontSize: 18}}>About</Text>
                  <AntDesign name="infocirlce" size={24} color="black" />                  
                </TouchableOpacity>
              </View>
            )
          })}
          />
          <Root.Screen name={"Library"} component={Library}/>
          <Root.Screen name={"About"} component={About}/>
          <Root.Screen name={"Item Detail"} component={ItemDetail}/>
          
         
        </Root.Navigator>
     
        
      </NavigationContainer>
    </PaperProvider>
  );
}
const Root = createNativeStackNavigator();


const styles = StyleSheet.create({
  container:{
    flex:0.75,
    flexDirection:"row",
    justifyContent:"flex-end",
    left:35,
  },
  about:{
    flexDirection: "row",
    alignItems:"center",
    
  } , 
 
});

