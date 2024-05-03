import { Dimensions, Image, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native"
import { SvgXml } from "react-native-svg"
import IconCardAdd from "@/assets/icons/IconCardAdd.ts"
import * as React from "react"
import { useState } from "react"
import { palette } from "@/theme/themes.ts"
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import { ENUM_SCREEN_NAME } from "@/shared/enum/screen-name.enum.ts";

// interface props {
//     Thumbnail?: string
//     NameProduct?: string
//     Price?: number
//     Discount?: number
//     PriceDiscount?: number
//     ImgGift?: string
//     TitleGift?: string
// }

const defaultWidth = Dimensions.get('window').width;
const CCardProductItem = (props) => {
    const { dataProduct } = props;
    const navigation: NavigationProp<ParamListBase> = useNavigation();
    const [imageUrl, setImageUrl] = useState('https://reactnative.dev/img/tiny_logo.png');

    // Hàm format số => 1.000, 10.000
    const formatNumber = (number: Number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    const onPress = () => {
        navigation.navigate({ name: ENUM_SCREEN_NAME.PRODUCT_DETAIL_SCREEN, params: props });
    }


    return (

        <TouchableWithoutFeedback onPress={() => onPress()}>
            <View style={styleProductItem.cardFrame}>
                <View style={styleProductItem.viewImg}>

                    <Image
                        style={{ width: '100%', height: 165 }}
                        source={{
                            uri:
                                dataProduct?.Thumbnail
                        }} />

                </View>

                <View style={styleProductItem.frameContent}>
                    <Text style={styleProductItem.title} ellipsizeMode="tail"
                        numberOfLines={2}>{dataProduct?.NameProduct}</Text>
                    {(dataProduct?.Discount !== undefined && dataProduct?.Discount !== null) ? (
                        <View>
                            <View style={styleProductItem.framePrice}>
                                <Text
                                    style={styleProductItem.priceHasDiscount}>{formatNumber(dataProduct?.Price || 0)}đ </Text>

                                <View style={styleProductItem.discount}>
                                    <Text style={styleProductItem.textDiscount}>{dataProduct?.Discount}%</Text>
                                </View>
                            </View>
                            <View style={styleProductItem.framePriceDiscount}>
                                <Text
                                    style={styleProductItem.priceDiscount}>{formatNumber(dataProduct?.PriceDiscount || 0)}đ </Text>
                                <SvgXml xml={IconCardAdd} />
                            </View>
                        </View>

                    ) : (
                        <View style={[styleProductItem.framePriceDiscount, { marginTop: 36 }]}>
                            <Text style={styleProductItem.priceOrigin}>{formatNumber(dataProduct?.Price || 0)}đ </Text>
                            <SvgXml xml={IconCardAdd} />
                        </View>
                    )
                    }

                    {dataProduct?.ImgGift !== null && dataProduct?.ImgGift !== undefined && (
                        <View style={{
                            flexDirection: 'row',
                            maxWidth: '100%',
                            position: 'relative',
                            bottom: -10,
                            alignItems: 'center',
                            gap: 5
                        }}>
                            <Image
                                style={{ width: 34, height: 24 }}
                                source={{
                                    uri:
                                        dataProduct?.ImgGift
                                }} />
                            <Text style={{ fontSize: 12, fontWeight: '400', color: '#586059' }}>{dataProduct?.TitleGift}</Text>
                        </View>
                    )}

                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styleProductItem = StyleSheet.create({
    cardFrame: {
        width: defaultWidth / 2,
        height: 319,
        backgroundColor: '#FFFF'
    },

    frameContent: {
        paddingHorizontal: 8,
        paddingTop: 8
    },

    viewImg: {
        backgroundColor: '#F8F8F8',
        width: 165,
        height: 165
    },

    title: {
        color: palette.Green_gray_800,
        fontSize: 14,
        fontWeight: '500'

    },

    framePrice: {
        flexDirection: 'row',
        columnGap: 5,
        marginTop: 10
    },

    priceHasDiscount: {
        color: palette.Grey_65,
        textDecorationLine: 'line-through',
        fontWeight: '400',
        fontSize: 12
    },

    discount: {
        backgroundColor: palette.Red_500,
        width: 33,
        height: 17,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5

    },

    framePriceDiscount: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8,

    },

    textDiscount: {
        color: palette.Gray_100,
        fontSize: 12,
        fontWeight: '400',
        textAlign: 'center'
    },

    priceDiscount: {
        color: palette.Red_400,
        fontSize: 18,
        fontWeight: '600'
    },

    priceOrigin: {
        fontWeight: '600',
        fontSize: 18,
        color: '#0A4E17'
    }
})
export default CCardProductItem
