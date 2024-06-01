import {FlatList, StyleSheet, View} from "react-native";
import React from "react";
import {MockNewsDataConst} from "@/shared/constant/MockNewsData.const.ts";
import {useTheme} from "@/theme";
import {NewsItem, NewsItemModel} from "@/screens/News";

interface NewsItemListProps {
    newsList: NewsItemModel[]
}

const NewsItemList: React.FC<NewsItemListProps> = (newsList: NewsItemListProps) => {
    const newsListItem: NewsItemModel[] = newsList ? newsList.newsList : MockNewsDataConst;
    const {layout} = useTheme();

    return(
        <View>
            <FlatList
                data={newsListItem}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                scrollEnabled={false}
                renderItem={({item}) =>
                    <View style={[layout.flex_1]}>
                        <NewsItem newsItemData={item}/>
                    </View>
                }/>
        </View>
    )
}


const styles = StyleSheet.create({})
export default NewsItemList;
