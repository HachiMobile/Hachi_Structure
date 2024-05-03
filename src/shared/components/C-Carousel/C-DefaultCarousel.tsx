import React from "react";
import {Image, View} from "react-native";

const DefaultCarouselItem: React.FC<{
    imageSource: any
}> = (props) => {
    const {imageSource} = props;
    console.log(imageSource)
    return (
        <View style={{marginLeft: "2.5%", marginRight: "2.5%"}}>
            <Image
                source={imageSource}
                style={{
                    height: '100%',
                    width: '100%',
                    resizeMode: 'contain',
                    borderRadius: 20
                }}
            />
        </View>
    )
}

export default DefaultCarouselItem
