import { Stack } from 'expo-router';

export default function RootLayout(){
    return(
        <Stack screenOptions={{title: 'App 2EMC'}}>
            <Stack.Screen name='index' />
        </Stack>
    );
}