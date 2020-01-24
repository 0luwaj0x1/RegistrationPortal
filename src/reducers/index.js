import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import vinRegistrationReducer from './vinRegistrationReducer';
import loadingReducer from './loadingReducer'

export default combineReducers({
 vins: vinRegistrationReducer,
 form: formReducer,
 loading: loadingReducer
});
