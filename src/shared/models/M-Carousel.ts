import React from "react";
import ComponentItemProps = CarouselCustomModel.ComponentItemProps;


export namespace CarouselCustomModel {
    export interface IDotProps {
        index?: number;
        activeIndex?: number;
        dotIndicatorEnable?: boolean;
        dotStyle?: any;
        activeDotStyle?: any;
        dotContainerStyle?: any;
    }

    export type ComponentItemProps = {
        data: any
    }
}

export default class CarouselCustomModel  {
    isLoop?: boolean;
    containerStyle?: any;
    Component?: React.FC<ComponentItemProps> | React.FC<any>;
    sliderWidth?: any;
    sliderHeight?: number;
    data?: any[];
    isAutoPlay?: boolean;
    navigationComponentName?: string;
    dot?: CarouselCustomModel.IDotProps;
    navigation?: any;
}
