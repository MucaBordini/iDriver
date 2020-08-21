import React, { Component } from 'react';
import DriverList from '../components/DriverList';
import axios from 'axios';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';

type Props = {};
export default class DriverPage extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            driver: [],
            loading: false,
            error: false
        };
    }

    componentDidMount() {
        this.setState({loading: true});
        axios
        .get('https://randomuser.me/api/?nat=br&results=10')
        .then(response => {
            const {results} = response.data;
            this.setState({
                driver: results,
                loading: false
            })
        })
        .catch(error => {
            this.setState({
                error: true,
                loading: false
            })
        });
    }

    renderList() {
        const textElements = this.state.driver.map(driver => {
            const {first} = driver.name;
            return <Text key={first}>{first}</Text>
        });
        return textElements;
    }

    render() {
        return (
            <View style={styles.container}>
                {
                    this.state.loading  ? 
                    <ActivityIndicator size="large" color="#CECECE" />
                    :
                    this.state.error ?
                    <Text style={styles.error}>ERRO AO CARREGAR A LISTA DE PILOTOS!</Text>
                    :
                    <DriverList
                    driver={this.state.driver}
                    onPressItem={(parameters) => this.props.navigation.navigate('DriverDetail', parameters)}
                    />
                }
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
    }
  })