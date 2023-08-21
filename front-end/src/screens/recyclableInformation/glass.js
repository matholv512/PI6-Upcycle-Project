import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Card } from "react-native-elements";

export default function Glass() {
  return (
    <View style={styles.container}>
      <View>
        <Card containerStyle={[styles.card]}>
          <Text style={styles.text}>
            O vidro é um material reciclável infinitamente, sem perder suas propriedades. Garrafas, frascos e embalagens de vidro podem ser reciclados para produzir novos produtos de vidro.
          </Text>
        </Card>

        <Card containerStyle={[styles.card]}>
          <Text style={styles.textTitle}>Como descartar Vidro</Text>
          <Text style={styles.text}>
            1 - Separe o vidro dos demais resíduos.
          </Text>

          <Text style={styles.text}>
            2 - Remova tampas e rótulos das embalagens de vidro.
          </Text>

          <Text style={styles.text}>
            3 - Descarte o vidro nos recipientes de coleta seletiva de vidro da sua região.
          </Text>

          <Text style={styles.text}>
            4 - Tome cuidado para não quebrar o vidro ao descartá-lo.
          </Text>
        </Card>

        <Card containerStyle={[styles.card]}>
          <Text style={styles.textTitle}>Impactos</Text>
          <Text style={styles.text}>
            A reciclagem de vidro economiza energia, reduz a extração de matérias-primas e evita o acúmulo de resíduos em aterros sanitários.
          </Text>

          <Text style={styles.text}>
            Além disso, o vidro reciclado pode ser usado na fabricação de novas embalagens, reduzindo a demanda por vidro virgem.
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
    backgroundColor: '#4CAF50'
  },
});
