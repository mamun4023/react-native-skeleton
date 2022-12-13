
import {View, StyleSheet, Text} from 'react-native';
import SVGLog from '../../../assets/logo/logo.svg'
import Button from '../../components/button';

export default function OPTScreen(){
    return(
        <View style = {styles.container}>
            <View style = {styles.logo}>
                <SVGLog 
                    height = {100}
                    width = {300}
                />
            </View>
            <View>
                <Text style = {styles.headerText} > Enter OTP to Continue </Text>
                <Text style = {styles.lebel} > Please enter the verification code that was sent to </Text>
                <View style = {styles.numberBox}>
                    <Text style = {styles.phoneNumber}> +4655455544555</Text>
                    <Text style = {styles.editText}> Edit </Text>
                </View>
            </View>
            <Text style = {{ color : 'red'}} > Sorry, the code didn't match. Resend </Text>
            <View style = {styles.btn}>
                <Button 
                    title= "Continue"
                />
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : 'white',
        
        margin : 20
    },
    headerText : {
        fontSize : 40,
        fontFamily : 'Brandon_bld',
        // fontWeight : '900',
        color : 'black',
        lineHeight : 60
        
        
    },
    lebel : {
        fontFamily : 'Brandan_bld',
        color : 'black',
        
    },
    numberBox : {
        flexDirection : 'row',
        marginTop : 10
    },
    phoneNumber : {

    },
    editText : {

    },
    btn : {
        width : '80%',
        margin : 10,
    }
})