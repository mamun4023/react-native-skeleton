import { TouchableOpacity, Text, StyleSheet} from 'react-native';
import {COLORS} from '../utils/colors';

export default function AppButton({title, onPress}){
    return(
        <TouchableOpacity onPress={onPress} style = {styles.appButtonContainer}>
            <Text style={styles.appButtonText}>{title}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    // ...
    appButtonContainer: {
      elevation: 8,
      backgroundColor: COLORS.primary_main,
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12,
      shadowColor : 'black'
    },
    appButtonText: {
      fontSize: 18,
      color: "#fff",
      // fontWeight: "bold",
      alignSelf: "center",
      fontFamily : 'Recoleta-Bold'
    }
  });

