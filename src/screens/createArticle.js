import { StyleSheet, Text, View, Image } from 'react-native';

export default function CreateArticle() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/Logo.png")} />
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
});