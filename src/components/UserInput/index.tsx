import React, { useState } from "react"
import { View, TextInput , StyleSheet, Button } from "react-native"

type UserInputType = {
  handleSendMessage: (text:string) => void
}

const UserInput = ({ handleSendMessage }:UserInputType) => {
  const [message, setMessage] = useState("");

  const onPressSendMessage = () => {
    handleSendMessage(message);
    setMessage("");
  }

  return (
    <View style={styles.inputWrapper} >
      <TextInput
        placeholder="Aa"
        value={message}
        onChangeText={setMessage}
        style={styles.input}
        placeholderTextColor="#fff" 
        selectionColor="#fff"
      />
      <Button
        title="Send"
        onPress={onPressSendMessage}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: "row",
    width: "100%",
    padding: 10,
    justifyContent: "space-between",
  },
  input: {
    color: "#fff",
    width: "80%",
    backgroundColor: "#333",
    borderRadius: 20,
    paddingHorizontal: 16,
  }
})


export default UserInput