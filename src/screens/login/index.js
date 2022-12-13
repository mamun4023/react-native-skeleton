
import {View, StyleSheet, Text, TextInput} from 'react-native';
import SVGLogo from '../../../assets/logo/logo.svg'
import Button from '../../components/button';

export default function Login(){
    return(
        <View style = {styles.container}>
            <View style = {styles.logo}>
                <SVGLogo 
                    height = {100}
                    width = {100}
                />
            </View>
            <View>
                <Text style = {styles.headingText} > Login or Signup</Text>
                <Text style = {styles.inputLebel} > Enter Your Phone Number</Text>
            </View>
            <View>
                <TextInput 
                    style = {styles.input}
                />
            </View>
            <View>
                {/* <Text> not robut</Text> */}
            </View>
            <View style = {styles.btn}>
                <Button 
                    title='Continue' 
                    // onPress={}
                />
            </View>
            <Text  > By continuing, you are agreeing to the Temrs & Conditions and Privacy Policy</Text>



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
    },
    logo : {
        
    },
    headingText : {
        color : 'black',
        fontSize : 40,
        fontWeight : '600',
        fontFamily : 'Brandon_bld'
    },
    inputLebel : {
        color : 'black',
        fontFamily : 'Brandon_bld',
        fontWeight : '100',
        fontSize : 20,
        textAlign : 'center',
        padding : 10
    },
    input : {
        backgroundColor : '#eee',
        width : 350,
        borderRadius : 10,
        padding : 10

    },
    btn : {
        width : 350,
        marginTop : 20
    }
})