import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Paper() {
  return (
    <View style={styles.container}>
      <View>
        <Card containerStyle={[styles.card, { backgroundColor: "#1565C0" }]}>
          <Text style={styles.text}>
            O papel é produzido a partir de fibras vegetais e podem ser
            reciclados facilmente.
          </Text>
        </Card>

        <Card containerStyle={[styles.card, { backgroundColor: "#1565C0" }]}>
          <Text style={styles.textTitle}>Como descartar Papel</Text>
          <Text style={styles.text}>
            1 - Separar os papeis secos em uma sacola plástica.
          </Text>

          <Text style={styles.text}>
            2 - Inclua caixas de papelão desmontadas.
          </Text>

          <Text style={styles.text}>
            3 - De preferência a não rasgar e nem amassar o papel.
          </Text>

          <Text style={styles.text}>
            4 - Não incluir papeis sujos de gorduram amanteigado ou parafinado.
          </Text>
        </Card>

        <Card containerStyle={[styles.card, { backgroundColor: "#1565C0" }]}>
          <Text style={styles.textTitle}>Impactos</Text>
          <Text style={styles.text}>
            Reduz a poluição atmosférica por conta da queima de papel.
          </Text>

          <Text style={styles.text}>
            Se descartado da forma incorreta auxilia no aumento de resíduos nos Aterros Sanitários.
          </Text>

          <Text style={styles.text}>
            A reciclagem diminui o uso de recursos hídricos na poluição do material
          </Text>
        </Card>
      </View>

      <ScrollView contentContainerStyle={styles.cardContainer}></ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
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
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "white",
  },
  text: {
    color: "white",
  },
  card: {
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 110,
  },
});
