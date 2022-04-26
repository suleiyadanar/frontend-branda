import { React, useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { DataTable, Text } from "react-native-paper";
import Moment from "react-moment";

export default function Library(){
// Declare our state variable and its setter function.
  const [data,setData]=useState(0);
  //fetch data from api
  useEffect(() =>{
    async function fetchData() {
      const response = await fetch("http://brandaserver.herokuapp.com/getinfo/libraryHours/week");
      const json = await response.json();
      setData(json);
    }
    fetchData();
  }, []);
  
 //render each day and place the locations and their hours into a row
  const renderItem = ({item}) => {
    const list = () => {
      return item.hours.map((element) => {
        var text =JSON.stringify(element.times.hours);
        if(text!=undefined){
          text = text.replace(/[{"\[\],}]/g, "");
          text = text.replace(/to:/g,"-");
          text = text.replace(/from:/g,"");
        }
        return (
          <DataTable.Row key={element.location} style={{flex:1,textAlign:"right"}}>
            <DataTable.Cell style={{flex:"1",justifyContent:"flex-start"}}>{element.location}</DataTable.Cell>
            <DataTable.Cell style={{flex:"0.5",justifyContent:"flex-end"}}>{text}</DataTable.Cell>
          </DataTable.Row>
        );
      });
    };
    
    return <View style={{flexDirection:"column",marginTop:20}}>
      <View>
        <Text style={{fontSize:20, margin:10}}>
          <Moment element={Text} format="dddd, MMMM Do YYYY">
            { item.date }
          </Moment>
        </Text>
        <DataTable>
          <DataTable.Header style={{backgroundColor:"#165dc7"}}>
            <DataTable.Title>Location</DataTable.Title>
            <DataTable.Title style={{flex:"1",justifyContent:"flex-end"}}>Hours</DataTable.Title>
          </DataTable.Header>
          
          {list()}
          
        </DataTable>
       
      </View>
      
    </View>;
  };
  return(
    
    <View>
      <Text style={{padding:5, backgroundColor:"green",color:"white"}}>Today's Hours</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}

      /> 
    </View>
  );
}