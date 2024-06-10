import {Alert, Button, Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import CSectionTitle from "@/shared/components/C-SectionTitle/C-SectionTitle.tsx";
import { useTheme } from "@/theme";
import * as React from 'react';
import {useEffect, useMemo, useState} from 'react';
import { palette } from "@/theme/themes.ts";
import IconSeeMore from "@/assets/icons/IconSeeMore.ts";
import { mvs } from "@/shared/utils/responsive.ts";
import newProductIcon from "@/assets/icons/IconNewProduct.ts";
import { SvgXml } from "react-native-svg";
import { IconMenu } from "@/assets/icons/IconMenu.ts";
import { BlogItem } from "@/screens/Blog";
import { blogMockDataConst } from "@/shared/constant/blogMockData.const.ts";
import useApiHook from "@/shared/services/axios-service.ts";
import { productMockData } from "../../shared/constant/productMockupData.const.ts";
import { CardProductList } from "../Product";
import {API_LIST} from "@/shared/constant/api-list.const.ts";
import {API_METHOD_ENUM} from "@/shared/enum/api-method.enum.ts";
import {families} from "@/theme/edit/font.ts";
import {zustandMMKVStorage} from "@/shared/utils/storage.ts";
import FireBaseMessage from "@/shared/components/C-Message/message.tsx";

type MenuItem = {
    Code: number;
    Name: string;
    MenuName: string;
    Image: string;
    Link: string;
    TypeData: number;
    StartDate: Date | null;
    EndDate: Date | null;
    SortOrder: number;
};

const ScrHome: React.FC = (props: any) => {
    const { gutters, layout, backgrounds, fonts, } = useTheme()
    const mockData = ['Kẹo muối khoáng chất Bourbon vị bưởi 104g', 'Kẹo muối khoáng chất Bourbon vị bưởi 104g', 'Kẹo muối khoáng chất Bourbon vị bưởi 104g', 'Kẹo muối khoáng chất Bourbon vị bưởi 104g', 'Kẹo muối khoáng chất Bourbon vị bưởi 104g', 'Kẹo muối khoáng chất Bourbon vị bưởi 104g', 'Kẹo muối khoáng chất Bourbon vị bưởi 104g', 'Kẹo muối khoáng chất Bourbon vị bưởi 104g', 'Kẹo muối khoáng chất Bourbon vị bưởi 104g', 'Kẹo muối khoáng chất Bourbon vị bưởi 104g']
    const defaultWidth = Dimensions.get('window').width - gutters.paddingHorizontal_14.paddingHorizontal * 2;
    // const { data, loading, error } = useApiHook<MenuItem[]>({url: API_LIST.Home_GetBanner, method: API_METHOD_ENUM.POST});
    const [formData, setFormData] = useState(() => {
        const data = new FormData();
        data.append('client_id', 'user');
        data.append('client_secret', 'jssecret');
        data.append('grant_type', 'password');
        data.append('scope', 'userapi offline_access');
        data.append('username', '1234567891');
        data.append('password', '1234567891');
        return data;
    })
    const [loginData, setLoginData] = useState(null);

    const data = useApiHook<{ access_token: string, expires_in: number, token_type: string, refresh_token: string}>({url: API_LIST.Login, method: API_METHOD_ENUM.POST, formData: formData}).data;


    // const userInfo = useApiHook<any>({url: API_LIST.GetUserInfo, method: API_METHOD_ENUM.POST});
    useEffect(() => {
        console.log('token', data)
        if (data) {
            const token = data?.access_token;
            zustandMMKVStorage.setItem('token', token);
            setLoginData(token);
            console.log('token', token);
            console.log('data', loginData);
        }
    }, [data]);

    const user = useApiHook<{ fullName: string,  userName: string, email: string, phoneNumber: string, memberID: string}>({url: API_LIST.GetUserInfo, method: API_METHOD_ENUM.GET})
    console.log('user info', user);

    //#region C-Header
    const renderHeader = () => {
        const [filteredData, setFilteredData] = useState<string[]>([]);

        const handleSearch = (keyword: string) => {
            Alert.alert(keyword)
        };
        const handleLiveSearch = (keyword: string) => {
            if (keyword === '') {
                setFilteredData([]);
            } else {
                const filtered = mockData.filter(item =>
                    item.toLowerCase().includes(keyword.toLowerCase())
                );
                setFilteredData(filtered);
            }
        };

        return (
            <View>
                <View style={[styles.headerBottom]}>
                    <View style={styles.headerBottomFirst}>
                        <Image source={require('@/assets/images/LogoHachiHachi.png')}></Image>

                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => props.navigation.navigate('Menu')}>
                                <View style={{ marginLeft: 22 }}>
                                    <SvgXml xml={IconMenu} />
                                    <Text style={[ fonts.family_medium, fonts.size_2, { color: '#268F3B', fontWeight: '700', fontSize: 11 }]}>MENU</Text>
                                </View>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            </View>
        )
    }
    //#endregion
    return (
        <View style={[layout.flex_1, backgrounds.white]}>

            <ScrollView>
                {renderHeader()}
                <ScrollView style={[gutters.paddingHorizontal_14, layout.flex_1,]}>
                <FireBaseMessage />
                    <Text style={[fonts.family_medium, fonts.size_8]}></Text>
                    <View style={[gutters.marginTop_14]}>
                        <CSectionTitle title='Sản phẩm đã xem' suffixIcon={IconSeeMore} />
                        <View style={[gutters.marginTop_14]}><CardProductList dataProduct={productMockData} /></View>
                    </View>
                    <View style={[gutters.marginVertical_10]}>
                        <CSectionTitle title='Hachi Hachi Blog' suffixIcon={IconSeeMore} />
                        <BlogItem data={blogMockDataConst} />
                    </View>
                </ScrollView>
            </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({
    //#region style banner header top
    bannerHeader: {
        width: '100%',
        height: 40,
        backgroundColor: palette.Lightgreen_100,
        color: palette.Darkgreen_TextBanner,
        flexDirection: 'row',
        justifyContent: 'center',
    },

    frameLinearBanner: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        paddingLeft: 15,
        paddingRight: 15,
        marginRight: 10,
        marginLeft: 10,
        height: 22,
    },

    linearBannerText: {
        color: palette.Darkgreen_900,
        textAlignVertical: 'center',
        fontFamily: families.bold
    },
    //#endregion

    //#region style header bottom
    headerBottom: {
        flexDirection: 'column',
        paddingVertical: 14,
        paddingHorizontal: 16
    },

    headerBottomFirst: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 14
    },

    headerBottomTextInput: {
        width: '100%',
        height: 40,
        borderColor: palette.Green_gray_200,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        paddingLeft: 30,
        paddingRight: 30
    },
    //#endregion

    careerPoster: {
        width: '100%',
        height: mvs(280),
        objectFit: 'cover',
        borderRadius: 8,
        marginBottom: 30
    },

    hachiPolicy: {
        width: '100%',
        height: mvs(345),
        objectFit: 'cover',
        borderRadius: 8,
        marginBottom: 30
    }
})
export default ScrHome;
