import {StyleSheet, Text, TouchableOpacity, View} from "react-native"
import {SvgXml} from "react-native-svg"

import React, {useState} from "react"
import {ScrollView, TouchableWithoutFeedback} from "react-native-gesture-handler"
import IconArrowLeft from "@/assets/icons/IconArrowLeft.ts"
import {IconClose} from "@/assets/icons/IconClose.ts";
import {ScreenList} from "@/shared/constant/screen-navigators.const.ts";
import {MScreenModel} from "@/shared/models/M-Screen.model.ts";
import {palette} from "@/theme/themes.ts";
import {NavigationProp, ParamListBase, useNavigation} from "@react-navigation/native";

let stackScreen: any[] = []
let lengthStackScreen: any[] = []
const MenuScreen = (props: any) => {
    const navigation: NavigationProp<ParamListBase> = useNavigation();
    const [isPressedItem, setPressedItem] = useState(false); // Kiểm tra đã touch vào item chưa
    const [currItem, setCurrItem] = useState<any>(''); // Kiểm tra item hiện tại
    const [isHasChild, setHasChild] = useState(false); // Kiểm tra có con hay không
    const [filterScreen, setFilterScreen] = useState<MScreenModel[]>(ScreenList); // Biến chứa các item screen

    const checkHasArray = (array: any) => {
        return array != undefined && true && array.length > 0
    }

    const checkItemHasChild = (item: any) => {
        if (checkHasArray(item.child)) {
            setCurrItem(item)
        }
    }

    const handlePressIn = (item: any) => {
        checkItemHasChild(item)
        setPressedItem(true)
    };

    const handlePressOut = (item: any) => {
        checkItemHasChild(item)
        setPressedItem(false)
    };

    const handleNavigate = (item: any) => {

        const navigate = (nameScreen: string) => {
            props.navigation.navigate(nameScreen)
        }
        stackScreen.push(...filterScreen)
        lengthStackScreen.push(filterScreen.length)

        if (checkHasArray(item.child)) {

            setFilterScreen(item.child)
            setHasChild(true)
        } else {
            stackScreen = []
            setHasChild(false)
            navigate(item)
            setFilterScreen(props.screenArray)
        }
    }

    const goBackDrawer = () => {
        let temp: any = ''

        if (stackScreen.length > 0) {
            temp = stackScreen.slice(lengthStackScreen.slice(-1)[0])
            if (stackScreen.length == lengthStackScreen.slice(-1)[0]) {
                temp = stackScreen
                stackScreen = []
                setHasChild(false)

            } else {

                stackScreen.splice(lengthStackScreen.slice(-1)[0])

            }
            setFilterScreen(temp)

        }


    }

    return (
        <View>
            <View style={styles.layout}>
                <View style={styles.headerDrawer}>
                    <View style={{flexDirection: 'row'}}>
                        {/* <Image /> */}
                        {!isHasChild ? (
                            <>
                                <View
                                    style={{backgroundColor: 'black', width: 40, height: 40, borderRadius: 20}}></View>
                                <View style={{marginLeft: 11}}>
                                    <Text style={{fontSize: 15, fontWeight: '700', color: '#083011'}}>Le Nhat
                                        Truong</Text>
                                    <Text>Khach hang than thiet tu 2020</Text>
                                </View>
                            </>
                        ) : (
                            <>

                                <View style={{flexDirection: 'row', alignItems: 'center', marginRight: 11}}>
                                    <TouchableOpacity onPress={() => goBackDrawer()}>
                                        <SvgXml xml={IconArrowLeft}/>
                                    </TouchableOpacity>
                                </View>


                                <View style={{marginLeft: 11}}>
                                    <Text style={{
                                        fontSize: 15,
                                        fontWeight: '700',
                                        color: '#083011'
                                    }}>{currItem.name}</Text>
                                </View>
                            </>
                        )}


                    </View>

                    <View>
                        <TouchableOpacity onPress={() => {
                            navigation.goBack();
                            setFilterScreen(props.screenArray);
                            setHasChild(false)
                        }}>
                            <SvgXml xml={IconClose}/>
                        </TouchableOpacity>
                    </View>
                </View>

                <ScrollView style={styles.mainDrawer}>
                    {filterScreen?.map((screen: MScreenModel, index) => {
                        return (
                            <View key={index}>
                                <TouchableWithoutFeedback
                                    onPressIn={() => handlePressIn(screen)}
                                    onPressOut={() => handlePressOut(screen)}
                                    onPress={() => handleNavigate(screen)}
                                    style={{marginBottom: 8}}
                                >
                                    <View
                                        style={{
                                            backgroundColor: isPressedItem && currItem === screen.name ? palette.Green_gray_40 : 'red',
                                            paddingLeft: 20,
                                            height: 32,
                                            alignItems: 'center',
                                            flexDirection: 'row',
                                            borderRadius: 20,
                                        }}
                                    >
                                        <Text style={{color: palette.green_gray_900 }}>{screen.name}</Text>
                                    </View>
                                </TouchableWithoutFeedback>

                            </View>
                        )
                    })}

                </ScrollView>

            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    layout: {
        backgroundColor: '#FFF'
    },
    headerDrawer: {
        paddingHorizontal: 26,
        height: 70,
        backgroundColor: 'white',
        shadowColor: '#2C883E',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 8,
        elevation: 5,
        minHeight: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    mainDrawer: {
        paddingHorizontal: 12, paddingVertical: 24,
    },
})
export default MenuScreen
