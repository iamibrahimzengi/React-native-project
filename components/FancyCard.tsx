/* eslint-disable prettier/prettier */
import {Image, StyleSheet, Text, View} from 'react-native';

import React from 'react';
import ElevatedCards from './ElevetedCards';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.ElevatedCards]}>
        <Image
          source={{
            uri: 'https://www.expedia.com/stories/wp-content/uploads/2021/09/Arequipa.png',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.title}>Peru</Text>
          <Text style={styles.label}>Arequipa, Peru</Text>
          <Text style={styles.description}>
            {' '}
            one glimpse of the less-famous but equally impressive archaeological
            sites in Trujillo, colonial architecture of Lima and White City of
            Arequipa will have you researching airfare within seconds.
          </Text>
          <Text style={styles.footer}>12 mins away.....</Text>
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
  card: {
    width: 370,
    height: 360,
    flex: 1,
    flexGrow: 10,
    borderRadius: 20,
    marginVertical: 12,
    marginHorizontal: 22,
  },
  ElevatedCards: {
    backgroundColor: '#ffffff',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
  },
  title: {
    color: '#000000',
  },
  label: {
    color: '#000000',
  },
  description: {
    color: '#000000',
  },
  footer: {
    color: '#000000',
  },
});
