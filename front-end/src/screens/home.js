import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  Modal,
  TouchableOpacity,
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
        <Text style={styles.cardText}>{info.titulo}</Text>
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

  function IsVideoExtension(fileName) {
    if (fileName != null && fileName != undefined) {
      if (fileName.toString().toLowerCase().endsWith(".mp4")) {
        return true;
      } else if (fileName.toString().toLowerCase().endsWith(".avi")) {
        return true;
      } else {
        return false;
      }
    }
  }

  const buscaArtigos = async () => {
    const arraySalvo = await AsyncStorage.getItem("articles");
    const articles = JSON.parse(arraySalvo);
    setAllArticles(articles);
  };

  const handleCreatePublication = () => {
    navigation.navigate("Criar");
  };

  const openModal = (article) => {
    setSelectedArticle(article);
    setModalVisible(true);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>EcoFranca</Text>
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

      {selectedArticle &&
        (IsVideoExtension(selectedArticle.midia) ? (
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
                <View style={styles.reactionButtonsModal}>
                  <TouchableOpacity>
                    <Icon
                      name="thumbs-up"
                      type="font-awesome"
                      color="#888"
                      size={30}
                      style={styles.thumbsUpIcon}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <Icon
                      name="thumbs-down"
                      type="font-awesome"
                      color="#888"
                      size={30}
                      style={styles.thumbsDownIcon}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <Icon
                      name="bookmark"
                      type="font-awesome"
                      color="#888"
                      size={30}
                      style={styles.bookmarkIcon}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <Icon
                      name="share-alt-square"
                      type="font-awesome"
                      color="#888"
                      size={30}
                      style={styles.bookmarkIcon}
                    />
                  </TouchableOpacity>

                  <Button
                    title="Fechar"
                    onPress={() => setModalVisible(false)}
                    buttonStyle={styles.modalButton}
                  />
                </View>
              </View>
            </View>
          </Modal>
        ) : (
          <Modal visible={isModalVisible} animationType="slide" transparent>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Image
                  source={{ uri: selectedArticle.midia }}
                  style={styles.modalMidia}
                />
                <Text style={styles.modalTitle}>{selectedArticle.titulo}</Text>
                <Text style={styles.modalDescription}>
                  {selectedArticle.descricao}
                </Text>
                <View style={styles.reactionButtonsModal}>
                  <TouchableOpacity>
                    <Icon
                      name="thumbs-up"
                      type="font-awesome"
                      color="#888"
                      size={30}
                      style={styles.thumbsUpIcon}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <Icon
                      name="thumbs-down"
                      type="font-awesome"
                      color="#888"
                      size={30}
                      style={styles.thumbsDownIcon}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <Icon
                      name="bookmark"
                      type="font-awesome"
                      color="#888"
                      size={30}
                      style={styles.bookmarkIcon}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <Icon
                      name="share-alt-square"
                      type="font-awesome"
                      color="#888"
                      size={30}
                      style={styles.bookmarkIcon}
                    />
                  </TouchableOpacity>

                  <Button
                    title="Fechar"
                    onPress={() => setModalVisible(false)}
                    buttonStyle={styles.modalButton}
                  />
                </View>
              </View>
            </View>
          </Modal>
        ))}
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
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 8,
    alignItems: "center",
    elevation: 4,
    minHeight: 650,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginBottom: 5,
  },
  searchIcon: {
    marginRight: 10,
  },
  inputSearch: {
    flex: 1,
    fontSize: 15,
    color: "#000",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "green",
    paddingLeft: 10,
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
    marginBottom: 3,
  },
  card: {
    backgroundColor: "#fff",
    borderColor: "green",
    borderBottomWidth: 0.3,
    padding: 16,
    width: 340,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    marginBottom: 10,
  },
  cardText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "green",
  },
  cardMidia: {
    width: "100%",
    height: 300,
    alignSelf: "center",
    marginBottom: 8,
    borderRadius: 8,
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
  reactionButtonsModal: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-end",
    flexDirection: "row",
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
    borderRadius: 8,
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
    justifyContent: "center",
    alignSelf: "center",
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
    borderRadius: 8,
    alignSelf: "flex-end",
    width: 90,
    marginLeft: 50,
  },
});
