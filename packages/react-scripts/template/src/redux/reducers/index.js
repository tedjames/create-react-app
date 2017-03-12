import { combineReducers } from 'redux'
// Individual Reducers
import ExampleReducer from './exampleReducer'

// Combine Reducers
const rootReducer = combineReducers({
  example: ExampleReducer,
});

export default rootReducer;
