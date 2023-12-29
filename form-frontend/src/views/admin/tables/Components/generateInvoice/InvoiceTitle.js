import React from 'react';
import { Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import logo from "../../assets/medal_pdf.png";

const styles = StyleSheet.create({
    titleContainer: {
        marginTop: 24,
    },
    reportTitle: {
        color: '#f8b64c',
        letterSpacing: 4,
        fontSize: 25,
        textAlign: 'center',
        textTransform: 'uppercase',
        // fontFamily:'serif'
    },
    subTitle:{
        display:'flex',
        justifyContent: 'center',
        margin: 'auto'
    },
    certi_logo :{
        width: '40px',
        height: '40px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '10px'
    }
});

const InvoiceTitle = ({ title }) => (
    <View style={styles.titleContainer}>
        <Image style={styles.certi_logo} src={logo}/>
        <Text style={styles.reportTitle}>{title}</Text>
        <Text style={styles.subTitle}>is proudly presented to</Text>
    </View>
);

export default InvoiceTitle;