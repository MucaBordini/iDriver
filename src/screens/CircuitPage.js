import React, { Component } from 'react';
import CircuitList from '../components/CircuitList';
import AddButton from '../components/AddButton';
import axios from 'axios';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';

type Props = {};
export default class CircuitPage extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            circuit: [],
            loading: false,
            error: false
        };
    }

    componentDidMount() {
        this.setState({loading: true});
        axios
        .get('https://randomuser.me/api/?nat=br&results=20')
        .then(response => {
            console.log(response.data);
            const {results} = response.data;
            this.setState({
                circuit: results,
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
        const textElements = this.state.circuit.map(circuit => {
            const {first} = circuit.name;
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
                    <Text style={styles.error}>ERRO AO CARREGAR A LISTA DE CIRCUITOS!</Text>
                    :
                    <CircuitList
                    circuit={this.state.circuit}
                    onPressItem={(parameters) => this.props.navigation.navigate('CircuitDetail', parameters)}
                    />
                }
                {
                    this.state.error || this.state.loading ?
                    null
                    :
                    <AddButton name={'Registrar novo Circuito'} page={'CircuitRegister'} nav={(parameters) => this.props.navigation.navigate(parameters)}/>
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