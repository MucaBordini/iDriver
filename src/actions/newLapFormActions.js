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

export const SET_ALL_FIELDS = 'SET_ALL_FIELDS';
export const setAllFields = volta => ({
    type: SET_ALL_FIELDS,
    volta: volta
});

export const RESET_FORM = 'RESET_FORM';
export const resetForm = () => ({
    type: RESET_FORM
})

export const saveLap = lap => {
    const { currentUser } = firebase.auth();
    return async dispatch => {
        if (lap.id) {
            await firebase
            .database()
            .ref(`/users/${currentUser.uid}/laps/${lap.id}`)
            .set(lap);
            dispatch(lapSavedSucess());
        } else {
            await firebase
            .database()
            .ref(`/users/${currentUser.uid}/laps`)
            .push(lap);
            dispatch(lapSavedSucess());
        }
    }
}