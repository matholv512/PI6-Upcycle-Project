import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/Logo.png")} />
      <TextInput style={styles.inputSearch}
        placeholder="Pesquisar"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logo: {
    width: 70,
    height: 70,
    marginBottom: 10,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "green",
  },
  inputSearch: {
    paddingLeft: 5,
    alignItems: 'center',
    color: '#0000',
    fontSize: 20,
  }
});