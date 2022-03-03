import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import EventsExample from './screens/TapGesture';
import { GestureHandlerRootView } from "react-native-gesture-handler";


export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <EventsExample />
      <StatusBar style="auto" />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
