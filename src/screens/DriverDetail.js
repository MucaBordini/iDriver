import React from 'react';
import Line from '../components/Line';
import { View, StyleSheet, Image } from 'react-native';

export default class DriverDetail extends React.Component  {
    render() {
        const { driver } = this.props.navigation.state.params;
        const picURL = driver.picture.large;

        return(
            <View style={styles.container}>
                <Image source={{ uri: picURL }} style={styles.avatar}/>
                <View style={styles.detailContainer}>
                    <Line label='Email: ' content={driver.email}/>
                    <Line label='Cidade: ' content={driver.location.city}/>
                    <Line label='Estado: ' content={driver.location.state}/>
                    <Line label='Cel: ' content={driver.cell}/>
                    <Line label='Nacionalidade: ' content={driver.nat}/>
                </View>
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
    }
});