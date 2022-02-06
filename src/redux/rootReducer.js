import { combineReducers } from 'redux';
import appReducer from './appSlice';
import weatherReducer from './todoSlice';

const rootReducer = combineReducers({
    app: appReducer,
    weather: weatherReducer
});

export default rootReducer;