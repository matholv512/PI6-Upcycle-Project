import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Card } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";
import axios from "axios";
import { API_PYTHON_KEY } from "@env";
import { useNavigation } from "@react-navigation/native";

export default function RecyclableClassifier() {
  const { height } = Dimensions.get("window");
  const navigation = useNavigation();
  const [midia, setMidia] = useState(null);
  const [erroMidia, setErroMidia] = useState(null);
  const [identifiedClass, setIdentifiedClass] = useState(null);

  const handleIdentifiedClassRedirectToRecyclableMaterial = () => {
    if (identifiedClass === 0) {
      navigation.navigate("Baterias");
    } else if (identifiedClass === 1) {
      navigation.navigate("Biodegradaveis");
    } else if (identifiedClass === 2) {
      navigation.navigate("Vidro Marrom");
    } else if (identifiedClass === 3) {
      navigation.navigate("Papelão");
    } else if (identifiedClass === 4) {
      navigation.navigate("Roupas");
    } else if (identifiedClass === 5) {
      navigation.navigate("Vidro Verde");
    } else if (identifiedClass === 6) {
      navigation.navigate("Metal");
    } else if (identifiedClass === 7) {
      navigation.navigate("Papel");
    } else if (identifiedClass === 8) {
      navigation.navigate("Plástico");
    } else if (identifiedClass === 9) {
      navigation.navigate("Calçados");
    } else if (identifiedClass === 10) {
      navigation.navigate("Lixo");
    } else if (identifiedClass === 11) {
      navigation.navigate("Vidro Branco");
    }
  };

  const handleClickRedirectToRecyclabeInformation = () => {
    navigation.navigate("RecyclableInformation");
  };

  const validateFields = () => {
    let error = false;
    setErroMidia(null);
    if (!midia) {
      setErroMidia("Selecionar uma imagem é obrigatório");
      error = true;
    }

    return !error;
  };

  const handleSelectMidia = async () => {
    setErroMidia(null);
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert("Permissão negada para acessar a biblioteca de mídia.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.canceled) {
      const selectedMidia = result.assets[0].uri;
      setMidia(selectedMidia);
    }
  };

  const convertMidiaToBase64 = async (uri) => {
    try {
      const response = await fetch(uri);
      const blob = await response.blob();
      const base64Midia = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result.split(",")[1]);
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(blob);
      });
      return base64Midia;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const classifyImage = async () => {
    try {
      const url = `${API_PYTHON_KEY}/classify`;
      const base64Midia = await convertMidiaToBase64(midia);

      const response = await axios.post(url, {
        image: {
          base64: base64Midia,
        },
      });

      setIdentifiedClass(response.data.class);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleIdentifiedClassRedirectToRecyclableMaterial();
  }, [handleIdentifiedClassRedirectToRecyclableMaterial]);

  return (
    <ScrollView
      contentContainerStyle={[styles.container, { minHeight: height }]}
    >
      <View style={styles.formContainer}>
        <Text style={styles.title}>Classificador de materiais recicláveis</Text>
        <Text style={{ color: "#111", fontSize: 15, marginBottom: 10 }}>
          Envie uma imagem do material reciclável e forneceremos informações
          importantes sobre ele.
        </Text>
        <View style={styles.mainView}>
          <TouchableOpacity
            onPress={handleSelectMidia}
            style={[styles.highlightedArea, { marginBottom: 5 }]}
          >
            <Ionicons name="camera-outline" size={35} color="gray" />
            <Text
              style={[
                styles.textLabel,
                { alignSelf: "center", paddingLeft: 5 },
              ]}
            >
              Tirar uma foto
            </Text>
          </TouchableOpacity>

          {erroMidia ? (
            <Text style={[styles.erroMessage, { marginTop: 5 }]}>
              {erroMidia}
            </Text>
          ) : null}

          <TouchableOpacity
            onPress={handleSelectMidia}
            style={styles.highlightedArea}
          >
            <Ionicons name="add-circle-outline" size={35} color="gray" />
            <Text
              style={[
                styles.textLabel,
                { alignSelf: "center", paddingLeft: 5 },
              ]}
            >
              Selecionar uma Imagem
            </Text>
          </TouchableOpacity>

          {erroMidia ? (
            <Text style={[styles.erroMessage, { marginTop: 5 }]}>
              {erroMidia}
            </Text>
          ) : null}
          {midia ? (
            <View style={[styles.imageArea, { marginTop: 10 }]}>
              <TouchableOpacity
                style={{ alignSelf: "flex-end" }}
                onPress={() => setMidia(null)}
              >
                <Ionicons name="close-circle-outline" size={40} color="red" />
              </TouchableOpacity>
              {midia && (
                <Image source={{ uri: midia }} style={styles.imagePreview} />
              )}
            </View>
          ) : null}
        </View>
        <View
          style={{ marginTop: 10, marginBottom: 10, justifyContent: "center" }}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={() => classifyImage()}
          >
            <Text style={styles.buttonText}>Classificar</Text>
          </TouchableOpacity>
        </View>

        <Text>Para visualizar informações sobre todos os materiais</Text>
        <TouchableOpacity>
          <Text onPress={() => handleClickRedirectToRecyclabeInformation()} style={{ color: "green" }}>Clique aqui!</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9f9f9",
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
    marginBottom: 15,
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
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  mainView: {
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
  imagePreview: {
    width: 300,
    height: 270,
    marginVertical: 10,
    borderRadius: 8,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "green",
  },
  highlightedArea: {
    backgroundColor: "#ECECEC",
    borderRadius: 10,
    justifyContent: "flex-start",
    paddingLeft: 6,
    alignItems: "flex-start",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "gray",
    borderStyle: "dashed",
    width: "100%",
  },
  imageArea: {
    backgroundColor: "#ECECEC",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});
