import React from "react";
import { View, Text, StyleSheet, Touchable, TouchableOpacity } from "react-native";
 

class AddButton extends React.Component{

    render(){

        return(
            <View style={styles.container}>
                <TouchableOpacity  activeOpacity={0.9} style={styles.AddButton}>
                    <Text style={styles.Text}>+</Text>
                </TouchableOpacity>
            </View>
        )

    }

}

const styles = StyleSheet.create({

    container:{
        width: "100%",
    },

    AddButton:{
        backgroundColor:"#E7625F",
        height:90,
        width:90,
        borderRadius: 100,
        alignItems:"center",
        justifyContent: 'center',
        position: "absolute",
        bottom:26,
        end: 20,
        elevation: 5,
        shadowColor:"#000",
        shadowOffset:{width: -1, height: 2},
        
    },

    Text: {
        fontSize: 40,
        color: "#fff",
        position:"relative",
        top:-2
    }


})

export default AddButton;