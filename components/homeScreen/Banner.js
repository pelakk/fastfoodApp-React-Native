import React, { useState } from "react";
import { StyleSheet, View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { burger } from "../../constants/images";
import * as Font from 'expo-font';
import AppLoading from "expo-app-loading";

const Banner = () => { 

    const fetchFont = () => {
        return Font.loadAsync({
          "Rounded-Medium": require("../../assets/fonts/Rounded-Medium.ttf")
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
        <View style={{alignItems: 'center', marginBottom: 30}}>
            <LinearGradient style={styles.container} 
                start={{x: 0, y: 0}} 
                end={{x: 1, y: 1}} 
                colors={['#FFBA62', '#FF4448']} 
            >
                <View style={styles.columnLeft}>
                    <View>
                        <Text style={styles.textTtop}>Burgir Kingu</Text>
                        <Text style={styles.textBottom}>€ 16,00</Text>
                    </View>
                </View>
                <View style={styles.columnRight}>
                    <Image style={{width: 92, height: 80}} source={burger} />
                </View>
            </LinearGradient>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%', 
        height: 100, 
        borderRadius: 10,
        flexDirection: 'row'
    },
    columnLeft: {
        flex: 1.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    columnRight: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textTtop: {
        fontFamily: 'Rounded-Medium',
        color: '#fff',
        fontSize: 28,
        lineHeight: 30
    },
    textBottom: {
        fontFamily: 'Rounded-Medium',
        color: '#fff',
        fontSize: 22,
        lineHeight: 30
    }
});

export default Banner;