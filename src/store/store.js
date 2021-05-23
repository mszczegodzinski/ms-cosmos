import { configureStore } from '@reduxjs/toolkit';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

export default function configureAppStore(preloadedState) {
	const store = configureStore({
		reducer: rootReducer,
		middleware: [logger, thunk],
		preloadedState,
		enhancers: [],
	});

	return store;
}
