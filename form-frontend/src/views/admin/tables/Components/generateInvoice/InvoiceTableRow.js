import React, { Fragment } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#3778C2'
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        borderBottomColor: '#3778C2',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 24,
        fontStyle: 'bold',
    },
    description: {
        width: '50%',
        textAlign: 'left',
       
       
        paddingLeft: 8,
    },
    qty: {
        width: '50%',
       
        textAlign: 'right',
        paddingRight: 8,
    },
    rate: {
        width: '15%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'right',
        paddingRight: 8,
    },
    amount: {
        width: '15%',
        textAlign: 'right',
        paddingRight: 8,
    },
});

const InvoiceTableRow = ({ items }) => {

    const date = localStorage.getItem('date');

    
    return (

        <View style={styles.row}>

        <Text style={styles.description}>Date: {date}</Text>
        <Text style={styles.qty}>Director & Principal Officer</Text>
         </View>
    )
};

export default InvoiceTableRow;