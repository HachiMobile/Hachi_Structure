import 'react-native-gesture-handler';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {MMKV} from 'react-native-mmkv';

import {ThemeProvider} from '@/theme';

import ApplicationNavigator from '@/navigator/Application';
import React from 'react'
import {zustandMMKVStorage} from "@/shared/utils/storage.ts";

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider storage={zustandMMKVStorage}>
				<ApplicationNavigator />
			</ThemeProvider>
		</QueryClientProvider>
	);
}

export default App;
