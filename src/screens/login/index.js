
import {View, StyleSheet, Text} from 'react-native';


export default function Login(){
    return(
        <View style = {styles.container}>
            <Text> Login </Text>
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