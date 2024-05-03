import {StyleSheet, Text, View} from "react-native";
import React from "react";
import MSectionTitleModel from "./models/M-SectionTitle.model.ts";
import {mvs} from "@/shared/utils/responsive.ts";
import {useTheme} from "@/theme";
import {SvgXml} from "react-native-svg";

const CSectionTitle = (props: MSectionTitleModel) => {
    const {title, titleColor, titleSize, seeAll, navigationUrl, suffixIcon, prefixIcon} = props;
    const { layout} = useTheme()

    return (
        <View style={{flexDirection: 'row', flexWrap: 'wrap', gap: 6}}>
            { prefixIcon && (
                <SvgXml xml={prefixIcon} />
            )}
            <Text style={[{
                color: 'rgba(10, 78, 23, 1)',
                fontSize: mvs(20),
                lineHeight: 30,
                fontWeight: '700'
            }]}>{title}</Text>
            <View style={[layout.row, layout.itemsCenter]}>
                <Text style={
                    [
                        {color: 'rgba(38, 143, 59, 1)', fontSize: mvs(14), fontWeight: '600', lineHeight: 21}
                    ]
                }>Xem tất cả</Text>
                { suffixIcon && (
                    <SvgXml xml={suffixIcon} />
                )}
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
})

export default CSectionTitle
