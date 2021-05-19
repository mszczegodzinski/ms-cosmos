import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import loggerMiddleware from '../middleware/loggerMiddleware';
import rootReducer from '../reducers/rootReducer';

export default function configureAppStore(preloadedState) {
	const store = configureStore({
		reducer: rootReducer,
		middleware: [loggerMiddleware, ...getDefaultMiddleware()],
		preloadedState,
		enhancers: [],
	});

	return store;
}
