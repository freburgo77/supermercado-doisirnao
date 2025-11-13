import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Link, router } from 'expo-router';

export default function detalhesinstagram(){
    return(
        <View style={styles.container}>
            <Text style={styles.h1}>Essa tela aparece quando estou no Instagram</Text>

            {/* <Link href={'/login'} asChild>
                <TouchableOpacity 
                    style={styles.botao}
                >
                    <Text style={styles.textoBotao}>Navegar para Login</Text>
                </TouchableOpacity>
            </Link> */}

            <TouchableOpacity
                onPress={()=>router.navigate('(tabs)')}
                style={styles.botao}
            >
                <Text style={styles.textoBotao}>Navegar para Tabs</Text>
            </TouchableOpacity>
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