import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
  Dimensions,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { HOST_KEY } from "@env";
import Loader from "../layout/loader";
import API from "../services/adapter/api";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from '../hook/index';

export default function Login() {
  const navigation = useNavigation();
  const [userEmail, setUserEmail] = useState(null);
  const [userPassword, setUserPassword] = useState(null);
  const [erroUserEmail, setErroUserEmail] = useState(null);
  const [erroUserPassword, setErroUserPassword] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const { height } = Dimensions.get("window");
  const { login, user } = useAuth();

  const handleClickRedirectToRegister = () => {
    navigation.navigate("Registrar");
  };

  const handleClickRedirectToHome = () => {
    navigation.navigate("Home");
  };

  const handleClickRedirectToResetPassword = () => {
    navigation.navigate("ResetarSenha");
  };

  const showErrorModal = () => {
    setModalVisible(true);
  };

  const showModalError = () => {
    return (
      <Modal animationType="slide" transparent={true} visible={isModalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Usuário ou senha incorretos</Text>
            <TouchableOpacity
              style={[styles.button, { alignSelf: "center", width: 200 }]}
              onPress={hideErrorModal}
            >
              <Text style={styles.buttonText}>Tentar novamente</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };

  const hideErrorModal = () => {
    setModalVisible(false);
  };

  const validateFields = () => {
    let error = false;
    setErroUserEmail(null);
    setErroUserPassword(null);
    if (!userEmail) {
      setErroUserEmail("O campo e-mail é obrigatório");
      error = true;
    }
    if (!userPassword) {
      setErroUserPassword("O campo senha é obrigatório");
      error = true;
    }

    return !error;
  };

  const userLogin = async () => {
    if (userEmail && userPassword) {
      setIsLoading(true);
      setTimeout(async () => {
        try {
          if (validateFields()) {

            await login(userEmail, userPassword);

            if (user) {
              handleClickRedirectToHome();
            } else {
              showErrorModal();
            }
          }
        } catch (error) {
          //console.error(error);
          showErrorModal();
        } finally {
          setIsLoading(false);
        }
      }, 1000);
    } else {
      validateFields();
    }
  };

  return (
    <ScrollView contentContainerStyle={[styles.container, { height: height }]}>
      {isLoading ? (
        <Loader />
      ) : (
        <View style={styles.formContainer}>
          <View style={styles.loginView}>
            {showModalError()}

            <Text style={styles.title}>Login</Text>
            <Text style={styles.textLabel}>E-mail</Text>
            <TextInput
              placeholder="Digite seu e-mail"
              textContentType="emailAddress"
              value={userEmail}
              onChangeText={setUserEmail}
              style={erroUserEmail ? styles.erroInput : styles.input}
            />
            <Text style={styles.erroMessage}>{erroUserEmail}</Text>
            <Text style={styles.textLabel}>Senha</Text>
            <TextInput
              placeholder="Digite sua senha"
              textContentType="password"
              value={userPassword}
              onChangeText={setUserPassword}
              secureTextEntry={true}
              style={erroUserPassword ? styles.erroInput : styles.input}
            />
            <Text style={styles.erroMessage}>{erroUserPassword}</Text>
            <View style={styles.signInArea}>
              <TouchableOpacity
                style={[styles.button]}
                onPress={userLogin}
                disabled={isLoading}
              >
                <Text style={styles.buttonText}>Entrar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => handleClickRedirectToResetPassword()}
                disabled={isLoading}
              >
                <Text style={styles.textSignInArea}>Esqueceu sua senha?</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.signInArea}>
              <Text>Não tem uma conta?</Text>
              <TouchableOpacity
                onPress={handleClickRedirectToRegister}
                disabled={isLoading}
              >
                <Text style={styles.textSignInArea}>Registre-se aqui</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9f9f9",
    flex: 1,
  },
  formContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#f9f9f9",
  },
  title: {
    marginTop: 25,
    fontSize: 25,
    fontWeight: "bold",
    color: "green",
    marginBottom: 35,
  },
  input: {
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    width: "100%",
    borderRadius: 10,
    borderColor: "green",
    backgroundColor: "#FFF",
  },
  erroInput: {
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    width: "100%",
    borderRadius: 10,
    borderColor: "red",
    backgroundColor: "#FFF",
  },
  button: {
    backgroundColor: "green",
    padding: 10,
    width: 100,
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "flex-start",
    color: "white",
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  loginView: {
    width: 345,
  },
  textLabel: {
    textAlign: "left",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    color: "black",
    fontSize: 14,
  },
  signInArea: {
    alignItems: "center",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 25,
  },
  textSignInArea: {
    marginLeft: 8,
    color: "green",
  },
  erroMessage: {
    marginTop: -5,
    marginBottom: 5,
    color: "red",
    fontSize: 12,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#ECECEC",
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "green",
  },
  modalText: {
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    marginVertical: 10,
  },
});
