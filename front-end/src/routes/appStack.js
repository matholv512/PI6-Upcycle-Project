import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "../screens/home";
import CreatePublication from "../screens/createPublication";
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
import Logout from "../screens/logout";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const RecyclableStack = createStackNavigator();

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

export function AppStack() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Criar") {
            iconName = focused ? "create" : "create-outline";
          } else if (route.name === "Sobre recicláveis") {
            iconName = focused ? "leaf" : "leaf-outline";
          } else if (route.name === "Sair") {
            iconName = focused ? "log-out" : "log-out-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "black",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen
        name="Criar"
        component={CreatePublication}
        options={{ headerShown: true, headerTitle: "" }}
      />
      <Tab.Screen
        name="Sobre recicláveis"
        component={RecyclableInformationStack}
      />
      <Tab.Screen
        name="Sair"
        component={Logout}
        options={{ headerShown: true, headerTitle: "" }}
      />
    </Tab.Navigator>
  );
}
