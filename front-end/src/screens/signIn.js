import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function SignIn() {
  const navigation = useNavigation();
  const { height } = Dimensions.get("window");

  const redirectToLogin = () => {
    navigation.navigate("Login");
  };

  const redirectToHome = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={[styles.container, { height: height }]}>
      <Image
        style={styles.logo}
        source={require("../../assets/logo/1x/upcycle(3).png")}
      />
      <TouchableOpacity style={styles.card}>
        <View style={styles.cardContent}>
          <Ionicons name="logo-google" size={20} color={"red"} />
          <Text style={styles.cardText}>Entrar com Google</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
        <View style={styles.cardContent}>
          <Ionicons name="logo-reddit" size={20} color={"goldenrod"} />
          <Text style={styles.cardText}>Entrar com Reddit</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
        <View style={styles.cardContent}>
          <Ionicons name="logo-twitter" size={20} color={"blue"} />
          <Text style={styles.cardText}>Entrar com Twitter</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={() => redirectToLogin()}>
        <View style={styles.cardContent}>
          <Ionicons name="mail-outline" size={20} />
          <Text style={styles.cardText}>Entrar com E-mail</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => redirectToHome()}>
        <Text style={styles.text}>Explorar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f9f9f9",
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "center",
    paddingLeft: 10,
  },
  logo: {
    width: 120,
    height: 135,
    marginBottom: 22,
  },
  text: {
    marginTop: 7,
    fontSize: 15,
    fontWeight: "bold",
    color: "green",
    marginBottom: 25,
    textAlign: "center",
  },
  cardText: {
    fontSize: 15,
    fontWeight: "normal",
    color: "black",
    textAlign: "center",
    paddingLeft: 6,
  },
  card: {
    width: 200,
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "#ECECEC",
    height: 50,
    justifyContent: "center",
    alignItems: "flex-start",
    borderRadius: 10,
    marginBottom: 15,
  },
});
