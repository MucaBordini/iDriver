import { combineReducers } from 'redux';
import newLapForm from './newLapForm';
import userReducer from './userReducer';

export default combineReducers({
    user: userReducer,
    lapForm: newLapForm
});