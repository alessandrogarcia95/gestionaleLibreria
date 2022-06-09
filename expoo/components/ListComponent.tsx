import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { RowComp } from './RowComp';

export const ListComponent = () => {

    const [elenco, setElenco] = useState<any[]>([]);

    useEffect(() => {
        axios.get('http://192.168.102.208:4000/libreria/lista').then((risultato) => {
            setElenco(risultato.data);
        })
    }, [elenco]);

    return (
        <>
            <ScrollView style={styles.bg}>
                
            
                {elenco?.map(
                            (elemento, indice) => <RowComp libro={elemento} key={indice}></RowComp>
                        )}
            </ScrollView>
        </>
    )

}

const styles = StyleSheet.create({

    bg:{
        paddingTop: 20,
        backgroundColor:"#138B83",
        paddingHorizontal:10,

    },


})