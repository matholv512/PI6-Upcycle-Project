import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Card } from "react-native-elements";

export default function NonRecyclable() {
  return (
    <View style={styles.container}>
      <View>
        <Card containerStyle={[styles.card]}>
          <Text style={styles.text}>
            Existem materiais que não são recicláveis e devem ser descartados corretamente para evitar a poluição do meio ambiente. Alguns exemplos de materiais não recicláveis incluem plásticos de uso único, papel sujo, guardanapos e papéis higiênicos usados, entre outros.
          </Text>
        </Card>

        <Card containerStyle={[styles.card]}>
          <Text style={styles.textTitle}>Como descartar Materiais Não Recicláveis</Text>
          <Text style={styles.text}>
            1 - Identifique os materiais não recicláveis que você possui.
          </Text>

          <Text style={styles.text}>
            2 - Verifique as orientações do seu município ou região sobre o descarte adequado desses materiais.
          </Text>

          <Text style={styles.text}>
            3 - Utilize os serviços de coleta regular de resíduos para descartar corretamente os materiais não recicláveis.
          </Text>

          <Text style={styles.text}>
            4 - Procure estar sempre atualizado sobre as diretrizes de descarte de resíduos na sua região.
          </Text>
        </Card>

        <Card containerStyle={[styles.card]}>
          <Text style={styles.textTitle}>Impactos</Text>
          <Text style={styles.text}>
            O descarte adequado de materiais não recicláveis evita a contaminação do meio ambiente e contribui para a preservação da natureza.
          </Text>

          <Text style={styles.text}>
            A conscientização sobre o descarte correto de resíduos não recicláveis é fundamental para reduzir a poluição e promover a sustentabilidade.
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
    backgroundColor: '#616161'
  },
});
