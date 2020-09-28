import { SET_FIELD, LAP_SAVED_SUCESS } from '../actions';

const INITIAL_STATE = {
    circuit: 'Autódromo Ayrton Senna',
    laptime: '',
    date: '',
    img: ''
}

export default function (state = INITIAL_STATE, action) {
    switch(action.type) {
        case SET_FIELD:
            const clonedState = {...state};
            clonedState[action.field] = action.value;
            return clonedState;
        case LAP_SAVED_SUCESS:
            return INITIAL_STATE;
        default:
            return state;
    }
}