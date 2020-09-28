import firebase from 'firebase';

export const SET_FIELD = 'SET_FIELD';

export const setField = (field, value) => {
    return {
        type: SET_FIELD,
        field,
        value,
    }
}

export const LAP_SAVED_SUCESS = 'LAP_SAVED_SUCESS';
export const lapSavedSucess = () => {
    return {
        type:LAP_SAVED_SUCESS
    }
}

export const saveLap = lap => {
    const { currentUser } = firebase.auth();
    return async dispatch => {
        await firebase
        .database()
        .ref(`/users/${currentUser.uid}/laps`)
        .push(lap);
        dispatch(lapSavedSucess());
    }
}