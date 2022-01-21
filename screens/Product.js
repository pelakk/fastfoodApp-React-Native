import React, {useState} from "react";
import { StyleSheet, View, Text, Image, ImageBackground  } from 'react-native'
import Header from "../components/productScreen/Header";
import * as Font from 'expo-font';
import AppLoading from "expo-app-loading";

const Product = ({ route, navigation }) => {

    const { ItemProps } = route.params;

    const fetchFont = () => {
      return Font.loadAsync({
        "Rounded-Medium": require("../assets/fonts/Rounded-Medium.ttf"),
        "Medium": require("../assets/fonts/Medium.ttf")
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
            <ImageBackground resizeMode="stretch" style={styles.background} source={require("../assets/images/background.jpg")} />
            <View style={styles.main}>
                <Header />
                <View style={styles.content}>
                    <View style={styles.column}>
                        <View>
                            <Text style={styles.name}>{ItemProps.itemName}</Text>
                            <Text style={styles.price}>€{ItemProps.price}</Text>
                        </View>
                    </View>
                    <View style={styles.column}>
                        <Image style={{width: 220}} source={ItemProps.image} />
                    </View>
                    <View style={styles.desc}>
                        <Text style={styles.descText}>{ItemProps.itemDesc}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      height: '100%'
    },
    background: {
        width: '100%',
        height: 300
    },
    main: {
        width: '100%',
        position: 'absolute',
        top: 0
    },
    content: {
        flexDirection: 'row',
        flexWrap: "wrap"
    },
    column:{
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    name: {
        fontFamily: 'Rounded-Medium',
        fontSize: 26,
        lineHeight: 30
    },
    price: {
        fontFamily: 'Rounded-Medium',
        fontSize: 22,
        lineHeight: 30,
        color: '#4D4D4D'
    },
    desc: {
        width: '100%',
        paddingHorizontal: 20
    },
    descText: {
        marginTop: 30,
        fontFamily: 'Medium',
        fontSize: 18
    }
});

export default Product;