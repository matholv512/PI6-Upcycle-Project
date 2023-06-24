import React from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";

const viewArticle = ({ route }) => {
  const { info } = route.params;

  return (
    <View style={styles.container}>
        <ScrollView style={styles.card} >
     
      <Text style={styles.cardTitle}>{info.titulo}</Text>
      {info.imagem && (
        <Image source={{ uri: info.imagem }} style={styles.cardImage} />
      )}
      <Text style={styles.cardDescription}>{info.descricao}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: 'center',
        alignItems: 'center'
      },
      logo: {
        width: 70,
        height: 70,
        marginBottom: 10,
        alignSelf: "center",
        borderWidth: 1,
        borderColor: "green",
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
        marginTop: 20,
        marginBottom: 8,
        color: 'green',
        textAlign: "center",
        marginBottom: 15,
      },
      cardDescription: {
        fontSize: 16,
        marginTop: 15,
        textAlign: "center"
      },
      cardImage: {
        width: 340,
        height: 320,
        alignSelf: "center",
        marginBottom: 8,
        borderRadius: 20,
      },
});

export default viewArticle;
