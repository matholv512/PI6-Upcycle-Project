import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Card } from "react-native-elements";

export default function VegetableOil() {
  return (
    <View style={styles.container}>
      <View>
        <Card containerStyle={[styles.card]}>
          <Text style={styles.text}>
            O óleo vegetal usado é altamente poluente quando descartado incorretamente. No entanto, ele pode ser reciclado e transformado em biocombustível ou utilizado na produção de sabão e outros produtos.
          </Text>
        </Card>

        <Card containerStyle={[styles.card]}>
          <Text style={styles.textTitle}>Como descartar Óleo Vegetal</Text>
          <Text style={styles.text}>
            1 - Armazene o óleo vegetal usado em recipientes vedados, como garrafas pet.
          </Text>

          <Text style={styles.text}>
            2 - Procure pontos de coleta de óleo vegetal usado na sua região, como postos de coleta ou supermercados.
          </Text>

          <Text style={styles.text}>
            3 - Despeje o óleo vegetal usado nos recipientes de coleta específicos.
          </Text>

          <Text style={styles.text}>
            4 - Evite despejar o óleo no ralo ou no lixo, pois pode causar entupimentos e poluir a água.
          </Text>
        </Card>

        <Card containerStyle={[styles.card]}>
          <Text style={styles.textTitle}>Impactos</Text>
          <Text style={styles.text}>
            A reciclagem do óleo vegetal usado evita a poluição da água e do solo, além de contribuir para a produção de biocombustível e outros produtos sustentáveis.
          </Text>

          <Text style={styles.text}>
            O descarte correto do óleo vegetal usado também ajuda a evitar problemas de saúde pública, como o entupimento de redes de esgoto.
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
    backgroundColor: '#FF9800'
  },
});
