import { View } from "react-native";
import SVGLogo from '../../assets/logo/logo.svg';

export default function Logo({height, width}){
    return(
        <View>
            <SVGLogo 
                height = {height}
                width = {width}
            />
        </View>
    )
}

