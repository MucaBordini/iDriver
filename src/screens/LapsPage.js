import React, { Component } from 'react';
import LapsList from '../components/LapsList';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';

type Props = {};
export default class LapsPage extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            laps: [],
            loading: false,
            error: false
        };
    }


    render() {
        return (
            <View style={styles.container}>
                
                    
                    <Text style={styles.linetext}>AQUI DEVEM FICAR AS VOLTAS REGISTRADAS PELO USUÁRIO</Text>
                    <LapsList/>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    error: {
      fontSize: 20,
      color: 'red',
      alignSelf: 'center'
    },
    linetext: {
        backgroundColor: '#E5C4C4',
        color: 'white',
        fontSize: 42,
        paddingLeft: 15,
        flex: 7
    },

  })