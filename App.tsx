import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import ChatBox from './src/screens/ChatBox';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        <Text style={styles.simsimi}>Simsimi  </Text>
        <Text>➡ SimpMineeee💖</Text>
      </Text>
      <ChatBox/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Platform.OS === "android" ? 40 : 0
  },
  title: {
    height: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    fontWeight: "700",
    fontSize: 24,
    alignItems: "center"
  },
  simsimi: {
    textDecorationLine: "line-through",
    marginRight: 20
  }
});
