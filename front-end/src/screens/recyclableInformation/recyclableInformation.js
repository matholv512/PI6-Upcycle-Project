import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import { Card } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function RecyclableInformation() {
  const navigation = useNavigation();
  const { height } = Dimensions.get("window");

  const handleClickRedirectToClassifier = () => {
    navigation.navigate("Classificador");
  };

  const handleClickRedirectToPaper = () => {
    navigation.navigate("Papel");
  };

  const handleClickRedirectToPlastic = () => {
    navigation.navigate("Plástico");
  };

  const handleClickRedirectToMetal = () => {
    navigation.navigate("Metal");
  };

  const handleClickRedirectToGlass = () => {
    navigation.navigate("Vidro");
  };

  const handleClickRedirectToBatteries = () => {
    navigation.navigate("Baterias");
  };

  const handleClickRedirectToElectronics = () => {
    navigation.navigate("Eletrônicos");
  };

  const handleClickRedirectToVegetableOil = () => {
    navigation.navigate("Óleo vegetal");
  };

  const handleClickRedirectToBiological = () => {
    navigation.navigate("Biodegradaveis");
  };

  const handleClickRedirectToBrownGlass = () => {
    navigation.navigate("Vidro Marrom");
  };

  const handleClickRedirectToCardBoard = () => {
    navigation.navigate("Papelão");
  };

  const handleClickRedirectToClothes = () => {
    navigation.navigate("Roupas");
  };

  const handleClickRedirectToGreenGlass = () => {
    navigation.navigate("Vidro Verde");
  };

  const handleClickRedirectToShoes = () => {
    navigation.navigate("Calçados");
  };

  const handleClickRedirectToTrash = () => {
    navigation.navigate("Lixo");
  };

  const handleClickRedirectToWhiteGlass= () => {
    navigation.navigate("Vidro Branco");
  };

  const handleClickRedirectToNonRecyclable = () => {
    navigation.navigate("Não reciclável");
  };

  return (
    <ScrollView style={[styles.container, { height: height }]}>
      <Text style={styles.title}>Materiais Recicláveis</Text>
      <Text style={styles.text}>
        Aprenda aqui a separar cada tipo de material!
      </Text>
      <View style={styles.formContainer}>
        <View style={styles.cardRow}>
          <TouchableOpacity onPress={handleClickRedirectToPaper}>
            <Card
              containerStyle={[styles.card, { backgroundColor: "#1565C0" }]}
            >
              <Card.Title style={styles.cardTitle}>Papel</Card.Title>
            </Card>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleClickRedirectToPlastic}>
            <Card
              containerStyle={[styles.card, { backgroundColor: "#E53935" }]}
            >
              <Card.Title style={styles.cardTitle}>Plástico</Card.Title>
            </Card>
          </TouchableOpacity>
        </View>

        <View style={styles.cardRow}>
          <TouchableOpacity onPress={handleClickRedirectToMetal}>
            <Card
              containerStyle={[styles.card, { backgroundColor: "#EDC968" }]}
            >
              <Card.Title style={styles.cardTitle}>Metais</Card.Title>
            </Card>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleClickRedirectToGlass}>
            <Card
              containerStyle={[styles.card, { backgroundColor: "#999" }]}
            >
              <Card.Title style={styles.cardTitle}>Vidro</Card.Title>
            </Card>
          </TouchableOpacity>
        </View>

        <View style={styles.cardRow}>
          <TouchableOpacity onPress={handleClickRedirectToBatteries}>
            <Card
              containerStyle={[styles.card, { backgroundColor: "#FF5722" }]}
            >
              <Card.Title style={styles.cardTitle}>
                Pilhas e baterias
              </Card.Title>
            </Card>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleClickRedirectToElectronics}>
            <Card
              containerStyle={[styles.card, { backgroundColor: "#9C27B0" }]}
            >
              <Card.Title style={styles.cardTitle}>Eletrônicos</Card.Title>
            </Card>
          </TouchableOpacity>
        </View>

        <View style={styles.cardRow}>
          <TouchableOpacity onPress={handleClickRedirectToVegetableOil}>
            <Card
              containerStyle={[styles.card, { backgroundColor: "#FF9800" }]}
            >
              <Card.Title style={styles.cardTitle}>Óleo vegetal</Card.Title>
            </Card>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleClickRedirectToBiological}>
            <Card
              containerStyle={[styles.card, { backgroundColor: "#78D921" }]}
            >
              <Card.Title style={styles.cardTitle}>Biodegradáveis</Card.Title>
            </Card>
          </TouchableOpacity>
        </View>

        <View style={styles.cardRow}>
          <TouchableOpacity onPress={handleClickRedirectToBrownGlass}>
            <Card
              containerStyle={[styles.card, { backgroundColor: "#543923" }]}
            >
              <Card.Title style={styles.cardTitle}>Vidro Marrom</Card.Title>
            </Card>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleClickRedirectToCardBoard}>
            <Card
              containerStyle={[styles.card, { backgroundColor: "#7D5534" }]}
            >
              <Card.Title style={styles.cardTitle}>Papelão</Card.Title>
            </Card>
          </TouchableOpacity>
        </View>

        <View style={styles.cardRow}>
          <TouchableOpacity onPress={handleClickRedirectToClothes}>
            <Card
              containerStyle={[styles.card, { backgroundColor: "#455C66" }]}
            >
              <Card.Title style={styles.cardTitle}>Roupas</Card.Title>
            </Card>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleClickRedirectToGreenGlass}>
            <Card
              containerStyle={[styles.card, { backgroundColor: "#306B1C" }]}
            >
              <Card.Title style={styles.cardTitle}>Vidro Verde</Card.Title>
            </Card>
          </TouchableOpacity>
        </View>

        <View style={styles.cardRow}>
          <TouchableOpacity onPress={handleClickRedirectToShoes}>
            <Card
              containerStyle={[styles.card, { backgroundColor: "#8E233A" }]}
            >
              <Card.Title style={styles.cardTitle}>Calçados</Card.Title>
            </Card>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleClickRedirectToTrash}>
            <Card
              containerStyle={[styles.card, { backgroundColor: "#616161" }]}
            >
              <Card.Title style={styles.cardTitle}>Resíduos</Card.Title>
            </Card>
          </TouchableOpacity>
        </View>

        <View style={styles.cardRow}>
          <TouchableOpacity onPress={handleClickRedirectToWhiteGlass}>
          <Card containerStyle={[styles.card, { backgroundColor: "#DEDEDE" }]}>
            <Card.Title style={styles.cardTitle}>Vidro Branco</Card.Title>
          </Card>
        </TouchableOpacity>

          <TouchableOpacity onPress={handleClickRedirectToNonRecyclable}>
            <Card
              containerStyle={[styles.card, { backgroundColor: "#333" }]}
            >
              <Card.Title style={styles.cardTitle}>Não reciclável</Card.Title>
            </Card>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9f9f9",
    flex: 1,
  },
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#f9f9f9",
    marginTop: 25,
  },
  title: {
    marginTop: 10,
    fontSize: 22,
    fontWeight: "bold",
    color: "green",
    marginBottom: 20,
    paddingLeft: 30,
  },
  text: {
    fontSize: 15,
    textAlign: "left",
    paddingLeft: 30,
  },
  cardContainer: {
    alignItems: "center",
  },
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    backgroundColor: "#ECECEC",
    borderRadius: 10,
    padding: 4,
  },
  button: {
    backgroundColor: "green",
    padding: 10,
    width: 130,
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "flex-start",
    color: "white",
  },
  buttonText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "bold",
    textAlign: "center",
  },
  card: {
    width: 135,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
  },
  cardTitle: {
    color: "#f9f9f9",
    fontWeight: "bold",
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  classifyView: {
    borderRadius: 10,
    alignItems: "flex-start",
    flexDirection: "column",
    backgroundColor: "#ECECEC",
    padding: 10,
    width: 330,
    marginBottom: 10
  },
});
