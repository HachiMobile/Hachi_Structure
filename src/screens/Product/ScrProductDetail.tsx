import {Button, Text, View} from "react-native";
import React from 'react'
import {NavigationProp, ParamListBase, useNavigation} from "@react-navigation/native";
import {ENUM_SCREEN_NAME} from "@/shared/enum/screen-name.enum.ts";
import {heading} from "@/theme/edit/typography";
import {useTheme} from "@/theme";
const ScrProductDetail = ({ route }) => {
    const { gutters} = useTheme();
    const navigation: NavigationProp<ParamListBase> = useNavigation();
    const data = route.params;

    return (
    <View>
        <Text style={[heading.headlineBold, gutters.margin_8]}>Product Detail</Text>
        <Text style={[heading.headlineSemi, gutters.margin_8]}>{ data.NameProduct }</Text>
      <Button onPress={() => navigation.navigate(ENUM_SCREEN_NAME.HOME_SCREEN)} title='Back Home' />
    </View>
  )
}

export default ScrProductDetail
