
import React, {useState, useRef } from 'react';

import {
    SafeAreaView,
    StyleSheet,
    View,
    TouchableOpacity,
    Text
} from 'react-native';

// import {Colors} from 'react-native/Libraries/NewAppScreen';
import PhoneInput from 'react-native-phone-number-input';


export default function PhoneNumberInput({navigation}){
    const [value, setValue] = useState("");
    const [formatedValue, setFormatedValue] = useState("");

    return(
        <View style = {styles.container}>
            <PhoneInput 
                defaultValue= {value}
                defaultCode = 'US'
                onChangeText = {(val)=> setValue(val)}
                onChangeFormattedText ={(val)=> setFormatedValue(val)}
                
                containerStyle = {{
                 
                   
                }}

                textInputStyle = {{
                 
                }}

                countryPickerButtonStyle= {{
                   
                }}
                flagButtonStyle = {{
                   
                }}
            />

         
        </View>
    )
}


const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    },  
    input : {
        width : 100
    }
})