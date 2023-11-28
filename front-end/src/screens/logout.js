import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from "react-native";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { useAuth } from "../hook";

export default function Logout() {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(true);
  const { logout } = useAuth();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      setModalVisible(true);
    }
  }, [isFocused]);

  const handleLogout = async () => {
    await logout();
    setModalVisible(false);
    navigation.navigate("Entrar");
  };

  const handleCancel = () => {
    setModalVisible(false);
    navigation.navigate("Home");
  };

  return (
    <Modal animationType="slide" transparent={true} visible={isModalVisible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text>Tem certeza que deseja se desconectar?</Text>
          <View style={styles.buttonsArea}>
            <TouchableOpacity style={[styles.button, {marginBottom: 10, backgroundColor: "red"}]} onPress={() => handleLogout()}>
              <Text style={styles.buttonText}>
                Desconectar
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => handleCancel()}>
              <Text style={styles.buttonText}>
                Cancelar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "green"
  },
  button: {
    backgroundColor: "green",
    padding: 10,
    width: 240,
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "flex-start",
    color: "white",
    alignItems: "center"
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsArea: {
    flexDirection: "column",
    margin: 10
  }
});
