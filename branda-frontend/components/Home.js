import {React , useState, useEffect } from "react";
import {StyleSheet, View, FlatList} from "react-native";
import {Button, Text} from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import { Checkbox } from "react-native-paper";
import Moment from "react-moment";
import todo from "../todo.json";

export default function Home(){
// Declare our state variables and their setter functions.
  const [num, setNum] = useState(0);
  const [checked, setChecked] = useState(false);
  const [data, setData] = useState();
  const [isOff, setIsOff] = useState(false);
  
  //renders each item with a checkbox, task and due date
  const renderItem = ({item,index}) => {
    return <View style={{flexDirection:"row",marginTop:20}}>
      <Checkbox
        status={item.done? "checked" : "unchecked"}
        onPress={() => {
          let copyData = data;
          copyData.todo[index].done=!copyData.todo[index].done;
          setData(copyData);
          setChecked(!checked);
        } } />
      <View style={styles.list}>
        <Text>{item.name}</Text>
        <Moment element={Text} format="dddd, MMMM Do YYYY">
          { item.due }
        </Moment>
      </View>
    </View>;
  };
  
  //sets the data variable 
  useEffect(() => {
    setData(todo);
  });
  
  //shows all checked and unchecked items
  const list = () =>{
    return (
      <FlatList
        data={todo.todo}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        extraData={todo.done}
      /> 
    );
  };

  //hides the checked items
  const list2= () =>{
    return (
      <FlatList
        data={todo.todo.filter(item=>!item.done)}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        extraData={todo.done}
      /> 
    );
  };

  return(
    <View style={styles.container}>
      <Text style={{fontSize:20}}>To-do</Text>
      
      {/* select list according to bool value of isOff
          button to toggle between show/hide checked off items
      */}
      {isOff ? list():list2()}
      <Button onPress={()=>{
        setIsOff(!isOff);}}>{isOff ? "Hide Checked":"Show Checked"}
      </Button>
      
      {/* counter for num and buttons for add, subtract and reset*/}
      <StatusBar style="auto" />
      <Text>Num is {num}</Text>
      <View style={styles.buttons}>
        <Button style={{margin:5}} mode={"contained"} onPress={() => setNum(num +1 )}>
            +1
        </Button>
        <Button style={{margin:5}} mode={"contained"} onPress={() => setNum(num -1 )}>
            -1
        </Button>
        <Button style={{margin:5}} mode={"contained"} onPress={() => setNum(0)}>
            Reset 
        </Button>
      </View>
    </View>
    
  );
  
}
//style for design purpose
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent:"space-evenly",
  },
  buttons:{
    flexDirection:"row",
  },
  list:{
    flexDirection:"column",
  }
});

