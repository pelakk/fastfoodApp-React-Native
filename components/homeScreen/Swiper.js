import React, { useState } from "react";
import { StyleSheet, ScrollView, View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';
import AppLoading from "expo-app-loading";

const Swiper = () => {

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
        <View style={styles.swiperWrapper}>
            <Text style={styles.text}>Combo meals</Text>
            <ScrollView horizontal style={styles.swiperWrapper}>
                <LinearGradient style={styles.swiperFirstItem}
                    start={{x: 0, y: 0}} 
                    end={{x: 1, y: 1}} 
                    colors={['#FFBA62', '#FF4448']} 
                >
                    <Image style={{width: 70, height: 60}} source={require("../../assets/images/combo1.png")} />
                </LinearGradient>
                <LinearGradient style={styles.swiperItem}
                    start={{x: 0, y: 0}} 
                    end={{x: 1, y: 1}} 
                    colors={['#FFBA62', '#FF4448']} 
                >
                    <Image style={{width: 70, height: 60}} source={require("../../assets/images/combo2.png")} />
                </LinearGradient>
                <LinearGradient style={styles.swiperItem}
                    start={{x: 0, y: 0}} 
                    end={{x: 1, y: 1}} 
                    colors={['#FFBA62', '#FF4448']} 
                >
                    <Image style={{width: 80, height: 60}} source={require("../../assets/images/combo3.png")} />
                </LinearGradient>
                <LinearGradient style={styles.swiperLastItem}
                    start={{x: 0, y: 0}} 
                    end={{x: 1, y: 1}} 
                    colors={['#FFBA62', '#FF4448']} 
                >
                    <Image style={{width: 70, height: 60}} source={require("../../assets/images/combo2.png")} />
                </LinearGradient>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    swiperWrapper: {
        marginBottom: 30
    },
    swiperFirstItem:{
        width: 90, 
        height: 90, 
        borderRadius: 45, 
        backgroundColor:'red', 
        marginHorizontal: 15,
        marginLeft: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    swiperLastItem:{
        width: 90, 
        height: 90, 
        borderRadius: 45, 
        backgroundColor:'red', 
        marginHorizontal: 15,
        marginRight: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    swiperItem: {
        width: 90, 
        height: 90, 
        borderRadius: 45, 
        backgroundColor:'red', 
        marginHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 16,
        fontFamily: 'Rounded-Medium',
        paddingLeft: 15,
        marginBottom: 10
    }
});

export default Swiper;
