import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';

const Loader = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Animatable.Image
        source={require('../assets/spin.gif')}
        animation="slideInUp"
        iterationCount={1}
        style={styles.image}
      />
      <Animatable.Text animation="slideInUp" iterationCount={1} style={styles.text}>
       Loading!
      </Animatable.Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#011e31',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    alignSelf: 'center',
    height: 100,
    width: 100,
    justifyContent: 'center',
  },
  text: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
    fontSize:16,
  },
});
export default Loader;
