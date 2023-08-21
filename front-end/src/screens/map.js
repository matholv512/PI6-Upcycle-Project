import { StyleSheet, Text, View, Image } from 'react-native';

export default function Map() {
  return (
    <View style={styles.container}>
      <Image style={styles.Image} source={require('../../assets/Logo.png')}/>
      <Text style={styles.textTitle}>Em breve!</Text>
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
  Image: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  textTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
});