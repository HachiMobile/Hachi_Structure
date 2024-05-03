import {Image, StyleSheet, Text, View} from "react-native";
import React from "react";
import {CarouselCustomModel} from "@/shared/components/C-Carousel/models/M-Carousel.ts";

const CarouselCategoryItemDefault: React.FC<CarouselCustomModel.ComponentItemProps> = (props) => {
    const {data} = props;
    return (
        <View style={styles.container}>
            <Image source={data.image} style={styles.img}></Image>
            <Text style={styles.title}>{data.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
        container: {
            margin: 24,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        },
        img: {
            width: 75,
            height: 75,
            objectFit: 'cover'
        },
        title:{
            fontSize: 14,
            marginTop: 8,
            fontWeight: 'bold'
        }
    })
export default CarouselCategoryItemDefault;
