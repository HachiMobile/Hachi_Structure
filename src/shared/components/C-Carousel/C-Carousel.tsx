import {Dimensions, SafeAreaView, StyleSheet, View} from "react-native";
import {useTheme} from "@/theme";
import React, {memo, useRef, useState} from "react";
import Carousel, {ICarouselInstance} from "react-native-reanimated-carousel";
import {CarouselCustomModel} from "@/shared/components/C-Carousel/models/M-Carousel.ts";

const defaultWidth = Dimensions.get('window').width - 28;
let defaultHeight = 260;

const Dot = memo(({index, activeIndex, dotStyle, activeDotStyle}: CarouselCustomModel.IDotProps) => {
    return (
        <View style={[dotStyle, index === activeIndex && activeDotStyle]}>
        </View>
    )
});
const paginate = (index: number, data: any, dotStyle: any, activeIndex: any, activeDotStyle: any) => {
    console.log(index, 'index')
    return (
        <View style={styles.dotContainerStyle}>
            {
                data.map((_: any, i: number) => {
                    return (
                        <Dot key={i}></Dot>
                    )
                })
            }
        </View>
    );
}
const CarouselCustom = (props) => {
    const {fonts, gutters, layout, backgrounds, borders} = useTheme()

    const {
        data,
        isAutoPlay,
        containerStyle,
        isLoop,
        Component,
        sliderWidth,
        sliderHeight,
        dot,
        navigation,
        navigationComponentName
    } = props;
    defaultHeight = sliderHeight || defaultHeight;
    let [index, setActiveSlide] = useState(0);

    if (dot) {
        styles.dotStyle = dot.dotStyle || styles.dotStyle;
        styles.activeDotStyle = dot.activeDotStyle || styles.activeDotStyle
        styles.dotContainerStyle = dot.dotContainerStyle || styles.dotContainerStyle;
    }

    const _carousel = useRef<ICarouselInstance>(null);
    const handleItemPress = (item: any) => {
        if (navigationComponentName) {
            navigation.navigate(navigationComponentName as never, {item: item} as never)
        }
    }
    const handleSnapToItem = (currentIndex: number) => {
        setActiveSlide(currentIndex);
    }

    return (
        <SafeAreaView>
            <View style={{height: defaultHeight}}>
                <Carousel
                    width={sliderWidth || defaultWidth}
                    style={containerStyle || styles.containerStyle}
                    modeConfig={
                        {
                            scaleInterval: 1,
                        }
                    }
                    autoPlay={isAutoPlay || false}
                    data={data || []}
                    ref={_carousel}
                    loop={isLoop}
                    onSnapToItem={(index) => handleSnapToItem(index)}
                    renderItem={({item, index}) => {
                        return (
                            <View onTouchEnd={() => handleItemPress(item)} key={index}>
                                {/*{Component ? <Component data={item}/> : <DefaultCarouselItem imageSource={item.image}/>}*/}
                            </View>
                        )
                    }
                    }
                />
                {dot?.dotIndicatorEnable && paginate(index, data, styles.dotStyle, styles.activeDotStyle, styles.dotContainerStyle)}
            </View>
        </SafeAreaView>
    )
}
let styles: any = StyleSheet.create({
    dotContainerStyle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        width: '100%',
        bottom: '10%',
    },
    dotStyle: {

        width: 16,
        height: 16,
        borderRadius: 8,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#FFFFFF',
        marginHorizontal: 8,
        backgroundColor: '#BEDB49'
    },
    activeDotStyle: {
        backgroundColor: '#E0E3DC'
    },
    containerStyle: {opacity: 1, width: "100%"},
    containerPaginationStyle: {
        display: 'flex',
        width: '100%',
        bottom: 0,
        flex: 1,
        position: 'absolute',
        height: 'auto'
    }
})
export default CarouselCustom;
