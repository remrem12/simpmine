import React from "react"
import { View, Text, StyleSheet, Image } from "react-native"

const TypingMessage = () => {

  return (
    <View style={styles.message}>
      <Image style={styles.avatar} source={require("../Message/img/bot.jpg")} />
      <Text style={styles.text}>...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  message: {
    margin: 10,
    alignItems: "flex-end",
    flexDirection: "row"
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 50,
  },
  text: {
    maxWidth: "75%",
    borderRadius: 20,
    backgroundColor: "#222",
    color: "#fff",
    padding: 12,
    paddingVertical: 6,
    fontSize: 15,
    marginLeft: 10
  }
})


export default TypingMessage