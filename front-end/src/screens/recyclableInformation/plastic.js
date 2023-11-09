import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Card } from "react-native-elements";

export default function Plastic() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Card containerStyle={[styles.card]}>
          <Text style={styles.mainTitle}>Plastico</Text>
          <Text style={styles.text}>
            O plástico é um material polimérico sintético, produzido a partir de
            compostos orgânicos, como o petróleo. Pode ser reciclado, mas nem
            todos os tipos de plástico possuem a mesma capacidade de reciclagem.
          </Text>
        </Card>

        <Card containerStyle={[styles.card]}>
          <Text style={styles.textTitle}>Como descartar Plástico:</Text>
          <Text style={styles.text}>
            1 - Separe os plásticos secos dos demais resíduos.
          </Text>

          <Text style={styles.text}>
            2 - Verifique o tipo de plástico através do símbolo de reciclagem
            presente na embalagem.
          </Text>

          <Text style={styles.text}>
            3 - Descarte o plástico no recipiente apropriado para sua
            reciclagem, caso haja coleta seletiva na sua região.
          </Text>

          <Text style={styles.text}>
            4 - Caso não haja coleta seletiva, procure por pontos de reciclagem
            específicos para plástico em sua cidade.
          </Text>
        </Card>

        <Card containerStyle={[styles.card]}>
          <Text style={styles.textTitle}>Impactos:</Text>
          <Text style={styles.text}>
            O descarte inadequado de plástico contribui para a poluição do meio
            ambiente, especialmente dos oceanos.
          </Text>

          <Text style={styles.text}>
            Animais marinhos podem ingerir plástico ou ficar presos em resíduos
            plásticos, causando danos à vida selvagem.
          </Text>

          <Text style={styles.text}>
            A reciclagem de plástico reduz a extração de matéria-prima e a
            quantidade de resíduos enviados para aterros sanitários.
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
