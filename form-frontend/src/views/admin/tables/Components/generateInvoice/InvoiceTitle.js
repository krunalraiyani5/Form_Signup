import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    titleContainer: {
        marginTop: 24,
    },
    reportTitle: {
        color: '#3778C2',
        letterSpacing: 4,
        fontSize: 25,
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    subTitle:{
        display:'flex',
        justifyContent: 'center',
        margin: 'auto'
    }
});

const InvoiceTitle = ({ title }) => (
    <View style={styles.titleContainer}>
        <Text style={styles.reportTitle}>{title}</Text>
        <Text style={styles.subTitle}>is proudly presented to</Text>
    </View>
);

export default InvoiceTitle;