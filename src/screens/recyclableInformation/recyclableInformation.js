import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { Card } from "react-native-elements";

export default function RecyclableInformation() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../../assets/Logo.png")} />
      <Text style={styles.textTitle}>Materiais recicláveis</Text>
      <Text style={styles.text}>
        Aprenda aqui a separar cada tipo de material!
      </Text>

      <TouchableOpacity style={styles.cards}>
        <ScrollView>
      <Card containerStyle={styles.card}>
        <Card.Title>Papel</Card.Title>
      </Card>

      <Card containerStyle={styles.card}>
        <Card.Title>Papel</Card.Title>
      </Card>
      </ScrollView>
</TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
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
  textTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  text: {
    fontSize: 11,
    textAlign: "center",
  },
  cards: {
    marginHorizontal: "auto",
    width: 400,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  card: {
    flex: 1,
    width: '40%',
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
