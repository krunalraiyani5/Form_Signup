import React, { Fragment } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    invoiceNoContainer: {
        flexDirection: 'row',
        marginTop: 36,
        justifyContent: 'center'
    },
    invoiceDateContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    invoiceDate: {
        fontSize: 22,
        fontStyle: 'bold',
    },
   
});
const full_name = localStorage.getItem('name');

const InvoiceNo = ({ invoice }) => (
    <Fragment>
        <View style={styles.invoiceNoContainer}>
           
            <Text style={styles.invoiceDate}>{full_name}</Text>
        </View >
      
    </Fragment>
);

export default InvoiceNo;