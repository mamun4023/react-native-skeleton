import { TouchableOpacity, Linking } from "react-native"
import FontAwsomeIcon from 'react-native-vector-icons/FontAwesome5';

export default function AppIcon({name, color, style, url }){
    return(
        <TouchableOpacity 
            onPress={()=>{Linking.openURL(url)}}
        >
             <FontAwsomeIcon 
                name= {name}
                color= {color}
                style = {style}
             />
        </TouchableOpacity>
    )
}