import React from 'react';
import { StoreProvider } from './storeProvider';
import { ThemeProvider } from './themeProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Routes from './router/ui/Routes';

export const Providers = () => {
	const queryClient = new QueryClient();

	return (
		<React.StrictMode>
			<StoreProvider>
				<QueryClientProvider client={queryClient}>
					<ThemeProvider>
						<Routes />
					</ThemeProvider>
				</QueryClientProvider>
			</StoreProvider>
		</React.StrictMode>
	);
};
