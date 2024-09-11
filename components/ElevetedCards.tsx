/* eslint-disable prettier/prettier */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal style={styles.container}>
        <View style={[styles.cards, styles.cardone]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.cards, styles.cardone]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.cards, styles.cardone]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.cards, styles.cardone]}>
          <Text>Redd</Text>
        </View>
      </ScrollView>
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
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#ef5354',
  },
  cardone: {
    backgroundColor: '#cad5e2',
  },
});
