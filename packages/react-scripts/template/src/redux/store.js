import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'

// Default Redux Store
const defaultState = {};

// Initialize Store using Middleware
const createStoreWithMiddleware = applyMiddleware()(createStore);

// Remember to remove REDUX_DEVTOOLS_EXTENSION when deploying to production
const store = createStoreWithMiddleware(rootReducer, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
