import {View, Text, StyleSheet} from 'react-native';


export default function GiveAway(){
    return(
        <View style = {styles.container}>
            <Text> Give away </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    }
})