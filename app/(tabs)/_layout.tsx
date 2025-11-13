import {Tabs} from 'expo-router';
import Feather from '@expo/vector-icons/Feather';

export default function RootLayoutTabs(){
    return(
        <Tabs screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#f00',
            tabBarInactiveTintColor: 'c1c1c1',
            tabBarActiveBackgroundColor: 'rgban (251,203,203,1)',
            tabBarInactiveBackgroundColor: '#fff'
        }}>
            <Tabs.Screen name='index'  options={{
                title:'Home',
                tabBarIcon: (({color})=> <Feather name="home" size={24} color={color}/> )
            }}/>,
            <Tabs.Screen name='instragram' />
            <Tabs.Screen name='login' />
        </Tabs>


    );
}
