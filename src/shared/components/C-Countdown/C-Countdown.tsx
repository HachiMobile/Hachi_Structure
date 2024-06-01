import React, {useEffect, useState} from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import MCountdownModel from "@/shared/models/M-Countdown.model.ts";


const CCountdown: React.FC<MCountdownModel> = (props) => {
    let {dateEnd, iconHotSale} = props;
    const currentDate = new Date()
    let diff = dateEnd.getTime() - currentDate.getTime()
    const [time, setTime] = useState(diff)
    if (!iconHotSale) {
        iconHotSale = require('@/assets/images/hot-sale.png')
    }
    useEffect(() => {
        if (time > 0 && diff > 0) {
            const interval = setInterval(() => {
                setTime(time - 1000)
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [time]);

    let totalSeconds = Math.floor(time / 1000);
    let toalMinutes = Math.floor(totalSeconds / 60);
    let hours = time > 0 && diff > 0 ? Math.floor(toalMinutes / 60) : 0;
    let minutes = time > 0 && diff > 0 ? toalMinutes % 60 : 0;
    let seconds = time > 0 && diff > 0 ? totalSeconds % 60 : 0
    const formatTime = (value: any) => value.toString().padStart(2, '0');

    hours = formatTime(hours);
    minutes = formatTime(minutes);
    seconds = formatTime(seconds);
    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Image style={[styles.icon]} source={iconHotSale}></Image>
                <Text style={[styles.title]}>Flash Sale</Text>
            </View>
            <View style={styles.timeContainer}>
                <Text style={[styles.hour, styles.time]}>{hours}</Text>
            </View>
            <View style={styles.colon}>
                <Text>:</Text>
            </View>
            <View style={styles.timeContainer}>
                <Text style={[styles.minute, styles.time]}>{minutes}</Text>

            </View>
            <View style={styles.colon}>
                <Text>:</Text>

            </View>
            <View style={styles.timeContainer}>
                <Text style={[styles.second, styles.time]}>{seconds}</Text>

            </View>

        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    icon: {
        height: 41,
        width: 41,
        marginRight: 8,
        resizeMode: 'contain'
    },
    title: {
        fontSize: 19,
        color: '#0A4E17',
        fontWeight: 'bold',
        marginRight: 8,
    },
    time: {
        backgroundColor: 'black',
        color: 'white',
        padding: 6,
        borderRadius: 6,
        fontSize: 14,
        fontWeight: '400',
    },
    timeContainer: {
        width: 30,
        height: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    hour: {},
    minute: {},
    second: {},
    colon: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        margin: 4
    },

})
export default CCountdown;
