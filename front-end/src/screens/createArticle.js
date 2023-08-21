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
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CreateArticle = (props) => {
  const { navigation, route } = props;
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [midia, setMidia] = useState(null);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      setTitulo("");
      setDescricao("");
      setMidia(null);
    });

    return unsubscribe;
  }, [navigation]);

  const salvarArticle = async () => {
    try {
      if (titulo === "" || descricao === "") {
        alert("Por favor, preencha todos os campos.");
        return;
      }

      const newInfo = { titulo, descricao, midia };

      const allArticles = await AsyncStorage.getItem("articles");
      let arrayAtualizado = [];

      if (allArticles !== null) {
        arrayAtualizado = JSON.parse(allArticles);
      }

      arrayAtualizado.push(newInfo);

      await AsyncStorage.setItem("articles", JSON.stringify(arrayAtualizado));
      console.log("Objeto salvo com sucesso!");
      navigation.navigate("Home");
    } catch (error) {
      console.log("Erro ao salvar o objeto:", error);
    }
  };

  const handleSalvar = () => {
    const newInfo = { titulo, descricao, midia };
    navigation.navigate("Home", { info: newInfo });
  };

  const handleSelecionarMidia = async () => {
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
      const selectedMidia = result.assets[0].uri; // Acessa a primeira midia selecionada
      setMidia(selectedMidia);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.formContainer}>
        <Image style={styles.logo} source={require("../../assets/Logo.png")} />
        <Text style={styles.title}>Criar</Text>
          <TextInput
            placeholder="Título"
            value={titulo}
            onChangeText={setTitulo}
            style={styles.input}
          />
          <TextInput
            placeholder="Descrição"
            value={descricao}
            onChangeText={setDescricao}
            multiline={true}
            numberOfLines={4}
            style={styles.inputTextarea}
          />

          <Text style={{marginBottom:5}}>Selecione uma Imagem ou Vídeo</Text>
          <TouchableOpacity
            onPress={handleSelecionarMidia}
            style={[styles.button]}
          >
            <Text style={{textAlign: "center", justifyContent: 'center', alignItems: 'center', fontWeight: 500}}>Selecionar</Text>
          </TouchableOpacity>
          {midia && (
            <Image source={{ uri: midia }} style={styles.imagePreview} />
          )}
         
          <View style={{marginTop: 15}}>
            <TouchableOpacity
              style={styles.button}
              onPress={salvarArticle}
            >
              <Text style={{fontWeight: 500}}>Salvar</Text>
            </TouchableOpacity>
            </View>
      </View>
    </ScrollView>
  );
};

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
    borderRadius: 6,
    alignItems: "center",
    elevation: 4,
  },
  logo: {
    width: 70,
    height: 70,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "green",
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    width: "100%",
    height: 50,
    borderRadius: 6,
  },
  inputTextarea: {
    textAlignVertical: "top",
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    width: "100%",
    height: 150,
    borderRadius: 6,
  },
  button: {
    backgroundColor: "green",
    padding: 10,
    marginVertical: 10,
    width: 200,
    alignItems: "center",
    borderRadius: 6,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  imagePreview: {
    width: 200,
    height: 200,
    marginVertical: 10,
    borderRadius: 6,
  },
});

export default CreateArticle;
