import React from "react";
import {Dimensions, Image, StyleSheet, Text, View} from "react-native";
import {useTheme} from "@/theme";

const win = Dimensions.get('window');
const ratio = win.width / 541;
const CNewsItem: React.FC<any> = (props) => {
    const {fonts, gutters, layout, backgrounds, borders} = useTheme()
    const itemData = props.newsItemData;

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require('@/assets/images/MockNewsImg1.png')}
                >
                </Image>
            </View>
            <Text numberOfLines={2}
                  style={styles.newsTitle}
            >
                {itemData.newsTitle}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        gap: 24,
        width: '100%',
    },
    imageContainer: {
        height: 140
    },
    image: {
        borderRadius: 4,
        flex: 1,
        height: '100%',
        width: 140
    },
    newsTitle: {
        width: '50%',
        flex: 1,
        color: '#0A4E17',
        lineHeight: 22,
        fontSize: 15,
        marginTop: 20,
        fontWeight: '500'
    }
})


export default CNewsItem;
