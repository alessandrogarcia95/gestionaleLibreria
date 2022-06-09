import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddButton from './components/AddButton';
import { ListComponent } from './components/ListComponent';
import NavBar from './components/NavBar';


export default function App() {
  return (
    <View style={styles.container}>
      <NavBar></NavBar>
     <ListComponent/>
     <AddButton></AddButton>
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
