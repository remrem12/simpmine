import React, { useState, useRef } from "react"
import { View, ScrollView, StyleSheet } from "react-native"
import Empty from "../../components/Empty"
import Message, { MessageType } from "../../components/Message"
import TypingMessage from "../../components/TypingMessage"
import UserInput from "../../components/UserInput"
import {getReplyMessage} from "../../services/simsimi-api"

const ChatBox = () => {
  const [messages, setMessages] = useState<MessageType[]>([])
  const [isGettingReply, setIsGettingReply] = useState(false)
  const scrollRef = useRef<any>()

  const handleSendMessage = (text:string) => {
    setMessages(prev => [...prev, {
      content: text, user: true
    }])
    setTimeout(() => {
      handleGetReply(text)
    }, 500)
  }

  const handleGetReply = (text:string) => {
    setIsGettingReply(true)
    getReplyMessage(text).then((res) => {
      setTimeout(() => {
        setIsGettingReply(false)
        setMessages(prev => [...prev, {content: res.data.success, user: false}])
      }, 1000)
    })
  }

  return (
    <View style={styles.chatboxContainer}>
      {
        !!messages.length ? 
        <ScrollView 
          ref={scrollRef}
          onContentSizeChange={() => scrollRef.current.scrollToEnd({ animated: true })}
          style={styles.messagesContainer} 
          alwaysBounceVertical>
          {
            messages.map((message, index) => (
              <Message key={index} content={message.content} user={message.user} />
            ))
          }
          {isGettingReply && <TypingMessage />}
        </ScrollView>
      : <View style={styles.messagesContainer}>
          <Empty/>
        </View>
      }
      <View style={styles.userInput}>
        <UserInput handleSendMessage={handleSendMessage} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  chatboxContainer: {
    padding: 10,
    backgroundColor: "#444",
    flex: 1,
    width: "100%",
    color: "#fff"
  },
  messagesContainer: {
    flex: 5,
    
  },
  userInput: {
    // flex: 1
  }
})

export default ChatBox