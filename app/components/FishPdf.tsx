
import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import { fishData, Fish } from '../../data/fish';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 30,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  header: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: 'center',
  },
  image: {
    width: '60%',
    margin: 'auto',
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 18,
    marginBottom: 5,
    marginTop: 10,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
  listItem: {
    fontSize: 12,
    marginBottom: 3,
  }
});

const FishPdf = () => (
  <Document>
    {fishData.map((fish: Fish) => (
      <Page size="A4" style={styles.page} key={fish.slug}>
        <View style={styles.section}>
          <Text style={styles.header}>{fish.name}</Text>
          <Image style={styles.image} src={`/home/builder/bwcaFishApp/web/public${fish.image}`} />
          <Text style={styles.text}>{fish.description}</Text>

          <Text style={styles.subHeader}>Lures</Text>
          {fish.lures.map((lure, index) => (
            <Text key={index} style={styles.listItem}>- {lure}</Text>
          ))}

          <Text style={styles.subHeader}>Bait</Text>
          {fish.bait.map((b, index) => (
            <Text key={index} style={styles.listItem}>- {b}</Text>
          ))}

          <Text style={styles.subHeader}>Techniques</Text>
          {fish.techniques.map((technique, index) => (
            <Text key={index} style={styles.listItem}>- {technique}</Text>
          ))}
        </View>
      </Page>
    ))}
  </Document>
);

export default FishPdf;
