import {
	createContext,
	PropsWithChildren,
	useEffect,
	useMemo,
	useState,
} from 'react';

import { config } from '@/theme/_config';
import {
	generateFontSizes,
	generateFontColors,
	staticFontStyles, generateFontFamilies, generateFontTypographies,
} from '@/theme/fonts';
import {
	generateBorderColors,
	generateBorderRadius,
	generateBorderWidths,
} from '@/theme/borders';
import layout from '@/theme/layout';
import componentsGenerator from '@/theme/components';
import { generateBackgrounds } from '@/theme/backgrounds';
import { generateGutters } from '@/theme/gutters';
import generateConfig from '@/theme/ThemeProvider/generateConfig';

import type { MMKV } from 'react-native-mmkv';
import type { ComponentTheme, Theme } from '@/types/theme/theme';
import type {
	FulfilledThemeConfiguration,
	Variant,
} from '@/types/theme/config';
import React from 'react'
import {StateStorage} from "zustand/middleware";
// Types

type Context = Theme & {
	changeTheme: (variant: Variant) => void;
};

export const ThemeContext = createContext<Context | undefined>(undefined);

type Props = PropsWithChildren<{
	storage: StateStorage;
}>;

function ThemeProvider({ children, storage }: Props) {
	// Current theme variant
	const [variant, setVariant] = useState(
		(storage.getItem('theme') as Variant) || 'default',
	);

	// Initialize theme at default if not defined
	useEffect(() => {
		const appHasThemeDefined = storage.getItem('theme');
		console.log('theme', appHasThemeDefined);
		if (!appHasThemeDefined) {
			storage.setItem('theme', 'default');
			setVariant('default');
		}
	}, []);

	const changeTheme = (nextVariant: Variant) => {
		setVariant(nextVariant);
		storage.setItem('theme', nextVariant);
	};

	// Flatten config with current variant
	const fullConfig = useMemo(() => {
		return generateConfig(variant) satisfies FulfilledThemeConfiguration
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [variant, config])

	const fonts = useMemo(() => {
		return {
			...generateFontSizes(),
			...generateFontTypographies(fullConfig),
			...generateFontColors(fullConfig),
			...generateFontFamilies(),
			...staticFontStyles
		}
	}, [fullConfig])

	const backgrounds = useMemo(() => {
		return generateBackgrounds(fullConfig);
	}, [fullConfig]);

	const borders = useMemo(() => {
		return {
			...generateBorderColors(fullConfig),
			...generateBorderRadius(),
			...generateBorderWidths(),
		};
	}, [fullConfig]);

	const navigationTheme = useMemo(() => {
		return {
			dark: variant === 'dark',
			colors: fullConfig.navigationColors,
		};
	}, [variant, fullConfig.navigationColors]);

	const theme = useMemo(() => {
		return {
			colors: fullConfig.colors,
			variant,
			gutters: generateGutters(),
			layout,
			fonts,
			backgrounds,
			borders,
		} satisfies ComponentTheme;
	}, [variant, layout, fonts, backgrounds, borders, fullConfig.colors]);

	const components = useMemo(() => {
		return componentsGenerator(theme);
	}, [theme]);

	const value = useMemo(() => {
		return { ...theme, components, navigationTheme, changeTheme };
	}, [theme, components, navigationTheme, changeTheme]);

	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
}

export default ThemeProvider;
