import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from "expo-router";
const signUp = () => {
  return (
    <View>
      <Text>sign-in</Text>
      <Link href="/(auth)/sign-up">sign-in</Link>
    </View>
  )
}

export default signUp
