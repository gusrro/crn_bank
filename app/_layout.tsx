import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, useRouter } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons'

const _layout = () => {

    const route = useRouter();

  return (
    <Stack screenOptions={{ headerStyle: {backgroundColor:"lightblue"} }}>
        <Stack.Screen name="index" 
        options={{ headerTitle: 'Principal', 
                    headerRight:() =>
                        <Pressable onPress={() => { route.push('/login') }}>
                            <FontAwesome name="user" size={24} color="black" />
                        </Pressable>
                    }} />
        <Stack.Screen name="login"
        options={{ 
                    presentation: 'transparentModal',
                    headerTitle: 'Login', 
                    headerLeft:() =>
                        <Pressable onPress={() => { route.back() }}>
                            <FontAwesome name="window-close" size={24} color="black" />
                        </Pressable>
                    }} />
    </Stack>

  )
}

export default _layout

const styles = StyleSheet.create({})