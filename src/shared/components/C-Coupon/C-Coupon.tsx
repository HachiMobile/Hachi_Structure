import React, {useEffect, useState} from "react";
import MCouponModel from "@/shared/models/M-Coupon.model.ts";
import {Dimensions, StyleSheet, Text, View} from "react-native";

const CCoupon: React.FC<MCouponModel> = (props) => {

    let {isOrder, couponCode, mainTitle, subTitle, saleOff, screenWidth} = props;
    const [color, setColor] = useState('#268F3B');
    const [bgColor, setBgColor] = useState('#EBFFEF')
    if (!screenWidth) {
        screenWidth = Dimensions.get('screen').width
    }
    styles.container.maxWidth = screenWidth / 1.5;
    styles.content.maxWidth = screenWidth / 2.8;
    styles.tag.width = (screenWidth / 2.8) / 2.5;
    // Update color when isOrder changes
    useEffect(() => {
        const color = isOrder ? '#268F3B' : '#8BC53F';
        setColor(color);
        const bgColor = isOrder ? '#EBFFEF' : '#F9FFFB'
        setBgColor(bgColor)
    }, [isOrder]);

    return (
        <View style={[styles.container, {backgroundColor: bgColor}]}>
            <View>
                <Text style={styles.title}>
                    {isOrder ? 'Cho Đơn Hàng' : 'Cho phí vận chuyển'}
                </Text>
            </View>
            <View style={styles.contentContainer}>
                <View style={[styles.tag, {backgroundColor: color}]}>
                    <Text style={styles.rotatedText}>COUPON</Text>
                </View>
                <View style={[styles.circle, styles.circleTop, {borderColor: color}]}></View>
                <View style={[styles.circle, styles.circleBottom, {borderColor: color}]}></View>

                <View style={[styles.content, {borderColor: color}]}>

                    <View style={styles.saleOffContainer}>
                        <Text style={[styles.saleOff, {color: color}]}>{saleOff}</Text>
                        <Text style={[styles.saleOff, {color: color}]}>OFF</Text>
                    </View>
                    <Text style={styles.mainTitle}>{mainTitle}</Text>
                    <Text style={styles.subTitle}>{subTitle}</Text>
                    <Text style={styles.couponCode}>{couponCode}</Text>

                </View>


            </View>
            <View style={styles.button}>
                <Text style={styles.buttonText}>MUA NGAY</Text>
            </View>
            <View style={[styles.block, {backgroundColor: color}]}></View>

        </View>

    )
}

let styles = StyleSheet.create({
    contentContainer: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        height: 'auto',
        overflow: 'hidden',
        width: "auto",
    },
    cover: {
        width: '100%',
    },
    tag: {
        width:50,
        height: 'auto',
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    rotatedText: {
        color: 'white',
        fontWeight: 'normal',
        fontSize: 14,
        transform: [{rotate: '-90deg'}],
    },
    content: {
        position: 'relative',
        maxWidth: 100,
        height: 100,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 20,
        borderRadius: 10,
        borderStyle: 'solid',
        borderWidth: 2,
    },
    saleOff: {
        fontSize: 20,
        fontWeight: '900'
    },
    saleOffContainer: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
    },
    mainTitle: {
        fontSize: 12,
        marginTop: 4,
        marginBottom: 4,
        fontWeight: '500',
        color: 'black'
    },
    subTitle: {
        fontSize: 12,
        marginBottom: 4,
        fontWeight: '400',
        color: 'black'
    },
    couponCode: {
        fontSize: 9,
        color: '#516E54'
    },
    circle: {
        height: 30,
        width: 30,
        borderWidth: 2,
        position: 'absolute',
        borderStyle: 'solid',
        borderRadius: 15,
        backgroundColor: 'white',
        zIndex: 10
    },

    circleTop: {

        alignSelf: 'flex-start',
        top: -15,
        left: 45,

    },
    circleBottom: {
        bottom: -15,
        left: 45,
        alignSelf: 'flex-end',
    },
    container: {
        position: "relative",
        maxWidth: 100,
        display: "flex",
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: 'center',
        margin: 12
    },
    block: {
        height: 30,
        borderTopWidth: 1,
        borderColor: 'black',
        marginTop: 35,
        width: '100%'
    },
    title: {
        fontSize: 18,
        color: '#516E54',
        marginTop: 12,
        marginBottom: 12,
    },
    button: {
        position: "absolute",
        zIndex: 10,
        bottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 20,
        backgroundColor: '#F55E50'
    },
    buttonText: {
        color: 'white'
    }
})

export default CCoupon
