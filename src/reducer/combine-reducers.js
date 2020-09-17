import {combineReducers} from 'redux';
import {widgetReducer} from "./widget-reducer";

export default combineReducers({
  widget: widgetReducer,
});