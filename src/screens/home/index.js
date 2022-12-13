import { View, Text, StyleSheet, ImageBackground, StatusBar} from 'react-native'

import Button from '../../components/button'
import Logo from '../../components/logo';
import Icon from '../../components/Icon';
import Lebel from '../../components/lebel';

export default function Home({navigation}){
    return(
        <ImageBackground 
            source={require("../../../assets/images/green.jpeg")}
            style = {styles.container}
        > 
            <StatusBar translucent ={false} />
           <View> 
                <Logo       
                    width= {200}
                    height= {200}
                />
           </View>
            <View style = {styles.btn}> 
                <Button 
                    title= "Login" 
                    onPress={()=>navigation.navigate('login')}
                />
            </View>
            <View style = {styles.btn}> 
                <Button 
                    title= "Sign Up" 
                    onPress={()=>navigation.navigate('signup')}
                />
            </View>

            <View style = {styles.socialIconContainer}>

                <Icon 
                    name='facebook' 
                    color = "white"
                    url='https://www.facebook.com'
                    style = {styles.icon}    
                />
                <Icon 
                    name='tiktok' 
                    size={30}  
                    color = "white" 
                    url ='https://www.tiktok.com'
                    style = {styles.icon}  
                />
                <Icon 
                    name='snapchat-ghost' 
                    size={30} 
                    color = "white" 
                    url = 'https://www.snapchat.com'
                    style = {styles.icon}  
                />
                <Icon 
                    name='youtube' 
                    size={30}  
                    color = "white"
                    url ='https://www.youtube.com'
                    style = {styles.icon}  
                />
                <Icon 
                    name='instagram' 
                    size={30}  
                    color = "white"
                    url='https://www.instagram.com'
                    style = {styles.icon}   
                />
            </View>
            <Lebel 
                title= "@JatieVIP, Inc. All rights reserved."
                color= "white"
            />
            
         </ImageBackground>
      
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
        
    },
    logo : {
        width : 200,
        height : 200

    },  
    btn : {
        width : '80%',
        marginTop : 20
    },
    socialIconContainer : {
        display : 'flex',
        flexDirection : 'row',
        color : 'white',
        marginTop : 20
        
    },
    icon : {
        margin : 10,
        fontSize : 30

    },
    copyWrite : {
        color : 'white',
        padding : 10,
        marginTop : 30,
        fontSize : 16,
        fontFamily : 'Brandon_reg'
    }
})

