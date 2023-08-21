import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Card } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function RecyclableInformation() {
  const navigation = useNavigation();

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

  const handleClickRedirectToNonRecyclable = () => {
    navigation.navigate("Não reciclável");
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
      <Text style={styles.title}>
      Materiais Recicláveis
      </Text>
      <Text style={styles.text}>
        Aprenda aqui a separar cada tipo de material!
      </Text>
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
              containerStyle={[styles.card, { backgroundColor: "#FFEB3B" }]}
            >
              <Card.Title style={styles.cardTitle}>Metais</Card.Title>
            </Card>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleClickRedirectToGlass}>
            <Card
              containerStyle={[styles.card, { backgroundColor: "#4CAF50" }]}
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

          <TouchableOpacity onPress={handleClickRedirectToNonRecyclable}>
            <Card
              containerStyle={[styles.card, { backgroundColor: "#616161" }]}
            >
              <Card.Title style={styles.cardTitle}>Não reciclável</Card.Title>
            </Card>
          </TouchableOpacity>
        </View>
     
      </View>
    </View>
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
    paddingTop: 40,
  },
  logo: {
    width: 70,
    height: 70,
    marginBottom: 10,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "green",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    marginBottom: 5
  },
  text: {
    fontSize: 13,
    textAlign: "center",
    marginBottom: 10
  },
  cardContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  card: {
    width: 140,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  cardTitle: {
    color: "#fff",
  },
});
