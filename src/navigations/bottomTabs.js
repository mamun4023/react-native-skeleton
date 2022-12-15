import {} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


import Feed from '../screens/feed';
import Message from '../screens/message';
import GiveAway from '../screens/giveaway';
import Profile from '../screens/profile';

import Icon  from 'react-native-vector-icons/FontAwesome5';

const Tabs = createBottomTabNavigator();

export default function Dasboard(){
    return(
        <Tabs.Navigator
            screenOptions={{
                // tabBarActiveBackgroundColor : 'red'
                // tabBarInactiveBackgroundColor : 'gray'
                tabBarActiveTintColor : 'coral'
            
            }}
        >
            <Tabs.Screen 
                name='feed' 
                component={Feed} 
                options = {{
                    tabBarIcon : ()=> <Icon name= "home" size={30} />
                }}
            />
            <Tabs.Screen 
                name='message' 
                component={Message} 
                options = {{
                    tabBarIcon : ()=> <Icon name= "rocketchat" size={30} />
                }}
            />
            <Tabs.Screen 
                name='giveaway' 
                component={GiveAway} 
                options = {{
                    tabBarIcon : ()=> {
                       return <Icon name= "gift" size={30} />
                    }
                }}
            />
            <Tabs.Screen 
                name='profile' 
                component={Profile} 
                options = {{
                    tabBarIcon : ()=> <Icon name= "user" size={30} />
                }}
            />
        </Tabs.Navigator>
    )
}