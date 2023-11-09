import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Card } from "react-native-elements";

export default function Electronics() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Card containerStyle={[styles.card]}>
          <Text style={styles.mainTitle}>Eletrônicos</Text>
          <Text style={styles.text}>
            Os equipamentos eletrônicos contêm componentes valiosos e materiais
            prejudiciais ao meio ambiente, como metais pesados e produtos
            químicos. A reciclagem de eletrônicos é essencial para evitar a
            contaminação e recuperar materiais preciosos.
          </Text>
        </Card>

        <Card containerStyle={[styles.card]}>
          <Text style={styles.textTitle}>Como descartar Eletrônicos:</Text>
          <Text style={styles.text}>
            1 - Procure pontos de coleta de eletrônicos na sua região, como
            postos de coleta ou empresas especializadas em reciclagem.
          </Text>

          <Text style={styles.text}>
            2 - Verifique se há programas de reciclagem oferecidos pelos
            fabricantes ou varejistas de eletrônicos.
          </Text>

          <Text style={styles.text}>
            3 - Antes de descartar, exclua todas as informações pessoais dos
            dispositivos eletrônicos.
          </Text>

          <Text style={styles.text}>
            4 - Evite o descarte de eletrônicos no lixo comum, pois eles podem
            conter substâncias nocivas.
          </Text>
        </Card>

        <Card containerStyle={[styles.card]}>
          <Text style={styles.textTitle}>Impactos:</Text>
          <Text style={styles.text}>
            A reciclagem de eletrônicos reduz a quantidade de resíduos
            eletrônicos em aterros sanitários e evita a contaminação do solo e
            da água por metais pesados e produtos químicos.
          </Text>

          <Text style={styles.text}>
            Além disso, permite a recuperação de materiais valiosos, como ouro,
            prata e cobre, presentes nos dispositivos eletrônicos.
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
