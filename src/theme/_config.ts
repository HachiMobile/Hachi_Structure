import { DarkTheme } from '@react-navigation/native'
import type { ThemeConfiguration } from '@/types/theme/config'
import { colorsDark, colorsLight } from './edit/color'
import { body, heading } from './edit/typography'
import { borderRadius, borderWidth } from './edit/border'
import {families, sizes} from "@/theme/edit/font.ts";

export const config = {
	fonts: {
		sizes,
		colors: colorsLight,
		// @ts-ignore
		families,
		typographies: { ...heading, ...body }
	},
	gutters: sizes,
	backgrounds: colorsLight,
	borders: {
		widths: borderWidth,
		radius: borderRadius,
		colors: colorsLight
	},
	navigationColors: {
		...DarkTheme.colors,
		background: colorsLight.white,
		card: colorsLight.lightGray,
		text: colorsLight.black,
		primary: colorsLight.primaryA
	},
	variants: {
		dark: {
			fonts: {
				colors: colorsDark
			},
			backgrounds: colorsDark,
			navigationColors: {
				...DarkTheme.colors
			}
		}
	}
} as const satisfies ThemeConfiguration
