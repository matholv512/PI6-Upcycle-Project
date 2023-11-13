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
import publicationImageExample1 from "../../assets/publication/publicationImageExample1.jpg";
import publicationImageExample2 from "../../assets/publication/publicationImageExample2.jpg";
import GenericUserImage from "../../assets/userExample/GenericUserImage.png";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  const { height } = Dimensions.get("window");
  const [search, setSearch] = useState(null);

  const handleClickRedirectToPublicationView = () => {
    navigation.navigate("Publicacao");
  };

  return (
    <ScrollView style={[styles.container, { height: height }]}>
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

        <View style={styles.publicationsContainer}>
          <TouchableOpacity onPress={() => handleClickRedirectToPublicationView()}>
            <View style={styles.publicationCard}>
              <Image
                source={publicationImageExample1}
                style={styles.publicationImage}
              />
              <Text style={styles.titlePublicationCard}>
                Título exemplo
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
                <Text style={styles.username}>Username</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.publicationCard}>
              <Image
                source={publicationImageExample2}
                style={styles.publicationImage}
              />
              <Text style={styles.titlePublicationCard}>Título exemplo</Text>
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
                <Text style={styles.username}>Username</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.publicationsContainer}>
          <TouchableOpacity>
            <View style={styles.publicationCard}>
              <Image
                source={publicationImageExample1}
                style={styles.publicationImage}
              />
              <Text style={styles.titlePublicationCard}>Título exemplo</Text>
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
                <Text style={styles.username}>Username</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.publicationCard}>
              <Image
                source={publicationImageExample2}
                style={styles.publicationImage}
              />
              <Text style={styles.titlePublicationCard}>Título exemplo</Text>
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
                <Text style={styles.username}>Username</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.publicationsContainer}>
          <TouchableOpacity>
            <View style={styles.publicationCard}>
              <Image
                source={publicationImageExample1}
                style={styles.publicationImage}
              />
              <Text style={styles.titlePublicationCard}>Título exemplo</Text>
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
                <Text style={styles.username}>Username</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.publicationCard}>
              <Image
                source={publicationImageExample2}
                style={styles.publicationImage}
              />
              <Text style={styles.titlePublicationCard}>Título exemplo</Text>
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
                <Text style={styles.username}>Username</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.publicationsContainer}>
          <TouchableOpacity>
            <View style={styles.publicationCard}>
              <Image
                source={publicationImageExample1}
                style={styles.publicationImage}
              />
              <Text style={styles.titlePublicationCard}>Título exemplo</Text>
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
                <Text style={styles.username}>Username</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.publicationCard}>
              <Image
                source={publicationImageExample2}
                style={styles.publicationImage}
              />
              <Text style={styles.titlePublicationCard}>Título exemplo</Text>
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
                <Text style={styles.username}>Username</Text>
              </View>
            </View>
          </TouchableOpacity>
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
    marginLeft: 40,
    padding: 8,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#ECECEC",
    borderRadius: 10,
    width: "83%",
    alignSelf: "flex-start",
  },
  publicationsContainer: {
    flexDirection: "row",
    width: "95%",
    justifyContent: "center",
  },
  publicationCard: {
    borderRadius: 10,
    marginBottom: 5,
    padding: 10,
    width: 165,
  },
  publicationImage: {
    borderRadius: 10,
    width: 160,
    height: 195,
  },
  userProfilePic: {
    width: 30,
    height: 30,
    borderRadius: 65,
    borderColor: "gray",
    padding: 10,
    borderWidth: 1,
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
