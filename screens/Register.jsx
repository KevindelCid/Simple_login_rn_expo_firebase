import React, { useState } from "react";
import { createUserWithEmailAndPassword,  } from "firebase/auth";
import { auth } from "../config/firebase";
import { TextInput, TouchableOpacity, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onHandleRegister = () => {
    if (email !== "" && password !== "") {
      createUserWithEmailAndPassword(auth, email, password)
        .then((data) => {
          console.log("Register success", data)

        
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
        onPress={onHandleRegister}
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

      <TouchableOpacity
        onPress={()=>navigation.navigate("Login")}
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
    </SafeAreaView>
  );
};
