import { StyleSheet, Text, View, Image } from 'react-native';

export default function Account() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/Logo.png')}/>
      <Text style={styles.textTitle}>Login</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 8
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    marginBottom: 10
  },
  cardText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "green"
  },
});