import React, {useState} from "react";
import { StyleSheet, View, Text, Image } from 'react-native';
import { icons } from "../../constants";
import * as Font from 'expo-font';
import AppLoading from "expo-app-loading";

const Header = () => {

    const fetchFont = () => {
        return Font.loadAsync({
          "Rounded-Bold": require("../../assets/fonts/Rounded-Bold.ttf")
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
        <View style={styles.container}>
            <View style={styles.column}>
                <Image 
                    source={icons.barsIcon}
                    resizeMode="contain"
                    style={{
                        width: 22,
                        height: 22
                    }} 
                />
            </View>
            <View style={styles.column}>
                <Text style={{fontFamily: 'Rounded-Bold'}}> COMPANY </Text>
            </View>
            <View style={styles.column}>
                <Image 
                    source={icons.settingsIcon}
                    resizeMode="contain"
                    style={{
                        width: 22,
                        height: 22
                    }} 
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'rgba(255, 255, 255, 0)',
      flexDirection: 'row',
      height: 60,
      marginBottom: 30
    },
    column: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
        height: 26
    }
});

export default Header;