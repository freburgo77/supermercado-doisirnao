import '@expo/metro-runtime'
import { useState } from 'react';
import { ScrollView, ImageBackground, Image, Alert, StyleSheet, Text, View, TextInput } from 'react-native';

export default function Login() {
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [confirmar, setConfirmar] = useState<string>('');

    const [exibir, setExibir] = useState<boolean>(false);

    function mostrarMensagem() {
        alert('Clicou');
    }

    return (
        <ScrollView>
            <ImageBackground
                source={{ uri: 'https://st.depositphotos.com/1897095/1642/i/450/depositphotos_16421123-stock-illustration-blue-grunge-vignette.jpg' }}
                style={styles.container}>

                <View style={{ display: 'flex', flexDirection: 'row', width: '100%', height: 100, backgroundColor: '#f00' }}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <Text style={{ fontSize: 70 }}>🥐</Text>
                        <Text style={{ fontSize: 70 }}>🥐</Text>
                        <Text style={{ fontSize: 70 }}>🥐</Text>
                        <Text style={{ fontSize: 70 }}>🥐</Text>
                        <Text style={{ fontSize: 70 }}>🥐</Text>
                        <Text style={{ fontSize: 70 }}>🥐</Text>
                        <Text style={{ fontSize: 70 }}>🥐</Text>
                        <Text style={{ fontSize: 70 }}>🥐</Text>
                    </ScrollView>
                </View>

                {/* Imagem do projeto */}
                

                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    placeholderTextColor='#8790e4ff'
                    onChangeText={setEmail}
                    value={email}
                />

                <View style={styles.divInput}>
                    <TextInput
                        style={styles.inputSenha}
                        placeholder='Senha'
                        placeholderTextColor='#8790e4ff'
                        onChangeText={setSenha}
                        value={senha}
                        secureTextEntry={exibir ? false : true}
                    />
                    <Text onPress={() => setExibir(!exibir)} style={styles.icon}>{exibir ? '🙉' : '🙈'}</Text>
                </View>

                <View style={styles.divInput}>
                    <TextInput
                        style={styles.inputSenha}
                        placeholder='Confirmar Senha'
                        placeholderTextColor='#8790e4ff'
                        onChangeText={setConfirmar}
                        value={confirmar}
                        secureTextEntry={exibir ? false : true}
                    />
                    <Text onPress={() => setExibir(!exibir)} style={styles.icon}>{exibir ? '🙉' : '🙈'}</Text>
                </View>

                {senha != confirmar && senha != '' && confirmar != '' && <Text style={{ color: '#f00' }}>Senhas não conferem</Text>}

                <Text style={styles.texto}>
                    Primeiro acesso? <Text onPress={() => alert('Novo texto')} style={styles.textoNegrito}>Cadastre-se</Text>
                </Text>
            </ImageBackground>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0d194a',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },

    texto: {
        color: '#fff',
        fontSize: 25
    },

    textoNegrito: {
        fontWeight: 'bold'
    },

    input: {
        borderWidth: 2,
        borderColor: '#edaf1f',
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontSize: 25,
        color: '#fff',
        borderRadius: 10,
        width: '100%',
        outlineWidth: 0
    },

    inputSenha: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontSize: 25,
        color: '#fff',
        width: '85%',
        outlineWidth: 0
    },

    divInput: {
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#edaf1f',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    icon: {
        fontSize: 30
    }

});