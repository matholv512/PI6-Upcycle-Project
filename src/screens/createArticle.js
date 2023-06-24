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
import AsyncStorage from '@react-native-async-storage/async-storage';

const CreateArticle = (props) => {
  const { navigation, route } = props;
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagem, setImagem] = useState(null);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      setTitulo("");
      setDescricao("");
      setImagem(null);
    });

    return unsubscribe;
  }, [navigation]);

  const salvarArticle = async () => {
    try {
      if (titulo === "" || descricao === "") {
        alert("Por favor, preencha todos os campos.");
        return;
      }

      const newInfo = { titulo, descricao, imagem };

      const allArticles = await AsyncStorage.getItem('articles');
      let arrayAtualizado = [];
  
      if (allArticles !== null) {
        arrayAtualizado = JSON.parse(allArticles);
      }
  
      arrayAtualizado.unshift(newInfo);
  
      await AsyncStorage.setItem('articles', JSON.stringify(arrayAtualizado));
      console.log('Objeto salvo com sucesso!');
      navigation.navigate("Home");
    } catch (error) {
      console.log('Erro ao salvar o objeto:', error);
    }
  };

  const handleSalvar = () => {
    const newInfo = { titulo, descricao, imagem };
    navigation.navigate("Home", { info: newInfo });
  };

  const handleSelecionarImagem = async () => {
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
      const selectedImage = result.assets[0].uri; // Acessa a primeira imagem selecionada
      setImagem(selectedImage);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../../assets/Logo.png")} />

        <View style={styles.formContainer}>
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
            onPress={handleSelecionarImagem}
            style={[styles.button]}
          >
            <Text style={{textAlign: "center", justifyContent: 'center', alignItems: 'center', fontWeight: 500}}>Selecionar</Text>
          </TouchableOpacity>
          {imagem && (
            <Image source={{ uri: imagem }} style={styles.imagePreview} />
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
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  logo: {
    width: 70,
    height: 70,
    margin: 10,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "green",
  },
  formContainer: {
    flex: 1,
    backgroundColor: "f9f9f9",
    borderRadius: 20,
    margin: 20,
    padding: 20,
    alignItems: "center",
    borderColor: 'green',
    borderWidth: 0.3,
    display: 'flex'
  },
  title: {
    textAlign: "center",
    fontSize: 26,
    color: "green",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    width: 320,
    borderRadius: 20,
    borderColor: 'green'
  },
  inputTextarea: {
    borderWidth: 1,
    padding: 10,
    margin: 10,
    width: 320,
    height: 100,
    borderRadius: 20,
    borderColor: 'green'
  },
  button: {
    backgroundColor: "green",
    padding: 10,
    width: 200,
    alignItems: "center",
    borderRadius: 20,
  },
  imagePreview: {
    width: 200,
    height: 200,
    marginVertical: 10,
  },
});

export default CreateArticle;
