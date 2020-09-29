import { SET_VOLTAS } from '../actions/lapsActions';

//const INITIAL_STATE = voltas;

export default function(state = null, action) {
    switch(action.type) {
        case SET_VOLTAS:
            return action.voltas;
        default:
            return state;
    }
}