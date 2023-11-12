import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import {
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CreatePublication = (props) => {
  const { navigation, route } = props;
  const { height } = Dimensions.get("window");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [midia, setMidia] = useState(null);
  const [erroTitle, setErroTitle] = useState(null);
  const [erroMidia, setErroMidia] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const validateFields = () => {
    let error = false;
    setErroTitle(null);
    setErroMidia(null);
    if (!title) {
      setErroTitle("O campo título é obrigatório");
      error = true;
    }
    if (!midia) {
      setErroMidia("Selecionar uma mídia é obrigatório");
      error = true;
    }

    return !error;
  };

  const savePublication = (async = () => {
    validateFields();
  });

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

  return (
    <ScrollView
      contentContainerStyle={[styles.container, { minHeight: height }]}
    >
      {isLoading ? (
        <Loader />
      ) : (
        <View style={styles.formContainer}>
          <View style={styles.loginView}>
            <Text style={styles.title}>Criar publicação</Text>
            <Text style={styles.textLabel}>Título</Text>
            <TextInput
              placeholder="Digite o título"
              textContentType="none"
              value={title}
              onChangeText={setTitle}
              style={erroTitle ? styles.erroInput : styles.input}
            />
            <Text style={styles.erroMessage}>{erroTitle}</Text>
            <Text style={styles.textLabel}>Descrição</Text>
            <TextInput
              placeholder="Digite a descrição"
              textContentType="none"
              value={description}
              onChangeText={setDescription}
              multiline={true}
              numberOfLines={5}
              style={[
                styles.input,
                {
                  textAlignVertical: "top",
                  textAlign: "left",
                },
              ]}
            />

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
                Selecione uma Imagem ou Vídeo
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

            <View style={{ marginTop: 10, marginBottom: 10 }}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => savePublication()}
              >
                <Text style={styles.buttonText}>Publicar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

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
    marginTop: 10,
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
  },
  imageArea: {
    backgroundColor: "#ECECEC",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});

export default CreatePublication;