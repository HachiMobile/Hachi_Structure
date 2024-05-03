import { ImageStyle, TextStyle, ViewStyle } from 'react-native'
import {ComponentTheme} from "@/types/theme/theme.ts";

export default ({ layout, backgrounds, fonts }: ComponentTheme) => {
	return {
		buttonCircle: {
			...layout.justifyCenter,
			...layout.itemsCenter,
			...backgrounds.primaryA,
			...fonts.lightGray,
			height: 70,
			width: 70,
			borderRadius: 35
		},
		circle250: {
			borderRadius: 140,
			height: 250,
			width: 250
		}
	} as const satisfies Record<string, ImageStyle | TextStyle | ViewStyle>
}
