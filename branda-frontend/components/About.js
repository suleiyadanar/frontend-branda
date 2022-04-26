import { React } from "react";
import { StyleSheet, View } from "react-native";
import { Button, DataTable, Text } from "react-native-paper";
import * as Clipboard from "expo-clipboard";
const AppInfo = require("../app.json").expo;

export default function About(){

  //function to clipboard AppInfo
  const copyToClipboard = () => {
    Clipboard.setString(JSON.stringify({AppInfo}));
  };
  return(
    <View>
      {/* Clipboard button */}
      <Button onPress={copyToClipboard}>Click Here to Copy app.json contents</Button>
      {/* table with information about the app  */}
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Item</DataTable.Title>
          <DataTable.Title>Value</DataTable.Title>
        </DataTable.Header>
        <DataTable.Row>
          <DataTable.Cell>Name</DataTable.Cell>
          <DataTable.Cell>{AppInfo.name}</DataTable.Cell>
        </DataTable.Row>
      </DataTable>
      <DataTable.Row>
        <DataTable.Cell>Splash Location</DataTable.Cell>
        <DataTable.Cell>{AppInfo.splash.image}</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Version</DataTable.Cell>
        <DataTable.Cell>{AppInfo.version}</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Orientation</DataTable.Cell>
        <DataTable.Cell>{AppInfo.orientation}</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Android</DataTable.Cell>
        <DataTable.Cell>{JSON.stringify(AppInfo.android)}</DataTable.Cell>
      </DataTable.Row>
    </View>
    
  );
}