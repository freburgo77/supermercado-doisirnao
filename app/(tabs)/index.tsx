import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Link, router } from 'expo-router';

export default function Index(){
    return(
        <View style={styles.container}>
            <Text style={styles.h1}>TELA INDEX TABS</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e6e6e6ff',
        gap: 10
    },

    h1:{
        fontSize: 30,
        color: '#000'
    },

    botao:{
        backgroundColor: '#1ecee5ff',
        borderRadius: 10,
        padding: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },

    textoBotao:{
        fontSize:20,
        color: '#fff'
    }
});