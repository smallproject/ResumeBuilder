import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: { padding: 30 },
    section: { marginBottom: 10 },
    heading: { fontSize: 18, marginBottom: 5 },
    text: { fontSize: 12 },
});

const MyDocument = () => (
    <Document>
        <Page style={styles.page}>
            <View style={styles.section}>
                <Text style={styles.heading}>Resume</Text>
                <Text style={styles.text}>Name: Jasper Aurelio</Text>
                <Text style={styles.text}>Skills: Java, AWS, C#, React</Text>
            </View>
        </Page>
    </Document>
);

const PDFCreator = () => (
    <div>
        <PDFDownloadLink document={<MyDocument />} fileName="resume.pdf">
            {({ loading }) => (loading ? 'Generating PDF...' : 'Download Resume')}
        </PDFDownloadLink>
    </div>
);

export default PDFCreator;
