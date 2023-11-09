import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { HOST_KEY } from "@env";
import Loader from "../layout/loader";

export default function Register() {
  const navigation = useNavigation();
  const { height } = Dimensions.get("window");
  const [username, setUsername] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userPassword, setUserPassword] = useState(null);
  const [checkUserPassword, setCheckUserPassword] = useState(null);
  const [erroUsername, setErroUsername] = useState(null);
  const [erroUserEmail, setErroUserEmail] = useState(null);
  const [erroUserPassword, setErroUserPassword] = useState(null);
  const [erroCheckUserPassword, setErroCheckUserPassword] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleClickRedirectToHome = () => {
    navigation.navigate("Home");
  };

  const handleClickRedirectBack = () => {
    navigation.navigate("Login");
  };

  const validateFields = () => {
    let error = false;
    setErroUsername(null);
    setErroUserEmail(null);
    setErroUserPassword(null);
    setErroCheckUserPassword(null);

    if (!username) {
      setErroUsername("O campo usuário é obrigatório");
      error = true;
    }

    if (!userEmail) {
      setErroUserEmail("O campo e-mail é obrigatório");
      error = true;
    } else if (!isValidEmail(userEmail)) {
      setErroUserEmail("E-mail inválido. Insira um e-mail válido");
      error = true;
    }

    if (!userPassword) {
      setErroUserPassword("O campo senha é obrigatório");
      error = true;
    } else if (!isValidPassword(userPassword)) {
      setErroUserPassword(
        "A senha deve conter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas e números"
      );
      error = true;
    }

    if (!checkUserPassword) {
      setErroCheckUserPassword("O campo confirmação de senha é obrigatório");
      error = true;
    } else if (
      isCheckPasswordEqualsToPassword(userPassword, checkUserPassword)
    ) {
      setErroUserPassword("As senhas não coincidem");
      setErroCheckUserPassword("As senhas não coincidem");
      error = true;
    }

    return !error;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return passwordRegex.test(password);
  };

  const isCheckPasswordEqualsToPassword = (password, chkPassword) => {
    if (password !== chkPassword) {
      return true;
    }
    return false;
  };

  const saveUser = async () => {
    setIsLoading(true);
    const url = `${HOST_KEY}/user`;
    setTimeout(async () => {
      try {
        if (validateFields()) {
          const response = await axios.get(url);
  
          const { data } = response;
  
          const userExists = data.find(
            (user) => user.user_name === username || user.user_email === userEmail
          );
  
          if (userExists) {
            if (userExists.user_name === username) {
              setErroUsername("Usuario já cadastrado no sistema");
            }
            if (userExists.user_email === userEmail) {
              setErroUserEmail("E-mail já cadastrado no sistema");
            }
          } else {
            await axios.post(url, {
              user_name: username,
              user_email: userEmail,
              user_password: userPassword,
            });
            handleClickRedirectToHome();
          }
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }, 1000)
  };

  return (
    <ScrollView contentContainerStyle={[styles.container, { height: height }]}>
      {isLoading ? (
        <Loader />
      ) : (
        <View style={styles.formContainer}>
          <View style={styles.registerView}>
            <Text style={styles.title}>Registrar</Text>

            <Text style={styles.textLabel}>Usuário</Text>
            <TextInput
              placeholder="Digite seu usuário"
              textContentType="name"
              style={erroUsername ? styles.erroInput : styles.input}
              value={username}
              onChangeText={setUsername}
            />
            <Text style={styles.erroMessage}>{erroUsername}</Text>
            <Text style={styles.textLabel}>E-mail</Text>
            <TextInput
              placeholder="Digite seu e-mail"
              textContentType="emailAddress"
              style={erroUserEmail ? styles.erroInput : styles.input}
              value={userEmail}
              onChangeText={setUserEmail}
            />
            <Text style={styles.erroMessage}>{erroUserEmail}</Text>
            <Text style={styles.textLabel}>Senha</Text>
            <TextInput
              placeholder="Digite sua senha"
              textContentType="password"
              secureTextEntry={true}
              style={erroUserPassword ? styles.erroInput : styles.input}
              value={userPassword}
              onChangeText={setUserPassword}
            />
            <Text style={styles.erroMessage}>{erroUserPassword}</Text>
            <Text style={styles.textLabel}>Confirmar senha</Text>
            <TextInput
              placeholder="Digite sua senha novamente"
              textContentType="password"
              secureTextEntry={true}
              style={erroCheckUserPassword ? styles.erroInput : styles.input}
              value={checkUserPassword}
              onChangeText={setCheckUserPassword}
            />
            <Text style={styles.erroMessage}>{erroCheckUserPassword}</Text>

            <View style={[styles.signInArea, { marginTop: 10 }]}>
              <TouchableOpacity
                style={styles.button}
                onPress={saveUser}
                disabled={isLoading}
              >
                <Text style={styles.buttonText}>Registrar</Text>
              </TouchableOpacity>
              {/* <TouchableOpacity style={styles.signInArea}>
          <Text style={{marginLeft: 10}}>Já tem uma conta?</Text><Text style={styles.textSignInArea}>Logue-se aqui</Text>
          </TouchableOpacity> */}
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
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "#f9f9f9",
    marginLeft: 20,
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
  registerView: {
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
});
