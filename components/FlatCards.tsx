/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.cards, styles.cardone]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.cards, styles.cardtwo]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.cards, styles.cardthree]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.cards, styles.cardone]}>
          <Text>Redd</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },
  cards: {
    flex: 1,
    width: 100,
    height: 100,
    borderRadius: 8,
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardone: {
    backgroundColor: '#ef5354',
  },
  cardtwo: {
    backgroundColor: '#5da3fa',
  },
  cardthree: {
    backgroundColor: '#50bbb4',
  },
});
