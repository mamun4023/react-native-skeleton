import {View, StyleSheet, Image, Text} from 'react-native';

import Home from './screens/home';

export default function App(){
  return(
    <View style = {styles.container} >
      <Home/>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1
  }
})