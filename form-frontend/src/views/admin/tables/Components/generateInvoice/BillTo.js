import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 36,
        justifyContent: 'flex-start',
        width: '100%'
    },
    billTo: {
        marginTop: 20,
        paddingBottom: 3,
        fontFamily: 'Helvetica-Oblique'
    },
    details:{
        marginTop: 20,
       },

       director:{

        justifyContent: 'flex-end',
       },



});

const BillTo = ({ invoice }) => (
    <View style={styles.headerContainer}>

        <Text>
            This is in reference to the application made by you for enrolling yourself to act as Point of Sales
            Person.
        </Text>
        <Text >
            This is to confirm that you have successfully completed the prescribed training and have also
            passed the examination specified for Point of Sales examination conducted by Analah Insurance
            Broking Services Ltd. under the Guidelines on Point of Sales Person for Life, Non-Life & Health
            Insurers.
        </Text>
        {/* <Text style={styles.details}>Your personal details are as under:</Text>
        <Text >POSP Identification Number :{invoice}</Text>
        <Text>POSP Category: Composite</Text> */}
        <Text style={styles.details}>

        This certificate authorizes you to act as Point of Sales Person for Analah Insurance Broking
Services Ltd. only.

        </Text>

        <Text>
        ln case you wish to work for another company, you are required to obtain a fresh letter from the
new insurer/ insurance intermediary in order to act as Point of Sales Person for that entity.


        </Text>

        <Text>
        Thanking you,
        </Text>

        <Text>
        For, Analah Insurance Broking Services Ltd.
        </Text>

        



    </View>
);

export default BillTo;