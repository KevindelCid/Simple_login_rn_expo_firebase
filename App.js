import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { createContext, useEffect, useState, useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Home, Register } from "./screens";
import { Login } from "./screens/Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase";

const Stack = createStackNavigator();
const AuthenticatedUserContext = createContext({});

const AuthenticatedUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <AuthenticatedUserContext.Provider value={{ user, setUser }}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};

function HomeStack() {
  return (
    <Stack.Navigator defaultScreenOptions={Home} screenOptions={{}}>
      <Stack.Screen name="Home" component={Home} />
      {/* other screens ... */}
    </Stack.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator defaultScreenOptions={Login} screenOptions={{}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      {/* other screens ... */}
    </Stack.Navigator>
  );
}




function RootNavigator() {
  const { user, setUser } = useContext(AuthenticatedUserContext)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const unsuscribe = onAuthStateChanged(auth, async authenticatedUser => {
      authenticatedUser ? setUser(authenticatedUser) : setUser(null)
      setLoading(false)
    })

    return ()=> unsuscribe()

  },[user])

  if(loading) return (<View>
    <ActivityIndicator/>
  </View>)

console.log(user)

  return (
    <NavigationContainer>
      { user ? <HomeStack />: <AuthStack/> }
      
    </NavigationContainer>
  );
}

export default function App() {
  return (
  <AuthenticatedUserProvider>
     <RootNavigator />
  </AuthenticatedUserProvider>
 );
}
