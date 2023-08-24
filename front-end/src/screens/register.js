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

export default function Register() {
  const navigation = useNavigation();

  const handleClickRedirectToHome = () => {
    navigation.navigate("Home");
  }

  const handleClickRedirectBack = () => {
    navigation.navigate("Login")
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.formContainer}>
        <Image style={styles.logo} source={require("../../assets/Logo.png")} />
        <View style={styles.registerView}>
          <Text style={styles.title}>Registrar</Text>

          <Text style={styles.textLabel}>Usuário</Text>
          <TextInput
            placeholder="Digite seu usuário"
            textContentType="emailAddress"
            style={styles.input}
          />
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
          <Text style={styles.textLabel}>Confirmar senha</Text>
          <TextInput
            placeholder="Digite sua senha novamente"
            textContentType="password"
            secureTextEntry={true}
            style={styles.input}
          />

          <View style={styles.buttonsArea}>

          <TouchableOpacity
              style={styles.button}
              onPress={handleClickRedirectToHome}
            >
              <Text style={styles.buttonText}>Registrar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button]} onPress={handleClickRedirectBack}>
              <Text style={styles.buttonText}>Voltar</Text>
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
  registerView: {
    width: 300,
    height: 500,
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
