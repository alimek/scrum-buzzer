import React from 'react';
import ReactNative from 'react-native';

const {
  View,
  Text,
  StyleSheet
} = ReactNative;

const Player = ({ playerName }) => (
  <View style={styles.container}>
    <Text>{playerName}</Text>
  </View>
);

export default Player;

const styles = StyleSheet.create({
  container: {

  }
});