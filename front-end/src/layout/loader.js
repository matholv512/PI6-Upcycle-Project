import React from 'react';
import { View, StyleSheet, ActivityIndicator, Dimensions } from 'react-native';

const Loader = () => {
  const { height } = Dimensions.get('window');

  return (
    <View style={[styles.loaderContainer, { height: height }]}>
      <ActivityIndicator size="large" color="green" />
    </View>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loader;
