import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { TextInput, TouchableOpacity, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onHandleLogin = () => {
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          console.log("Login success")
    
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <SafeAreaView
      style={{
        justifyContent: "center",
        alignItems: "center",
        gap: 30,
        paddingHorizontal: 20,
      }}
    >
      <TextInput
        style={{
          borderBottomColor: "black",
          borderBottomWidth: 1,
          width: "100%",
          height: 40,
        }}
        placeholder="email"
        keyboardType="email-address"
        textContentType="emailAddress"
        autoFocus={true}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="password"
        style={{
          borderBottomColor: "black",
          borderBottomWidth: 1,
          width: "100%",
          height: 40,
        }}
        textContentType="password"
        secureTextEntry={true}
        autoFocus={true}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        onPress={onHandleLogin}
        style={{
          backgroundColor: "black",
          width: 200,
          borderRadius: 8,
          padding: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white" }}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={()=>navigation.navigate("Register")}
        style={{
          backgroundColor: "black",
          width: 200,
          borderRadius: 8,
          padding: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white" }}>Register</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
