import { createStore, compose,applyMiddleware } from 'redux';
import logger from 'redux-logger';

import { RootReducer } from "./RootReducer";

const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));


export const Store = createStore(RootReducer,undefined,composedEnhancers);