import React from "react";
import { View, Text, StyleSheet } from "react-native";
 

class NavBar extends React.Component{

    render(){

        return(
            <View style={styles.Nav}>
                <Text style={styles.testo}>Libreria</Text>
            </View>
        )

    }

}

const styles = StyleSheet.create({

    Nav:{
        padding: 20,
        paddingTop: 60,
        width: "100%",
        top: 0,
        backgroundColor:"#0d6660",  
        
    },

    testo:{
        fontSize: 58,
        color:"#fff",
        textAlign:"center",
        fontWeight: "300"
    }


})

export default NavBar;