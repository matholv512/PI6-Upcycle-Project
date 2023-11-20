import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Card } from "react-native-elements";

export default function Biological() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Card containerStyle={[styles.card]}>
          <Text style={styles.mainTitle}>Biodegradáveis</Text>
          <Text style={styles.text}>
            Materiais biodegradáveis são compostos por substâncias que podem
            se decompor naturalmente.
          </Text>
        </Card>

        <Card containerStyle={[styles.card]}>
          <Text style={styles.textTitle}>Como descartar Biodegradáveis:</Text>
          <Text style={styles.text}>
            1 - Separe os materiais biodegradáveis em um recipiente adequado.
          </Text>

          <Text style={styles.text}>
            2 - Evite misturar materiais não biodegradáveis no recipiente.
          </Text>

          <Text style={styles.text}>
            3 - Certifique-se de que os produtos biodegradáveis estão livres de
            contaminantes.
          </Text>

          <Text style={styles.text}>
            4 - Prefira métodos de compostagem para facilitar a decomposição.
          </Text>
        </Card>

        <Card containerStyle={[styles.card]}>
          <Text style={styles.textTitle}>Impactos:</Text>
          <Text style={styles.text}>
            Contribui para a redução da quantidade de resíduos nos aterros
            sanitários.
          </Text>

          <Text style={styles.text}>
            A decomposição natural ajuda a minimizar o impacto ambiental.
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
  