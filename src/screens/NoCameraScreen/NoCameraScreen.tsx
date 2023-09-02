import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function NoCameraScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your device does not have a camera.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default NoCameraScreen;
