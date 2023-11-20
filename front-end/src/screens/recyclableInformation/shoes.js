import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Card } from "react-native-elements";

export default function Shoes() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Card containerStyle={[styles.card]}>
          <Text style={styles.mainTitle}>Calçados</Text>
          <Text style={styles.text}>
            Os calçados podem ser doados, reutilizados ou reciclados de diversas
            maneiras.
          </Text>
        </Card>

        <Card containerStyle={[styles.card]}>
          <Text style={styles.textTitle}>Como descartar Calçados:</Text>
          <Text style={styles.text}>
            1 - Considere doar calçados em bom estado para instituições de
            caridade.
          </Text>

          <Text style={styles.text}>
            2 - Se os calçados não estiverem em condições de doação, procure
            pontos de reciclagem específicos.
          </Text>

          <Text style={styles.text}>
            3 - Repense o consumo de calçados e opte por opções sustentáveis.
          </Text>
        </Card>

        <Card containerStyle={[styles.card]}>
          <Text style={styles.textTitle}>Impactos:</Text>
          <Text style={styles.text}>
            A doação de calçados ajuda aqueles que estão em situação de
            vulnerabilidade.
          </Text>

          <Text style={styles.text}>
            A reciclagem de calçados reduz a quantidade de resíduos nos aterros
            sanitários.
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