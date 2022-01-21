import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from "expo-app-loading";
import { useNavigation } from '@react-navigation/native';

const ListItem = ({ itemName, itemDesc, image, price, icon }) => {

    const navigation = useNavigation(); 

    const fetchFont = () => {
        return Font.loadAsync({
          "Medium": require("../../assets/fonts/Medium.ttf")
        })
    }
  
    const [fontLoaded, setFontLoadedStatus] = useState(false);
    const [ItemProps] = useState({itemName, itemDesc, image, price});
    
    if (!fontLoaded) {
        return <AppLoading 
                    startAsync={fetchFont} 
                    onFinish={() => {setFontLoadedStatus(true)}} 
                    onError={() => {console.log('Error loading font')}} 
                />
    }

    return (
        <View style={styles.itemContainer}>
            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Product', {
                ItemProps: ItemProps
            })}>
                <View style={styles.imageContainer}>
                    <Image source={icon} />
                </View>
                <Text style={styles.text}>{itemName}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer:{
        width: '50%',
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    item:{
        width: 120,
        height: 120,
        borderColor: '#D0D0D0',
        borderWidth: 0.8,
        borderRadius: 10, 
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        height: 85,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#4D4D4D',
        fontFamily: 'Medium',
        fontSize: 16
    }
});

export default ListItem;