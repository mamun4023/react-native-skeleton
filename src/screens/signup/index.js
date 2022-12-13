
import {View, StyleSheet, Text} from 'react-native';


export default function Signup(){
    return(
        <View style = {styles.container}>
            <Text> Signup </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : 'white',
        alignItems : 'center',
        justifyContent : 'center'
    }
})