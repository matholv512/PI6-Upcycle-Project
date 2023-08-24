import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  Modal,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation();

  const handleClickRedirectToRegister = () => {
    navigation.navigate("Registrar");
  };

  const handleClickRedirectToHome = () => {
    navigation.navigate("Home");
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.formContainer}>
        <Image style={styles.logo} source={require("../../assets/Logo.png")} />
        <View style={styles.loginView}>
          <Text style={styles.title}>Login</Text>
          <Text style={styles.textLabel}>E-mail</Text>
          <TextInput
            placeholder="Digite seu e-mail"
            textContentType="emailAddress"
            style={styles.input}
          />
          <Text style={styles.textLabel}>Senha</Text>
          <TextInput
            placeholder="Digite sua senha"
            textContentType="password"
            secureTextEntry={true}
            style={styles.input}
          />

          <View style={styles.buttonsArea}>
            <TouchableOpacity style={[styles.button]} onPress={handleClickRedirectToHome}>
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={handleClickRedirectToRegister}
            >
              <Text style={styles.buttonText}>Registrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    paddingVertical: 20,
  },
  formContainer: {
    backgroundColor: "#fff",
    margin: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 8,
    alignItems: "center",
    elevation: 4,
    minHeight: 650,
    justifyContent: "center",
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    marginBottom: 25,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 4,
    width: "100%",
    height: 50,
    borderRadius: 8,
    borderColor: "green",
  },
  button: {
    backgroundColor: "green",
    padding: 10,
    marginVertical: 10,
    width: 200,
    alignItems: "center",
    borderRadius: 8,
    color: "white",
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  loginView: {
    width: 300,
    height: 300,
  },
  textLabel: {
    textAlign: "left",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  buttonsArea: {
    alignItems: "center",
  },
});
