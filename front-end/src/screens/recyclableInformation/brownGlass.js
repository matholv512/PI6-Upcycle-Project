import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Card } from "react-native-elements";

export default function BrownGlass() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Card containerStyle={[styles.card]}>
          <Text style={styles.mainTitle}>Vidro Marrom</Text>
          <Text style={styles.text}>
            O vidro marrom é geralmente usado para embalagens de alimentos.
          </Text>
        </Card>

        <Card containerStyle={[styles.card]}>
          <Text style={styles.textTitle}>Como descartar Vidro Marrom:</Text>
          <Text style={styles.text}>
            1 - Lave o vidro marrom para remover resíduos de alimentos.
          </Text>

          <Text style={styles.text}>
            2 - Separe-o dos outros tipos de vidro para facilitar a reciclagem.
          </Text>

          <Text style={styles.text}>
            3 - Descarte em recipientes de coleta seletiva de vidro.
          </Text>
        </Card>

        <Card containerStyle={[styles.card]}>
          <Text style={styles.textTitle}>Impactos:</Text>
          <Text style={styles.text}>
            A reciclagem do vidro marrom economiza recursos naturais.
          </Text>

          <Text style={styles.text}>
            Reduz a necessidade de produção de novas embalagens de vidro.
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