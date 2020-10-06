import firebase from 'firebase';
import { Alert } from 'react-native';

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

export const deleteLap = lap => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            Alert.alert(
                'Excluir!',
                `Deseja excluir a volta no circuito ${lap.circuit}?`,
                [
                    {
                        text: 'Não',
                        onPress: () => {
                            resolve(false);
                        },
                        style: 'cancel'
                    }, {
                        text: 'Sim',
                        onPress: async () => {
                            const { currentUser } = firebase.auth();
                            try {
                                await firebase
                                .database()
                                .ref(`/users/${currentUser.uid}/laps/${lap.id}`)
                                .remove();
                                resolve(true);
                            } catch (err) {
                                reject(err);
                            }
                        }
                    }
                ],
                {cancelable: false}
            )
        })
    }
}