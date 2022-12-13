
import { View, Text } from "react-native"

export default function Lebel({title, color}){
    return(
        <View style = {{
            margin : 10
        }}>
            <Text 
                style = {{
                    color : color,
                    fontFamily : 'Brandan_bld',
                    fontSize : 15
                }} 
            > 
                {title} 
            </Text>
        </View>
    )
}

