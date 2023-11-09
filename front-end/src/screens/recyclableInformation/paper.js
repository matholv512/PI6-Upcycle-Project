import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Card } from "react-native-elements";

export default function Paper() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Card containerStyle={[styles.card]}>
          <Text style={styles.mainTitle}>Papel</Text>
          <Text style={styles.text}>
            O papel é produzido a partir de fibras vegetais e podem ser
            reciclados facilmente.
          </Text>
        </Card>

        <Card containerStyle={[styles.card]}>
          <Text style={styles.textTitle}>Como descartar Papel:</Text>
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

        <Card containerStyle={[styles.card]}>
          <Text style={styles.textTitle}>Impactos:</Text>
          <Text style={styles.text}>
            Reduz a poluição atmosférica por conta da queima de papel.
          </Text>

          <Text style={styles.text}>
            Se descartado da forma incorreta auxilia no aumento de resíduos nos
            Aterros Sanitários.
          </Text>

          <Text style={styles.text}>
            A reciclagem diminui o uso de recursos hídricos na poluição do
            material
          </Text>
        </Card>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9f9f9",
    flex: 1,
  },
  mainTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "green",
    paddingBottom: 12,
  },
  textTitle: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
    color: "green",
  },
  text: {
    color: "black",
    fontSize: 15,
  },
  card: {
    borderRadius: 10,
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#ECECEC",
    borderWidth: 1,
    borderColor: "green",
  },
});
