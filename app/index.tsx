import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {

  const imagenBanco = require('../assets/images/card.jpeg')

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image source={imagenBanco}></Image>
      </View>
      <View style={styles.links}>
        <Link href="/registrar" asChild>
            <TouchableOpacity>
              <Text>Ir al registro</Text>
            </TouchableOpacity>
        </Link>
      </View>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    image: {
      width: 100,
      height: 100,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    links:{
      width: '100%',
      flex: 3,
      justifyContent: 'center',
      alignItems: 'center',
    }
})