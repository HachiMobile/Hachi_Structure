import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native'
import React from 'react'
import type {ApplicationStackParamList} from '@/types/navigation';
import {ScreenList} from "@/shared/constant/screen-navigators.const.ts";

const Stack = createStackNavigator<ApplicationStackParamList>();

function ApplicationNavigator() {

	//TODO: Default theme - currently not use
	// enum { variant, navigationTheme } = useTheme();

	const initialRouteName = 'Main' as keyof ApplicationStackParamList;

	return (
		<NavigationContainer >
			<Stack.Navigator
				screenOptions={{ headerShown: false }}
				initialRouteName={initialRouteName}>

				{ScreenList.map((screen, index) => {
					//lazy loading component => optimize bundles => just load specific screen
					return <Stack.Screen  key={index} name={screen.name as keyof ApplicationStackParamList} getComponent={() => screen.component}></Stack.Screen>
				})}
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default ApplicationNavigator;
