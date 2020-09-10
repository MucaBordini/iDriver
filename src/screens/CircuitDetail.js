import React from 'react';
import Line from '../components/Line';
import { View, StyleSheet, Image } from 'react-native';
import EditButton from '../components/EditButton';

export default class CircuitDetail extends React.Component  {
    render() {
        const { circuit } = this.props.navigation.state.params;
        const picURL = circuit.picture.large;

        return(
            <View style={styles.container}>
                <Image source={{ uri: picURL }} style={styles.avatar}/>
                <View style={styles.detailContainer}>
                    <Line label='Nome do circuito: ' content={circuit.email}/>
                    <Line label='Cidade: ' content={circuit.location.city}/>
                    <Line label='Estado: ' content={circuit.location.state}/>
                    <Line label='Tamanho: ' content='5250m'/>
                </View>
                <EditButton name={'Editar circuito'} nav={(parameters) => this.props.navigation.navigate(parameters)} page={'CircuitEdit'}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: '#E5C4C4'
    },
    avatar: {
        aspectRatio: 1,
        borderRadius: 15
    },
    detailContainer: {
        backgroundColor: '#E13232',
        marginTop: 20,
        elevation: 1,
        marginBottom: 20
    }
});