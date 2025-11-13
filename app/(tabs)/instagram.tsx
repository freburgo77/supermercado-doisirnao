
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import {router} from 'expo-router';

export default function Instagram(){
    return(
        <View style={styles.container}>
		<Text> Instagram </Text>,
        <TouchableOpacity
            style={{backgroundColor: '#f00', padding:10, borderRadius:10}}
            onPress={()=> router.push('detalhesinstagram')}
            >
          <Text>DetalhesInstagram</Text>
        </TouchableOpacity>


        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    }
});


