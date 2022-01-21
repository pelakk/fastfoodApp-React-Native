import React from "react";
import { StyleSheet, ScrollView, View } from 'react-native';
import Header from "../components/homeScreen/Header";
import Banner from "../components/homeScreen/Banner";
import Swiper from "../components/homeScreen/Swiper";
import ListItem from "../components/homeScreen/ListItem";
import { products } from "../products";

const Home = () => {
    return (
        <ScrollView style={{backgroundColor: '#ffffff'}}>
            <Header />
            <Banner />
            <Swiper />
            <View style={styles.container}>
                {products.map(product => (
                    <ListItem key={product.id} itemName={product.name} 
                        itemDesc={product.description} image={product.image}
                        price={product.price} icon={product.icon}
                    />
                ))}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: "wrap",
        marginBottom: 30
    }
});

export default Home;