import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Card } from "react-native-elements";

export default function Cardboard() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Card containerStyle={[styles.card]}>
          <Text style={styles.mainTitle}>Papelão</Text>
          <Text style={styles.text}>
            O papelão é um material versátil frequentemente utilizado em
            embalagens.
          </Text>
        </Card>

        <Card containerStyle={[styles.card]}>
          <Text style={styles.textTitle}>Como descartar Papelão:</Text>
          <Text style={styles.text}>
            1 - Desmonte as caixas de papelão antes de descartar.
          </Text>

          <Text style={styles.text}>
            2 - Remova fitas adesivas e qualquer material não papeloide.
          </Text>

          <Text style={styles.text}>
            3 - Descarte em recipientes de coleta seletiva ou postos de
            reciclagem.
          </Text>
        </Card>

        <Card containerStyle={[styles.card]}>
          <Text style={styles.textTitle}>Impactos:</Text>
          <Text style={styles.text}>
            A reciclagem de papelão reduz a necessidade de cortar mais árvores.
          </Text>

          <Text style={styles.text}>
            Diminui o volume de resíduos em aterros sanitários.
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