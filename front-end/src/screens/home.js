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
import { Icon } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";
import GenericUserImage from "../../assets/userExample/GenericUserImage.png";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { RefreshControl } from "react-native";
import { HOST_KEY } from "@env";
import axios from "axios";
import { Video, ResizeMode } from "expo-av";
import api from "../services/adapter/api";

export default function Home() {
  const navigation = useNavigation();
  const { height } = Dimensions.get("window");
  const [search, setSearch] = useState(null);
  const [publications, setPublications] = useState(null);
  const [users, setUsers] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [filteredPublications, setFilteredPublications] = useState(null);

  const isFocused = useIsFocused();

  const handleClickRedirectToPublicationView = (publication) => {
    const user = users.find((usr) => usr.id === publication.user_id);
    navigation.navigate("Publicacao", {
      publication,
      publications,
      user,
      users,
    });
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await getPublications();
    await getUsers();
    setRefreshing(false);
  };

  const getPublications = async () => {
    try {
      const { HOST_KEY } = process.env;
      const response = await axios.get(`${HOST_KEY}/publication`, { responseType: "json" });
      const { data } = response;

      if (data) {
        setPublications(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getUsers = async () => {
    try {
      const { HOST_KEY } = process.env;
      const response = await axios.get(`${HOST_KEY}/user`, { responseType: "json" });
      const { data } = response;

      if (data) {
        setUsers(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUsers();
    getPublications();
  }, [isFocused]);

  useEffect(() => {
    if (publications && search && search.trim() !== "") {
      const filtered = publications.filter((publication) =>
        publication.publ_title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredPublications(filtered);
    } else {
      setFilteredPublications(publications);
    }
  }, [search, publications]);

  return (
    <ScrollView
      style={[styles.container, { height: height }]}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.formContainer}>
        <View style={styles.searchInput}>
          <Icon
            name="search"
            type="font-awesome"
            color="#888"
            size={15}
            style={{ marginLeft: 5, marginTop: 5 }}
          />
          <TextInput
            style={{ marginLeft: 10, textAlign: "left", width: "90%" }}
            name="searchInput"
            value={search}
            onChangeText={setSearch}
            placeholder="Pesquisar"
          ></TextInput>
        </View>

        <View style={{ alignItems: "center" }}>
          <View style={styles.publicationsContainer}>
            {filteredPublications?.map((publication) => (
              <TouchableOpacity
                key={publication.id}
                onPress={() =>
                  handleClickRedirectToPublicationView(publication)
                }
              >
                <View style={styles.publicationCard}>
                  {publication.publ_midia_type === "video" ? (
                    <Video
                      source={{
                        uri: `data:video/${publication.publ_midiaType};base64,${publication.publ_midia}`,
                      }}
                      style={styles.publicationImage}
                      resizeMode="cover"
                      useNativeControls={false}
                      shouldPlay={false}
                    />
                  ) : (
                    <Image
                      source={{
                        uri: `data:image/${publication.publ_midiaType};base64,${publication.publ_midia}`,
                      }}
                      style={styles.publicationImage}
                    />
                  )}

                  <Text style={styles.titlePublicationCard}>
                    {publication.publ_title}
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={GenericUserImage}
                      style={styles.userProfilePic}
                    />
                    <Text style={styles.username}>
                      {
                        users.find((user) => user.id === publication.user_id)
                          ?.user_name
                      }
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
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
    alignItems: "center",
  },
  searchInput: {
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 10,
    padding: 8,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#ECECEC",
    borderRadius: 10,
    width: "93%",
    alignSelf: "center",
  },
  publicationsContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-start",
    flexWrap: "wrap",
  },
  publicationCard: {
    borderRadius: 10,
    marginBottom: 5,
    padding: 10,
    width: "100%",
  },
  publicationImage: {
    borderRadius: 10,
    width: 175,
    height: 195,
  },
  userProfilePic: {
    width: 30,
    height: 30,
    borderRadius: 65,
    borderColor: "gray",
    padding: 10,
    borderWidth: 2,
  },
  username: {
    textAlign: "left",
    color: "#111",
    marginLeft: 5,
    fontSize: 12,
  },
  titlePublicationCard: {
    textAlign: "left",
    fontSize: 17,
    color: "#111",
    marginTop: 5,
    marginBottom: 5,
  },
});
