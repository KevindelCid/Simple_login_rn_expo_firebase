import { signOut } from 'firebase/auth'
import React from 'react'
import {View, Text, TouchableOpacity } from 'react-native'
import { auth } from '../config/firebase'
export const Home = () => {
  return (
    <View>
        <Text>Holiii</Text>
        <TouchableOpacity
        onPress={async ()=>{
try {
  const res = await signOut(auth) 

  console.log(res)

  // navigation.navigate("Home") // unnecesary the context works here
} catch (error) {
  console.log("🚀 ~ file: Home.jsx:17 ~ onPress={ ~ error:", error)
  
}
         
        }}
        style={{
          backgroundColor: "black",
          width: 200,
          borderRadius: 8,
          padding: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white" }}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}
