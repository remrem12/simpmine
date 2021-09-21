import React from "react"
import { View, Text, StyleSheet } from "react-native"

const Empty = () => {

  return (
    <View style={styles.emptyContainer}>
      {/* <Text style={styles.emptyText}> */}
        <Text style={styles.emptyText}>Wanna see something cute?</Text>
        <Text style={styles.emptyText}>Type something</Text>
      {/* </Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
  emptyContainer: {
    flex:1,
    alignItems: "center",
    justifyContent: "center"
  },
  emptyText: {
    fontSize: 24,
    color: "#777",
    fontWeight: "bold"
  }
})


export default Empty