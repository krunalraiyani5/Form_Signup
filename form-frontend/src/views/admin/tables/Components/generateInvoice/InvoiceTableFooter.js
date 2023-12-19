import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#3778C2'
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        
      
        alignItems: 'center',
        height: 24,
        fontSize: 12,
        fontStyle: 'bold',
        marginTop:20
    },
    description: {
        width: '80%',
        textAlign: 'right',
       
        paddingRight: 8,
    },
    total: {
        width: '15%',
        textAlign: 'right',
        paddingRight: 8,
    },
});

const InvoiceTableFooter = ({ items }) => {
    const total = items.map(item => item.qty * item.rate)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    return (
        <View style={styles.row}>
            <Text style={styles.description}>
                Email: contactus@analahinsurance.com
            </Text>
            <Text style={styles.description}>
                Website: www.analahinsurance.com
            </Text>
           
        </View>
    )
};

export default InvoiceTableFooter;