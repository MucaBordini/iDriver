import React from 'react';
import Line from '../components/Line';
import { View, StyleSheet, Image } from 'react-native';

const LicenseDetail = props => {
    const driverPhoto = '../assets/userImg.png';
    return(
        <View style={styles.container}>
            <Image source={require(driverPhoto)} style={styles.avatar}/>
            <View style={styles.detailContainer}>
                <Line label='Nome: ' content='Samuel'/>
                <Line label='Cidade: ' content='Valinhos'/>
                <Line label='Estado: ' content='SP'/>
                <Line label='Carro: ' content='Honda Fit'/>
                <Line label='Idade: ' content='23'/>
            </View>
        </View>
    ) 
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingTop: 10,
        backgroundColor: '#E5C4C4'
    },
    avatar: {
        aspectRatio: 1,
        borderRadius: 50
    },
    detailContainer: {
        backgroundColor: '#E13232',
        marginTop: 7,
        marginBottom: 9,
        elevation: 1,
    }
});

export default LicenseDetail

