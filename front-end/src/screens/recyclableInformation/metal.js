import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Card } from "react-native-elements";

export default function Metal() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Card containerStyle={[styles.card]}>
          <Text style={styles.mainTitle}>Metais</Text>
          <Text style={styles.text}>
            O metal é um material amplamente reciclado devido à sua durabilidade
            e capacidade de ser fundido e remodelado. Alguns exemplos de metais
            recicláveis incluem alumínio, ferro, cobre e aço.
          </Text>
        </Card>

        <Card containerStyle={[styles.card]}>
          <Text style={styles.textTitle}>Como descartar Metal:</Text>
          <Text style={styles.text}>
            1 - Separe os metais dos demais resíduos.
          </Text>

          <Text style={styles.text}>
            2 - Verifique se há pontos de coleta seletiva de metal na sua
            região.
          </Text>

          <Text style={styles.text}>
            3 - Caso não haja coleta seletiva, procure por empresas de
            reciclagem de metal na sua cidade.
          </Text>

          <Text style={styles.text}>
            4 - Evite misturar diferentes tipos de metais, pois podem exigir
            processos de reciclagem diferentes.
          </Text>
        </Card>

        <Card containerStyle={[styles.card]}>
          <Text style={styles.textTitle}>Impactos:</Text>
          <Text style={styles.text}>
            A reciclagem de metal reduz a necessidade de extração de minérios,
            economizando energia e recursos naturais.
          </Text>

          <Text style={styles.text}>
            Além disso, a reciclagem de metal contribui para a redução do volume
            de resíduos e a preservação do meio ambiente.
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
