import React from "react"
import { View, Text, StyleSheet, Image } from "react-native"

export type MessageType = {
  content: string,
  user: boolean
}

const Message = ({ content, user }:MessageType) => {

  return (
    <View style={{...styles.message, flexDirection: user ? "row-reverse" : "row"}}>
      {/* <Image style={styles.avatar} source={require(`.img/${user ? "user" : "bot"}.jpg`)} /> */}
      {
        user ? <Image style={styles.avatar} source={require("./img/user.jpg")} />
        : <Image style={styles.avatar} source={require("./img/bot.jpg")} />
      }
      
      <Text 
        style={{
          ...styles.text,
          marginLeft: user ? 0 : 10,
          marginRight: user ? 10: 0,
        }} 
      >{content}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  message: {
    margin: 10,
    alignItems: "flex-end"
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
    fontSize: 15
  }
})


export default Message