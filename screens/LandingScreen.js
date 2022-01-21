import React, { useState } from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { startIllustration } from "../constants/images";
import * as Font from 'expo-font';
import AppLoading from "expo-app-loading";


const LoadingScreen = ({navigation}) => {

    const onPressHandler = () => {
        navigation.navigate('Main')
    }

    const fetchFont = () => {
      return Font.loadAsync({
        "Rounded-Bold": require("../assets/fonts/Rounded-Bold.ttf")
      })
    }

    const [fontLoaded, setFontLoadedStatus] = useState(false)
  
    if (!fontLoaded) {
      return <AppLoading 
                startAsync={fetchFont} 
                onFinish={() => {setFontLoadedStatus(true)}} 
                onError={() => {console.log('Error loading font')}} 
              />
    }

    return (
        <LinearGradient style={{width: '100%', height: '100%'}} 
                      start={{x: 0, y: 0}} 
                      end={{x: 1, y: 1}} 
                      colors={['#FFBA62', '#FF4448']} >
        
            <View style={styles.header}>
                <Text style={styles.text} >Food for</Text>
                <Text style={styles.text} >Everyone</Text>
            </View>

            <View style={styles.imgContainer}>
                <Image style={{width: 300, height: 300}} source={startIllustration} />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.btn} onPress={onPressHandler} >
                    <Text style={styles.btnText} >Get started</Text>
                </TouchableOpacity>
            </View>
                
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    header: {
      width: '100%',
      height: '33%',
      justifyContent: 'center',
      paddingLeft: 30
    },
    text: {
      color: 'white', 
      fontSize: 44, 
      lineHeight: 44,
      fontFamily: 'Rounded-Bold'
    },
    imgContainer: {
      width: '100%',
      height: '40%',
      alignItems: 'center',
      justifyContent: 'center'
    },
    buttonContainer: {
      width: '100%',
      height: '26%',
      alignItems: 'center',
      justifyContent: 'center'
    },
    btn: {
      backgroundColor: 'white',
      borderRadius: 50,
      width: 250,
      height: 54,
      justifyContent: 'center'
    },
    btnText: {
      color: '#FF460A',
      fontSize: 20,
      textAlign: 'center'
    }
});

export default LoadingScreen;