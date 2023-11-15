import React from "react";
import { View, Text, Image } from "react-native";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";
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
import GenericUserImage from "../../assets/userExample/GenericUserImage.png";
import PublicationView from "../screens/publicationView";
import LogoHeader from "../layout/logoHeader";

const Drawer = createDrawerNavigator();
const homeStack = createStackNavigator();
const RecyclableStack = createStackNavigator();

const HomeStack = () => {
  return (
    <homeStack.Navigator initialRouteName="Home">
      <homeStack.Screen
        name="HomeInStack"
        component={Home}
        options={{ headerShown: false }}
      />
      <homeStack.Screen
        name="Publicacao"
        component={PublicationView}
        options={{ headerShown: false, headerTitle: "" }}
      />
    </homeStack.Navigator>
  );
};

const RecyclableInformationStack = () => {
  return (
    <RecyclableStack.Navigator initialRouteName="RecyclableInformation">
      <RecyclableStack.Screen
        name="RecyclableInformation"
        component={RecyclableInformation}
        options={{ headerShown: false }}
      />
      <RecyclableStack.Screen
        name="Papel"
        component={Paper}
        options={{ headerShown: false, headerTitle: "" }}
      />
      <RecyclableStack.Screen
        name="Plástico"
        component={Plastic}
        options={{ headerShown: false, headerTitle: "" }}
      />
      <RecyclableStack.Screen
        name="Metal"
        component={Metal}
        options={{ headerShown: false, headerTitle: "" }}
      />
      <RecyclableStack.Screen
        name="Vidro"
        component={Glass}
        options={{ headerShown: false, headerTitle: "" }}
      />
      <RecyclableStack.Screen
        name="Baterias"
        component={Batteries}
        options={{ headerShown: false, headerTitle: "" }}
      />
      <RecyclableStack.Screen
        name="Eletrônicos"
        component={Eletronics}
        options={{ headerShown: false, headerTitle: "" }}
      />
      <RecyclableStack.Screen
        name="Óleo vegetal"
        component={VegetableOil}
        options={{ headerShown: false, headerTitle: "" }}
      />
      <RecyclableStack.Screen
        name="Não reciclável"
        component={NonRecyclable}
        options={{ headerShown: false, headerTitle: "" }}
      />
    </RecyclableStack.Navigator>
  );
};

const AppStack = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => (
        <SafeAreaView>
          <View
            style={{
              height: 200,
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              borderBottomColor: "#f1f1f1",
              borderBottomWidth: 1,
              backgroundColor: "#2FAC66",
            }}
          >
            <Image
              source={GenericUserImage}
              style={{
                height: 130,
                width: 130,
                borderRadius: 65,
              }}
            />
            <Text
              style={{
                fontSize: 22,
                marginVertical: 6,
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              Nome do usuário
            </Text>
          </View>
          <DrawerItemList {...props} />
        </SafeAreaView>
      )}
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#f9f9f9",
          width: 250,
        },
        headerStyle: {
          backgroundColor: "#f9f9f9",
        },
        headerTintColor: "#2FAC66",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        drawerLabelStyle: {
          color: "#111",
        },
        headerTransparent: false,
        drawerActiveTintColor: "green",
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeStack}
        options={{
          headerShown: true,
          headerTitle: "",
          headerBackground: () => LogoHeader(),
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              size={size}
              color={focused ? "green" : "black"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Publicar"
        component={CreatePublication}
        options={{
          headerShown: true,
          headerTitle: "",
          headerStyle: { backgroundColor: "#ECECEC" },
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name={focused ? "create-sharp" : "create-outline"}
              size={size}
              color={focused ? "green" : "black"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Reciclaveis"
        component={RecyclableInformationStack}
        options={{
          headerShown: true,
          headerTitle: "",
          headerStyle: { backgroundColor: "#ECECEC" },
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name={
                focused
                  ? "information-circle-sharp"
                  : "information-circle-outline"
              }
              size={size}
              color={focused ? "green" : "black"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Sair"
        component={Logout}
        options={{
          headerShown: true,
          headerTitle: "",
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name={focused ? "exit-sharp" : "exit-outline"}
              size={size}
              color={focused ? "green" : "black"}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;
