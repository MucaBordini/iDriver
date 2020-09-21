import { SET_FIELD } from '../actions';

const INITIAL_STATE = {
    circuit: '',
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
        default:
            console.log(action.type);
            return state;
    }
}