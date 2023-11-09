import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Card } from "react-native-elements";

export default function NonRecyclable() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Card containerStyle={[styles.card]}>
          <Text style={styles.mainTitle}>Não recicláveis</Text>
          <Text style={styles.text}>
            Existem materiais que não são recicláveis e devem ser descartados
            corretamente para evitar a poluição do meio ambiente. Alguns
            exemplos de materiais não recicláveis incluem plásticos de uso
            único, papel sujo, guardanapos e papéis higiênicos usados, entre
            outros.
          </Text>
        </Card>

        <Card containerStyle={[styles.card]}>
          <Text style={styles.textTitle}>
            Como descartar Materiais Não Recicláveis:
          </Text>
          <Text style={styles.text}>
            1 - Identifique os materiais não recicláveis que você possui.
          </Text>

          <Text style={styles.text}>
            2 - Verifique as orientações do seu município ou região sobre o
            descarte adequado desses materiais.
          </Text>

          <Text style={styles.text}>
            3 - Utilize os serviços de coleta regular de resíduos para descartar
            corretamente os materiais não recicláveis.
          </Text>

          <Text style={styles.text}>
            4 - Procure estar sempre atualizado sobre as diretrizes de descarte
            de resíduos na sua região.
          </Text>
        </Card>

        <Card containerStyle={[styles.card]}>
          <Text style={styles.textTitle}>Impactos:</Text>
          <Text style={styles.text}>
            O descarte adequado de materiais não recicláveis evita a
            contaminação do meio ambiente e contribui para a preservação da
            natureza.
          </Text>

          <Text style={styles.text}>
            A conscientização sobre o descarte correto de resíduos não
            recicláveis é fundamental para reduzir a poluição e promover a
            sustentabilidade.
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
