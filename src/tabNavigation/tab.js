import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home";
import CreateArticle from "../screens/createArticle";
import Ionicons from "react-native-vector-icons/Ionicons";
import RecyclableInformation from "../screens/recyclableInformation/recyclableInformation";
import Map from "../screens/map";

const Tab = createBottomTabNavigator();

export default function TabBottom() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Criar") {
              iconName = focused ? "create" : "create-outline";
            } else if (route.name === "Mapa") {
              iconName = focused ? "map" : "map-outline";
            } else if (route.name === "Sobre Recicláveis") {
              iconName = focused ? "leaf" : "leaf-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "green",
          tabBarInactiveTintColor: "black",
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Criar" component={CreateArticle} />
        <Tab.Screen name="Mapa" component={Map} />
        <Tab.Screen
          name="Sobre Recicláveis"
          component={RecyclableInformation}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
