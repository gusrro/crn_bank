import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {

  const imagenBanco = require('../assets/images/card.jpeg')

  return (
    <View>
      <View>
        <Image source={imagenBanco}></Image>
      </View>
      <View>
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

const styles = StyleSheet.create({})