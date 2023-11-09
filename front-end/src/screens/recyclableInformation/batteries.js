import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Card } from "react-native-elements";

export default function Batteries() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Card containerStyle={[styles.card]}>
          <Text style={styles.mainTitle}>Pilhas e baterias</Text>
          <Text style={styles.text}>
            Pilhas e baterias contêm materiais tóxicos e metais pesados, como
            mercúrio, chumbo e cádmio, que podem ser prejudiciais ao meio
            ambiente se descartados incorretamente. Portanto, requerem cuidado
            especial no descarte e reciclagem.
          </Text>
        </Card>

        <Card containerStyle={[styles.card]}>
          <Text style={styles.textTitle}>
            Como descartar Pilhas e Baterias:
          </Text>
          <Text style={styles.text}>
            1 - Não descarte pilhas e baterias no lixo comum.
          </Text>

          <Text style={styles.text}>
            2 - Procure pontos de coleta específicos para pilhas e baterias na
            sua região.
          </Text>

          <Text style={styles.text}>
            3 - Muitos estabelecimentos comerciais, como supermercados e lojas
            de eletrônicos, possuem recipientes de coleta para pilhas e
            baterias.
          </Text>

          <Text style={styles.text}>
            4 - Se possível, opte por pilhas recarregáveis, que reduzem a
            quantidade de resíduos gerados.
          </Text>
        </Card>

        <Card containerStyle={[styles.card]}>
          <Text style={styles.textTitle}>Impactos:</Text>
          <Text style={styles.text}>
            A reciclagem de pilhas e baterias evita a contaminação do solo e da
            água por metais pesados.
          </Text>

          <Text style={styles.text}>
            Além disso, permite a recuperação de materiais valiosos presentes
            nas pilhas e baterias, como metais e componentes químicos.
          </Text>
        </Card>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9f9f9",
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
