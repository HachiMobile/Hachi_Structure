import {Button, Text, View} from "react-native";
import React from 'react';
import {NavigationProp, ParamListBase, useNavigation} from "@react-navigation/native";
import {ENUM_SCREEN_NAME} from "@/shared/enum/screen-name.enum.ts";
import {heading} from "@/theme/edit/typography";
import {useTheme} from "@/theme";
import {BlogItemModel} from "@/screens/Blog/index.ts";

const BlogDetailScreen = ({ route }) => {
    const { gutters} = useTheme();
    const navigation: NavigationProp<ParamListBase> = useNavigation();
    const data: BlogItemModel = route.params;

    return(
        <View>
            <Text style={[heading.headlineBold, gutters.margin_8]}>Blog Detail</Text>
            <Text style={[heading.headlineSemi, gutters.margin_8]}>{ data.blogTitle }</Text>


            <Button onPress={() => navigation.navigate(ENUM_SCREEN_NAME.HOME_SCREEN)} title='Back Home' />
        </View>
    )
}

export default BlogDetailScreen;
