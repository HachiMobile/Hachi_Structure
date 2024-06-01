import 'react-native-gesture-handler';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import {ThemeProvider} from '@/theme';

import ApplicationNavigator from '@/navigator/Application';
import React from 'react'
import {zustandMMKVStorage} from "@/shared/utils/storage.ts";
import {SafeAreaProvider} from "react-native-safe-area-context";

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider storage={zustandMMKVStorage}>
				<SafeAreaProvider><ApplicationNavigator/></SafeAreaProvider>
			</ThemeProvider>
		</QueryClientProvider>
	);
}

export default App;
