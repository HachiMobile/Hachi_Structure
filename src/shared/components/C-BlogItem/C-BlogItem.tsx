import React from "react";
import {Dimensions, Image, StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";
import {useTheme} from "@/theme";
import BlogItemModel from "@/shared/models/M-BlogItem.model.ts";
import {NavigationProp, ParamListBase, useNavigation} from "@react-navigation/native";
import {ENUM_SCREEN_NAME} from "@/shared/enum/screen-name.enum.ts";

const win = Dimensions.get('window');
const ratio = win.width / 541;
const CBlogItem = (props) => {
    const navigation: NavigationProp<ParamListBase> = useNavigation();
    const {data} = props;
    const {blogTitle, blogCate, blogBrief, blogImage, blogPublished} = props;
    const {fonts, gutters, layout, backgrounds, borders} = useTheme()

    const onPress = () => {
        console.log('data', data);
        navigation.navigate({name: ENUM_SCREEN_NAME.BLOG_DETAIL_SCREEN, params: data});
    }

    return (
        <TouchableWithoutFeedback onPress={() => onPress()}>
            <View style={[layout.flex_1]}>
                <Image
                    style={styles.image}
                    resizeMode={'contain'}
                    source={require('@/assets/images/MockBlogImg.png')}
                >
                </Image>
                <View>
                    {/*TODO: Blog title*/}
                    <Text style={styles.blogTitle}>{blogTitle ? blogTitle : 'Chảo không dính đá hoa cương'}</Text>
                    <View style={[layout.row, gutters.gap_10]}>
                        {/*TODO: Blog cate*/}
                        <Text style={styles.blogCate}>{blogCate ? blogCate : 'Hàng Nhật Hot'}</Text>
                        <Text style={[gutters.paddingLeft_4, gutters.paddingRight_8]}>|</Text>
                        {/*TODO: Blog date*/}
                        <Text style={styles.blogDate}>{blogPublished ? blogPublished : '30/12/2018'}</Text>

                    </View>
                    {/*TODO: Blog brief*/}
                    <Text numberOfLines={3}
                          ellipsizeMode="tail">
                        {
                            blogBrief ? blogBrief :
                                "Chảo đá hoa cương thường được làm bằng hợp kim nhôm đúc, với nhiều lớp sơn lót primer như một chất kết dính các lớp lại với nhau, bề mặt phủ thêm lớp chống Chảo đá hoa cương thường được làm bằng hợp kim nhôm đúc, với nhiều lớp sơn lót primer như một chất kết dính các lớp lại với nhau, bề mặt phủ thêm lớp chống"}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )

}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: '100%',
        height: 362 * ratio
    },
    blogTitle: {
        color: '#0A4E17',
        fontSize: 15,
        lineHeight: 22,
        fontWeight: "500"
    },
    blogCate: {
        color: '#268F3B',
        fontSize: 13,
        lineHeight: 19
    },
    blogDate: {
        color: '#87907D',
        fontSize: 13,
        lineHeight: 19
    },
    blogBrief: {
        color: '#083011',
        fontSize: 14,
        lineHeight: 21,
    }
})

export default CBlogItem;
