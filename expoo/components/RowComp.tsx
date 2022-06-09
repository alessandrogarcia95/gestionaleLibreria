import axios from 'axios';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { libro } from '../interfaces/libro';

interface Props {
    libro:libro
}

export const RowComp = (props:Props) => {

    return (
        <>
            {/* <tr key={props.libro.id}>
                <td>{props.libro.titolo}</td>
                <td>{props.libro.autore}</td>
                <td>{props.libro.descrizione}</td>
            </tr> */}
            <View key={props.libro.id} style={styles.boxed}>

                <View>
                    <Text style={styles.title}>
                        {props.libro.titolo}
                    </Text>
                </View>

                <View>
                    <Text style={styles.autore}>
                        {props.libro.autore}
                    </Text>
                </View>

                <View>
                    <Text style={styles.descrizione}>
                        {props.libro.descrizione}
                    </Text>
                </View>

            </View>

        </>
    )
}

const styles = StyleSheet.create({

    boxed: {
        padding: 36,
        backgroundColor: "#ffffffee",
        marginVertical: 16,
        borderRadius:20,
        elevation:6
        
    },

    title: {
        fontSize: 26,
        fontWeight:"bold",
        color:"#000"
    },

    autore: {
        fontSize: 20,
        marginBottom: 14,
        fontStyle:"italic",
        color:"#000"

    },

    descrizione: {
        fontSize:18,
        color:"#000"

    }


})