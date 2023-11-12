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

export default function PublicationView() {
  const { height } = Dimensions.get("window");

  return (
    <ScrollView style={[styles.container, { height: height }]}>
      <View style={styles.formContainer}>

      <View style={styles.publicationsContainer}>
        <Text>Publicação</Text>
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
});
