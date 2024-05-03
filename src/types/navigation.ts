import type {StackScreenProps} from '@react-navigation/stack';
import {NavigationProp} from "@react-navigation/native";
import React from "react";

export type ApplicationStackParamList = {
	Home: undefined,
	Menu: undefined,
	ProductDetail: undefined,
	CardProduct: undefined
};

export type ApplicationScreenProps<T extends keyof ApplicationStackParamList> =
	StackScreenProps<ApplicationStackParamList, T>
export type ApplicationNavigationProps =
	NavigationProp<ApplicationStackParamList>
