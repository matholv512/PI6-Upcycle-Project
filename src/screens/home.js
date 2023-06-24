import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

const Card = ({ info }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{info.titulo}</Text>
      {info.imagem && (
        <Image source={{ uri: info.imagem }} style={styles.cardImage} />
      )}
    </View>
  );
};

export default function Home(props) {
  const { navigation, route } = props;
  const [allArticles, setAllArticles] = useState(null);

  useFocusEffect(
    React.useCallback(() => {
      buscaArtigos();
    },[])
  )

  const buscaArtigos = async() => {
    const arraySalvo = await AsyncStorage.getItem('articles');
    const articles = JSON.parse(arraySalvo);
    setAllArticles(articles);
  }

  const handleCreateArticle = () => {
    navigation.navigate("Criar");
  };

  const handleClickArticle = (article) => {
    navigation.navigate("viewArticle", { info: article });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../../assets/Logo.png")} />
        <Text style={styles.cardTitle}>EcoFranca</Text>
        <TextInput style={styles.inputSearch} placeholder="Pesquisar" />
        {/* <View style={{ margin: 50 }}>
          <Button
            title="Criar Conteúdo"
            buttonStyle={{ backgroundColor: "green" }}
            onPress={handleCreateArticle}
          />
        </View> */}
        
        {allArticles && allArticles.map((article, index) => (
          <View key={index}>
            <TouchableOpacity onPress={() => {handleClickArticle(article)}}>
            <View style={styles.cardContainer}>
              <Card info={article} />
            </View> 
            </TouchableOpacity>
          </View>
        ))}
        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  logo: {
    width: 70,
    height: 70,
    marginBottom: 10,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "green",
  },
  inputSearch: {
    paddingLeft: 5,
    alignItems: "center",
    color: "#0000",
    fontSize: 20,
  },
  cardContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  card: {
    backgroundColor: "#f9f9f9",
    borderRadius: 20,
    borderColor: 'green',
    borderWidth: 0.3,
    padding: 16,
    width: 370,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: 'green',
    textAlign: "center",
    marginBottom: 15,
  },
  cardDescription: {
    fontSize: 16,
    marginBottom: 8,
    textAlign: "center"
  },
  cardImage: {
    width: 325,
    height: 300,
    alignSelf: "center",
    marginBottom: 8,
    borderRadius: 20,
  },
});
