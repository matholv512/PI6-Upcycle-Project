import React from "react";
import { View, Text, Image } from "react-native";
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
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
import GenericUserImage from '../../assets/userExample/GenericUserImage.jpg'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const RecyclableStack = createStackNavigator();

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
        options={{ headerShown: true, headerTitle: "Papel" }}
      />
      <RecyclableStack.Screen
        name="Plástico"
        component={Plastic}
        options={{ headerShown: true, headerTitle: "Plástico" }}
      />
      <RecyclableStack.Screen
        name="Metal"
        component={Metal}
        options={{ headerShown: true, headerTitle: "Metal" }}
      />
      <RecyclableStack.Screen
        name="Vidro"
        component={Glass}
        options={{ headerShown: true, headerTitle: "Vidro" }}
      />
      <RecyclableStack.Screen
        name="Baterias"
        component={Batteries}
        options={{ headerShown: true, headerTitle: "Baterias" }}
      />
      <RecyclableStack.Screen
        name="Eletrônicos"
        component={Eletronics}
        options={{ headerShown: true, headerTitle: "Eletrônicos" }}
      />
      <RecyclableStack.Screen
        name="Óleo vegetal"
        component={VegetableOil}
        options={{ headerShown: true, headerTitle: "Óleo Vegetal" }}
      />
      <RecyclableStack.Screen
        name="Não reciclável"
        component={NonRecyclable}
        options={{ headerShown: true, headerTitle: "Não Reciclável" }}
      />
    </RecyclableStack.Navigator>
  );
};

const AppStack = ({ route }) => {
  const getHeaderVisibility = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'SobreReciclaveis';
    return routeName === 'SobreReciclaveis' ? true : false;
  };

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => (
        <SafeAreaView>
          <View
            style={{
              height: 200,
              width: '100%',
              justifyContent: "center",
              alignItems: "center",
              borderBottomColor: "#f4f4f4",
              borderBottomWidth: 1
            }}
          >
            <Image
              source={GenericUserImage}
              style={{
                height: 130,
                width: 130,
                borderRadius: 65
              }}
            />
            <Text
              style={{
                fontSize: 22,
                marginVertical: 6,
                fontWeight: "bold",
                color: "#111"
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
          backgroundColor: "#fff",
          width: 250
        },
        headerStyle: {
          backgroundColor: "#f9f9f9"
        },
        headerTintColor: "green",
        headerTitleStyle: {
          fontWeight: "bold"
        },
        drawerLabelStyle: {
          color: "#111"
        }
      }}
    >
      <Drawer.Screen name="Home" component={Home} options={{ headerShown: true, headerTitle: "" }} />
      <Drawer.Screen
        name="Publicar"
        component={CreatePublication}
        options={{ headerShown: true, headerTitle: "" }}
      />
      <Drawer.Screen
        name="Sobre Recicláveis"
        component={RecyclableInformationStack}
        options={({ route }) => ({
          headerShown: getHeaderVisibility(route),
          headerTitle: "",
        })}
      />
      <Drawer.Screen
        name="Sair"
        component={Logout}
        options={{ headerShown: true, headerTitle: "" }}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;
