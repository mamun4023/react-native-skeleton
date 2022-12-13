import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './screens/home';
import Login from './screens/login';
import Signup from './screens/signup';
import OPT from './screens/otp'

const Stack = createNativeStackNavigator();

export default function StackNavigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator 
              initialRouteName='home'
              screenOptions={{
                header : ()=> null
              }}
            >
                <Stack.Screen name='home' component={Home}  />
                <Stack.Screen name='login' component={Login} />
                <Stack.Screen name='signup' component={Signup} />
                <Stack.Screen name='opt_screen' component={OPT} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}