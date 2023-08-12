import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  Modal,
} from "react-native";
import { Video, ResizeMode } from "expo-av";
import { Button, Icon } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

const Card = ({ info, onSelect }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <View style={styles.userContainer}>
          <Icon
            name="user"
            type="font-awesome"
            color="#888"
            size={16}
            style={styles.userIcon}
          />
          <Text style={styles.username}>Usuário</Text>
        </View>
        <Text style={styles.cardTitle}>{info.titulo}</Text>
        {info.midia && (
          <Image source={{ uri: info.midia }} style={styles.cardMidia} />
        )}
        <Button
          title="Ver"
          buttonStyle={styles.verButton}
          titleStyle={styles.verButtonText}
          onPress={() => onSelect(info)}
        />
      </View>
    </View>
  );
};

export default function Home(props) {
  const { navigation, route } = props;
  const [allArticles, setAllArticles] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  useFocusEffect(
    React.useCallback(() => {
      buscaArtigos();
    }, [])
  );

  const buscaArtigos = async () => {
    const arraySalvo = await AsyncStorage.getItem("articles");
    const articles = JSON.parse(arraySalvo);
    setAllArticles(articles);
  };

  const handleCreateArticle = () => {
    navigation.navigate("Criar");
  };

  const openModal = (article) => {
    setSelectedArticle(article);
    setModalVisible(true);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.formContainer}>
        <Image style={styles.logo} source={require("../../assets/Logo.png")} />
        <Text style={styles.cardTitle}>EcoFranca</Text>
        <View style={styles.searchContainer}>
          <Icon
            name="search"
            type="font-awesome"
            color="#888"
            size={18}
            style={styles.searchIcon}
          />
          <TextInput style={styles.inputSearch} placeholder="Pesquisar" />
        </View>

        {allArticles &&
          allArticles.map((article, index) => (
            <View key={index} style={styles.cardContainer}>
              <Card info={article} onSelect={openModal} />
            </View>
          ))}
      </View>

      {selectedArticle && (
        <Modal visible={isModalVisible} animationType="slide" transparent>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Video
                ref={video}
                source={{ uri: selectedArticle.midia }}
                style={styles.modalMidia}
                useNativeControls
                resizeMode={ResizeMode.CONTAIN}
                isLooping
                onPlaybackStatusUpdate={(status) => setStatus(() => status)}
              />
              <Text style={styles.modalTitle}>{selectedArticle.titulo}</Text>
              <Text style={styles.modalDescription}>
                {selectedArticle.descricao}
              </Text>
              <Button
                title="Fechar"
                onPress={() => setModalVisible(false)}
                buttonStyle={styles.modalButton}
              />
            </View>
          </View>
        </Modal>
      )}
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
    borderRadius: 6,
    alignItems: "center",
    elevation: 1,
  },
  logo: {
    width: 70,
    height: 70,
    marginBottom: 10,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
    alignSelf: "center",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    borderRadius: 6,
    marginHorizontal: 20,
    marginBottom: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  inputSearch: {
    flex: 1,
    fontSize: 18,
    color: "#000",
  },
  buttonContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "green",
    width: 200,
  },
  cardContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    padding: 16,
    width: 340,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  cardMidia: {
    width: "100%",
    height: 300,
    alignSelf: "center",
    marginBottom: 8,
    borderRadius: 20,
  },
  cardContent: {
    flex: 1,
    justifyContent: "space-between",
  },
  userContainer: {
    flexDirection: "row",
    marginBottom: 4,
  },
  userIcon: {
    textAlign: "left",
    marginRight: 4,
  },
  username: {
    fontSize: 14,
    color: "#888",
  },
  cardDescription: {
    fontSize: 16,
  },
  verButton: {
    backgroundColor: "green",
    borderRadius: 6,
    width: 90,
    alignSelf: "flex-end",
  },
  verButtonText: {
    fontSize: 14,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    width: "90%",
  },
  modalMidia: {
    width: 350,
    height: 300,
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 16,
    borderRadius: 8,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  modalDescription: {
    fontSize: 18,
    color: "#888",
    marginBottom: 16,
  },
  modalButton: {
    backgroundColor: "green",
    borderRadius: 6,
    alignSelf: "flex-end",
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: 90,
  },
});
