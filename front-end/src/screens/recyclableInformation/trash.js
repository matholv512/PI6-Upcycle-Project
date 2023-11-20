import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Card } from "react-native-elements";

export default function Trash() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Card containerStyle={[styles.card]}>
          <Text style={styles.mainTitle}>Resíduos</Text>
          <Text style={styles.text}>
            Adequado descarte de resíduos é essencial para a preservação do
            meio ambiente.
          </Text>
        </Card>

        <Card containerStyle={[styles.card]}>
          <Text style={styles.textTitle}>Como descartar Resíduos:</Text>
          <Text style={styles.text}>
            1 - Separe os resíduos de acordo com as diretrizes locais.
          </Text>

          <Text style={styles.text}>
            2 - Utilize sacolas adequadas para diferentes tipos de resíduos.
          </Text>

          <Text style={styles.text}>
            3 - Conheça os locais de coleta seletiva e descarte corretamente.
          </Text>
        </Card>

        <Card containerStyle={[styles.card]}>
          <Text style={styles.textTitle}>Impactos:</Text>
          <Text style={styles.text}>
            O descarte adequado de resíduos contribui para a saúde ambiental.
          </Text>

          <Text style={styles.text}>
            A reciclagem reduz a quantidade de resíduos enviados para aterros
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