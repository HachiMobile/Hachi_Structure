import {Alert, Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import CSectionTitle from "@/shared/components/C-SectionTitle/C-SectionTitle.tsx";
import {useTheme} from "@/theme";
import * as React from 'react';
import {useState} from 'react';
import CardProductList from "@/screens/Product/components/C-CardProductList.tsx";
import {palette} from "@/theme/themes.ts";
import IconSeeMore from "@/assets/icons/IconSeeMore.ts";
import {mvs} from "@/shared/utils/responsive.ts";
import {productMockData} from "@/screens/Product/constant/productMockupData.const.ts";
import newProductIcon from "@/assets/icons/IconNewProduct.ts";
import {SvgXml} from "react-native-svg";
import {IconMenu} from "@/assets/icons/IconMenu.ts";
import {BlogItem} from "@/screens/Blog";
import {blogMockDataConst} from "@/screens/Blog/constant/blogMockData.const.ts";

const ScrHome: React.FC = (props: any) => {
    const { gutters, layout, backgrounds } = useTheme()
    const mockData = ['Kẹo muối khoáng chất Bourbon vị bưởi 104g', 'Kẹo muối khoáng chất Bourbon vị bưởi 104g', 'Kẹo muối khoáng chất Bourbon vị bưởi 104g', 'Kẹo muối khoáng chất Bourbon vị bưởi 104g', 'Kẹo muối khoáng chất Bourbon vị bưởi 104g', 'Kẹo muối khoáng chất Bourbon vị bưởi 104g', 'Kẹo muối khoáng chất Bourbon vị bưởi 104g', 'Kẹo muối khoáng chất Bourbon vị bưởi 104g', 'Kẹo muối khoáng chất Bourbon vị bưởi 104g', 'Kẹo muối khoáng chất Bourbon vị bưởi 104g']
    const defaultWidth = Dimensions.get('window').width - gutters.paddingHorizontal_14.paddingHorizontal * 2;


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
                <View style={styles.headerBottom}>
                    <View style={styles.headerBottomFirst}>
                        <Image source={require('@/assets/images/LogoHachiHachi.png')}></Image>

                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity onPress={() => props.navigation.navigate('Menu')}>
                                <View style={{marginLeft: 22}}>
                                    <SvgXml xml={IconMenu}/>
                                    <Text style={{color: '#268F3B', fontWeight: '700', fontSize: 11}}>MENU</Text>
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
                    <View style={[gutters.marginTop_12]}><CardProductList dataProduct={productMockData}/></View>
                    <View style={[gutters.marginTop_14]}>
                        <CSectionTitle prefixIcon={newProductIcon} title='Sản phẩm mới' suffixIcon={IconSeeMore}/>
                        <View style={[gutters.marginTop_14]}><CardProductList dataProduct={productMockData}/></View>
                    </View>

                    <View style={[gutters.marginTop_14]}>
                        <CSectionTitle title='Sản phẩm đã xem' suffixIcon={IconSeeMore}/>
                        <View style={[gutters.marginTop_14]}><CardProductList dataProduct={productMockData}/></View>
                    </View>
                    <View style={[gutters.marginVertical_10]}>
                        <CSectionTitle title='Hachi Hachi Blog' suffixIcon={IconSeeMore}/>
                        <BlogItem data={blogMockDataConst}/>
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
        //fontWeight: "700",
        textAlignVertical: 'center',
        fontFamily: 'PlusJakartaSans-Regular'
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
