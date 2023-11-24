import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Modal,
  Dimensions,
} from "react-native";

export default function ResetPassword() {
  const [userEmail, setUserEmail] = useState(null);
  const [erroUserEmail, setErroUserEmail] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const { height } = Dimensions.get("window");

  const showErrorModal = () => {
    if (userEmail) {
      setModalVisible(true);
    }
  };

  const hideErrorModal = () => {
    setModalVisible(false);
  };

  const showModalError = () => {
      return (
        <Modal animationType="slide" transparent={true} visible={isModalVisible}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>Verifique seu e-mail</Text>
              <Text style={styles.modalText}>
                Uma senha temporária foi enviada
              </Text>
              <TouchableOpacity
                style={[styles.button, { alignSelf: "center", width: 200 }]}
                onPress={hideErrorModal}
              >
                <Text style={styles.buttonText}>Ok</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      );
  };

  const validateFields = () => {
    let error = false;
    setErroUserEmail(null);
    if (!userEmail) {
      setErroUserEmail("O campo e-mail é obrigatório");
      error = true;
    }

    return !error;
  };

  return (
    <ScrollView contentContainerStyle={[styles.container, { height: height }]}>
      {showModalError()}
      <View style={styles.formContainer}>
        <View style={styles.loginView}>
          <Text style={styles.title}>Resetar senha</Text>
          <Text style={styles.textLabel}>E-mail</Text>
          <TextInput
            placeholder="Digite seu e-mail"
            textContentType="emailAddress"
            value={userEmail}
            onChangeText={setUserEmail}
            style={erroUserEmail ? styles.erroInput : styles.input}
          />
          <Text style={styles.erroMessage}>{erroUserEmail}</Text>

          <TouchableOpacity
            style={[styles.button]}
            onPress={() => {
              showErrorModal();
              validateFields();
            }}
          >
            <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </View>
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
