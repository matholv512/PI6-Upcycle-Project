import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Home from "../screens/home";
import RecyclableInformation from "../screens/recyclableInformation/recyclableInformation";
import Login from "../screens/login";
import Register from "../screens/register";
import Paper from "../screens/recyclableInformation/paper";
import Plastic from "../screens/recyclableInformation/plastic";
import Metal from "../screens/recyclableInformation/metal";
import Glass from "../screens/recyclableInformation/glass";
import Batteries from "../screens/recyclableInformation/batteries";
import Eletronics from "../screens/recyclableInformation/eletronics";
import VegetableOil from "../screens/recyclableInformation/vegetableOil";
import NonRecyclable from "../screens/recyclableInformation/nonRecyclable";
import SignIn from "../screens/signIn";
import ResetPassword from "../screens/resetPassword";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const RecyclableStack = createStackNavigator();
const SignInStack = createStackNavigator();

const SignInFunctionStack = () => {
  return (
    <SignInStack.Navigator>
      <SignInStack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <SignInStack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: true, headerTitle: "" }}
      />
      <SignInStack.Screen
        name="Registrar"
        component={Register}
        options={{ headerShown: true, headerTitle: "" }}
      />
      <SignInStack.Screen
        name="ResetarSenha"
        component={ResetPassword}
        options={{ headerShown: true, headerTitle: "" }}
      />
    </SignInStack.Navigator>
  );
};

const RecyclableInformationStack = () => {
  return (
    <RecyclableStack.Navigator>
      <RecyclableStack.Screen
        name="Materiais Recicláveis"
        component={RecyclableInformation}
        options={{ headerShown: false }}
      />
      <RecyclableStack.Screen
        name="Papel"
        component={Paper}
        options={{ headerShown: true, headerTitle: "" }}
      />
      <RecyclableStack.Screen
        name="Plástico"
        component={Plastic}
        options={{ headerShown: true, headerTitle: "" }}
      />
      <RecyclableStack.Screen
        name="Metal"
        component={Metal}
        options={{ headerShown: true, headerTitle: "" }}
      />
      <RecyclableStack.Screen
        name="Vidro"
        component={Glass}
        options={{ headerShown: true, headerTitle: "" }}
      />
      <RecyclableStack.Screen
        name="Baterias"
        component={Batteries}
        options={{ headerShown: true, headerTitle: "" }}
      />
      <RecyclableStack.Screen
        name="Eletrônicos"
        component={Eletronics}
        options={{ headerShown: true, headerTitle: "" }}
      />
      <RecyclableStack.Screen
        name="Óleo vegetal"
        component={VegetableOil}
        options={{ headerShown: true, headerTitle: "" }}
      />
      <RecyclableStack.Screen
        name="Não reciclável"
        component={NonRecyclable}
        options={{ headerShown: true, headerTitle: "" }}
      />
    </RecyclableStack.Navigator>
  );
};

export function AuthStack() {
  return (
    <Drawer.Navigator
      initialRouteName="Entrar"
      drawerContent={(props) => {
        return (
          <SafeAreaView>
            <DrawerItemList {...props} />
          </SafeAreaView>
        );
      }}
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#fff",
          width: 250,
        },
        headerStyle: {
          backgroundColor: "#f9f9f9",
        },
        headerTintColor: "green",
        drawerLabelStyle: {
          color: "#111",
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{ headerTitle: "" }}
      />
      <Drawer.Screen
        name="Materiais Recicláveis"
        component={RecyclableInformationStack}
        options={{ headerShown: true, headerTitle: "" }}
      />
      <Drawer.Screen
        name="Entrar"
        component={SignInFunctionStack}
        options={{ headerShown: false, headerTitle: "" }}
      />
    </Drawer.Navigator>
  );
}
