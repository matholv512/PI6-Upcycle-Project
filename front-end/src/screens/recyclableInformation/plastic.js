import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Card } from "react-native-elements";

export default function Plastic() {
  return (
    <View style={styles.container}>
      <View>
        <Card containerStyle={[styles.card]}>
          <Text style={styles.text}>
            O plástico é um material polimérico sintético, produzido a partir de compostos orgânicos, como o petróleo. Pode ser reciclado, mas nem todos os tipos de plástico possuem a mesma capacidade de reciclagem.
          </Text>
        </Card>

        <Card containerStyle={[styles.card]}>
          <Text style={styles.textTitle}>Como descartar Plástico</Text>
          <Text style={styles.text}>
            1 - Separe os plásticos secos dos demais resíduos.
          </Text>

          <Text style={styles.text}>
            2 - Verifique o tipo de plástico através do símbolo de reciclagem presente na embalagem.
          </Text>

          <Text style={styles.text}>
            3 - Descarte o plástico no recipiente apropriado para sua reciclagem, caso haja coleta seletiva na sua região.
          </Text>

          <Text style={styles.text}>
            4 - Caso não haja coleta seletiva, procure por pontos de reciclagem específicos para plástico em sua cidade.
          </Text>
        </Card>

        <Card containerStyle={[styles.card]}>
          <Text style={styles.textTitle}>Impactos</Text>
          <Text style={styles.text}>
            O descarte inadequado de plástico contribui para a poluição do meio ambiente, especialmente dos oceanos.
          </Text>

          <Text style={styles.text}>
            Animais marinhos podem ingerir plástico ou ficar presos em resíduos plásticos, causando danos à vida selvagem.
          </Text>

          <Text style={styles.text}>
            A reciclagem de plástico reduz a extração de matéria-prima e a quantidade de resíduos enviados para aterros sanitários.
          </Text>
        </Card>
      </View>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
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
    backgroundColor: '#E53935'
  },
});
