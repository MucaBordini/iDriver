import firebase from 'firebase';

export const SET_VOLTAS = 'SET_VOLTAS';

const setVoltas = voltas => ({
    type: SET_VOLTAS,
    voltas: voltas
})

export const myLaps = () => {
    const { currentUser } = firebase.auth();
    return dispatch => {
        firebase
        .database()
        .ref(`/users/${currentUser.uid}/laps`)
        .on('value', snapshot => {
            const voltas = snapshot.val();
            const action = setVoltas(voltas);
            dispatch(action);
        })
    }
}