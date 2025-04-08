import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const login = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder='User'/>
      <TextInput style={styles.input} placeholder='Password' secureTextEntry={true}/>
    </View>
  )
}

export default login

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ACACF4',
    borderRadius: 20,
    margin: 'auto'
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    height: 35,
    width: 150,
        padding: 5,
    backgroundColor: "white",
    marginBottom: 5
},

})