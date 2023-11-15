import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Video, ResizeMode } from "expo-av";
import { Button, Icon } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import publicationImageExample1 from "../../assets/publication/publicationImageExample1.jpg";
import publicationImageExample2 from "../../assets/publication/publicationImageExample2.jpg";
import GenericUserImage from "../../assets/userExample/GenericUserImage.png";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function PublicationView({ route }) {
  const { publication, user, publications, users } = route.params;
  const { height } = Dimensions.get("window");
  const [isLiked, setIsLiked] = useState(false);
  const [isBookMarked, setIsBookMarked] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [recommendedPublications, setRecommendedPublications] = useState([]);

  const handlePressFollow = () => {
    isFollowing === true ? setIsFollowing(false) : setIsFollowing(true);
  };

  const handlePressLike = () => {
    isLiked === true ? setIsLiked(false) : setIsLiked(true);
  };

  const handlePressBookMark = () => {
    isBookMarked === true ? setIsBookMarked(false) : setIsBookMarked(true);
  };

  useEffect(() => {
    randomizePublications();
  }, []);

  const randomizePublications = () => {
    const shuffledPublications = [...publications];
    for (let i = shuffledPublications.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledPublications[i], shuffledPublications[j]] = [
        shuffledPublications[j],
        shuffledPublications[i],
      ];
    }

    const numRecommended = 2;
    const selectedRecommended = shuffledPublications.slice(0, numRecommended);

    setRecommendedPublications(selectedRecommended);
  };

  function IsVideoExtension(fileName) {
    if (fileName) {
      if (fileName.toString().toLowerCase().endsWith(".mp4")) {
        return true;
      } else if (fileName.toString().toLowerCase().endsWith(".avi")) {
        return true;
      } else {
        return false;
      }
    }
  }

  return (
    <ScrollView style={[styles.container, { height: height }]}>
      <View style={styles.formContainer}>
        <View style={styles.publicationsContainer}>
          <Text style={styles.publicationTitle}>{publication.publ_title}</Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Image source={GenericUserImage} style={styles.userProfilePic} />
            <Text style={styles.username}>{user?.user_name}</Text>

            <TouchableOpacity
              style={[styles.button, { marginLeft: 10 }]}
              onPress={() => handlePressFollow()}
            >
              {isFollowing ? (
                <Text style={[styles.buttonText, {}]}>Seguindo</Text>
              ) : (
                <Text style={styles.buttonText}>Seguir</Text>
              )}
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Ionicons name="eye-outline" size={23} color={"gray"} />
            <Text style={{ fontSize: 13, marginLeft: 2 }}>1,8M</Text>
            <TouchableOpacity onPress={() => handlePressLike()}>
              {isLiked ? (
                <View
                  style={[
                    styles.iconsView,
                    {
                      flexDirection: "row",
                      alignItems: "center",
                      marginLeft: 5,
                      paddingRight: 3,
                    },
                  ]}
                >
                  <Ionicons name="heart" size={23} color={"red"} />
                  <Text style={{ fontSize: 13 }}>{publication.publ_like}</Text>
                </View>
              ) : (
                <View
                  style={[
                    styles.iconsView,
                    {
                      flexDirection: "row",
                      alignItems: "center",
                      marginLeft: 5,
                      paddingRight: 3,
                    },
                  ]}
                >
                  <Ionicons name="heart-outline" size={23} color={"gray"} />
                  <Text style={{ fontSize: 13 }}>{publication.publ_like}</Text>
                </View>
              )}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePressBookMark()}>
              {isBookMarked ? (
                <View
                  style={[
                    styles.iconsView,
                    {
                      flexDirection: "row",
                      alignItems: "center",
                      marginLeft: 5,
                    },
                  ]}
                >
                  <Ionicons name="bookmark" size={23} color={"gray"} />
                </View>
              ) : (
                <View
                  style={[
                    styles.iconsView,
                    {
                      flexDirection: "row",
                      alignItems: "center",
                      marginLeft: 5,
                    },
                  ]}
                >
                  <Ionicons name="bookmark-outline" size={23} color={"gray"} />
                </View>
              )}
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={[
                  styles.iconsView,
                  { flexDirection: "row", alignItems: "center", marginLeft: 5 },
                ]}
              >
                <Ionicons name="arrow-redo-outline" size={23} color={"gray"} />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.midiaView}>
            {IsVideoExtension(publication.publ_midia) ? (
              <Video
                style={styles.modalMidia}
                useNativeControls
                resizeMode={ResizeMode.CONTAIN}
                isLooping
                onPlaybackStatusUpdate={(status) => setStatus(() => status)}
                ref={video}
                source={{uri: `data:image/jpeg;base64,${publication.publ_midia}`}}
              />
            ) : (
              <Image
                source={{uri: `data:image/jpeg;base64,${publication.publ_midia}`}}
                style={styles.publicationMidia}
              />
            )}
          </View>

          <View style={styles.descriptionView}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderBottomWidth: 1,
                borderBottomColor: "gray",
                marginBottom: 4,
              }}
            >
              <Ionicons
                name="information-circle-outline"
                size={33}
                color={"gray"}
              />
              <Text style={{ fontSize: 15, marginLeft: 2 }}>Descrição</Text>
            </View>
            <Text style={{ fontSize: 13 }}>{publication.publ_description}</Text>
          </View>

          <View style={styles.commentsView}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderBottomWidth: 1,
                borderBottomColor: "gray",
                marginBottom: 4,
              }}
            >
              <Ionicons name="chatbubble-outline" size={33} color={"gray"} />
              <Text style={{ fontSize: 15, marginLeft: 2 }}>Comentários</Text>
            </View>

            <View style={{ flexDirection: "column", alignItems: "flex-start" }}>
              <View style={{ marginBottom: 5 }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    source={GenericUserImage}
                    style={[styles.userProfilePic, { width: 26, height: 26 }]}
                  />
                  <Text style={{ marginLeft: 3, color: "green" }}>
                    Username
                  </Text>
                </View>
                <Text style={{ fontSize: 13 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus ut ligula turpis. Proin placerat fermentum mi, ac
                  feugiat ipsum fringilla id.
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "space-between",
                textAlign: "left",
                marginTop: 10,
                padding: 5,
                borderWidth: 1,
                borderRadius: 10,
                borderColor: "gray",
                width: 360,
              }}
            >
              <View style={{ flexDirection: "row", flex: 1 }}>
                <TextInput
                  style={{ flex: 1 }}
                  placeholder="Adicionar um comentário"
                  multiline={true}
                  numberOfLines={1}
                />
              </View>
              <Ionicons name="send-outline" size={23} color={"gray"} />
            </View>
          </View>
          <View style={styles.recommendedView}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderBottomWidth: 1,
                borderBottomColor: "gray",
                marginBottom: 4,
              }}
            >
              <Ionicons name="bulb-outline" size={33} color={"gray"} />
              <Text style={{ fontSize: 15, marginLeft: 2 }}>Recomendados</Text>
            </View>
            <View
              style={[
                styles.midiaView,
                {
                  flexDirection: "row",
                  justifyContent: "space-around",
                  borderWidth: 0,
                },
              ]}
            >
              {recommendedPublications ? recommendedPublications.map((p) => (
                <View key={p.id}>
                <Image
                  source={{uri: `data:image/jpeg;base64,${p.publ_midia}`}}
                  style={[styles.publicationMidia, { width: 160, height: 160 }]}
                />
                <Text style={styles.titlePublicationCard}>{p.publ_title}</Text>
              </View>
              )) : null}
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  formContainer: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "#f9f9f9",
    marginTop: 10,
    alignItems: "flex-start",
    padding: 12,
  },
  publicationTitle: {
    textAlign: "left",
    fontSize: 22,
    color: "green",
    marginBottom: 7,
  },
  titlePublicationCard: {
    textAlign: "left",
    fontSize: 20,
    color: "green",
    marginBottom: 7,
  },
  userProfilePic: {
    width: 40,
    height: 40,
    borderRadius: 65,
    borderColor: "gray",
    padding: 10,
    borderWidth: 2,
  },
  username: {
    textAlign: "left",
    color: "#111",
    marginLeft: 10,
    fontSize: 18,
  },
  button: {
    backgroundColor: "green",
    padding: 7,
    width: 75,
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "flex-start",
    color: "white",
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  iconsView: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 2,
    padding: 1,
  },
  midiaView: {
    borderColor: "gray",
    width: 370,
    marginTop: 3,
    borderRadius: 10,
    borderWidth: 1,
  },
  publicationMidia: {
    borderRadius: 10,
    width: 370,
    height: 220,
    borderColor: "gray",
  },
  descriptionView: {
    backgroundColor: "#ECECEC",
    borderRadius: 10,
    marginTop: 5,
    padding: 6,
    paddingBottom: 20,
    borderBottomWidth: 0.2,
    borderBottomColor: "#111",
    width: 370,
  },
  commentsView: {
    backgroundColor: "#ECECEC",
    borderRadius: 10,
    marginTop: 5,
    padding: 6,
    paddingBottom: 20,
    borderBottomWidth: 0.2,
    borderBottomColor: "#111",
    width: 370,
  },
  recommendedView: {
    backgroundColor: "#ECECEC",
    borderRadius: 10,
    marginTop: 5,
    padding: 6,
    paddingBottom: 20,
    borderBottomWidth: 0.2,
    borderBottomColor: "#111",
    width: 370,
  },
  titlePublicationCard: {
    textAlign: "left",
    fontSize: 15,
    color: "#111",
    marginTop: 5,
    marginBottom: 5,
  },
});
