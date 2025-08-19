import { NextResponse } from 'next/server';
import React from 'react';
import { renderToStream } from '@react-pdf/renderer';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import { fishData, Fish } from '../../../data/fish';
import fs from 'fs';
import path from 'path';

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
    width: 300,
    height: 300,
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

const FishPdfDocument = () => (
  <Document>
    {fishData.map((fish: Fish) => {
      const imagePath = path.join(process.cwd(), 'public', fish.image);
      const imageBuffer = fs.readFileSync(imagePath);
      const imageSrc = `data:image/png;base64,${imageBuffer.toString('base64')}`;

      return (
        <Page size="A4" style={styles.page} key={fish.slug}>
          <View style={styles.section}>
            <Text style={styles.header}>{fish.name}</Text>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <Image style={styles.image} src={imageSrc} />
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
      );
    })}
  </Document>
);


export async function GET() {
  const stream = await renderToStream(<FishPdfDocument />);

  const headers = new Headers({
    'Content-Type': 'application/pdf',
    'Content-Disposition': 'attachment; filename="bwca-fish.pdf"',
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return new NextResponse(stream as any, { headers });
}
