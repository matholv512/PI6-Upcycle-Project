import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Card } from "react-native-elements";

export default function Batteries() {
  return (
    <View style={styles.container}>
      <View>
        <Card containerStyle={[styles.card]}>
          <Text style={styles.text}>
            Pilhas e baterias contêm materiais tóxicos e metais pesados, como mercúrio, chumbo e cádmio, que podem ser prejudiciais ao meio ambiente se descartados incorretamente. Portanto, requerem cuidado especial no descarte e reciclagem.
          </Text>
        </Card>

        <Card containerStyle={[styles.card]}>
          <Text style={styles.textTitle}>Como descartar Pilhas e Baterias</Text>
          <Text style={styles.text}>
            1 - Não descarte pilhas e baterias no lixo comum.
          </Text>

          <Text style={styles.text}>
            2 - Procure pontos de coleta específicos para pilhas e baterias na sua região.
          </Text>

          <Text style={styles.text}>
            3 - Muitos estabelecimentos comerciais, como supermercados e lojas de eletrônicos, possuem recipientes de coleta para pilhas e baterias.
          </Text>

          <Text style={styles.text}>
            4 - Se possível, opte por pilhas recarregáveis, que reduzem a quantidade de resíduos gerados.
          </Text>
        </Card>

        <Card containerStyle={[styles.card]}>
          <Text style={styles.textTitle}>Impactos</Text>
          <Text style={styles.text}>
            A reciclagem de pilhas e baterias evita a contaminação do solo e da água por metais pesados.
          </Text>

          <Text style={styles.text}>
            Além disso, permite a recuperação de materiais valiosos presentes nas pilhas e baterias, como metais e componentes químicos.
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
    backgroundColor: '#FF5722'
  },
});
