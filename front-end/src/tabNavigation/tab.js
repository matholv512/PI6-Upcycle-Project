import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "../screens/home";
import CreateArticle from "../screens/createArticle";
import RecyclableInformation from "../screens/recyclableInformation/recyclableInformation";
import Login from "../screens/login";
import Register from "../screens/register"
import Paper from "../screens/recyclableInformation/paper";
import Plastic from "../screens/recyclableInformation/plastic";
import Metal from "../screens/recyclableInformation/metal";
import Glass from "../screens/recyclableInformation/glass";
import Batteries from "../screens/recyclableInformation/batteries";
import Eletronics from "../screens/recyclableInformation/eletronics";
import VegetableOil from "../screens/recyclableInformation/vegetableOil";
import NonRecyclable from "../screens/recyclableInformation/nonRecyclable"

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const RecyclableStack = createStackNavigator();
const LoginStack = createStackNavigator();

const LoginFunctionStack = () => {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <LoginStack.Screen name="Registrar" component={Register} options={{ headerShown: false }}/>
    </LoginStack.Navigator>
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
      <RecyclableStack.Screen name="Papel" component={Paper} />
      <RecyclableStack.Screen name="Plástico" component={Plastic} />
      <RecyclableStack.Screen name="Metal" component={Metal} />
      <RecyclableStack.Screen name="Vidro" component={Glass} />
      <RecyclableStack.Screen name="Baterias" component={Batteries} />
      <RecyclableStack.Screen name="Eletrônicos" component={Eletronics} />
      <RecyclableStack.Screen
        name="Óleo vegetal"
        component={VegetableOil}
      />
      <RecyclableStack.Screen
        name="Não reciclável"
        component={NonRecyclable}
      />
    </RecyclableStack.Navigator>
  );
};

class TabBottom extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Tab"
            component={TabNavigator}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Conta"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Criar") {
            iconName = focused ? "create" : "create-outline";
          } else if (route.name === "Conta") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "Sobre recicláveis") {
            iconName = focused ? "leaf" : "leaf-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "black",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Criar" component={CreateArticle} />
      <Tab.Screen
        name="Sobre recicláveis"
        component={RecyclableInformationStack}
      />
      <Tab.Screen name="Conta" component={LoginFunctionStack} />
    </Tab.Navigator>
  );
};

export default TabBottom;
