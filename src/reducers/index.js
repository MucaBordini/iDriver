import { combineReducers } from 'redux';
import newLapForm from './newLapForm';
import userReducer from './userReducer';
import voltaReducer from './voltaReducer';

export default combineReducers({
    user: userReducer,
    lapForm: newLapForm,
    listaVoltas: voltaReducer,
});