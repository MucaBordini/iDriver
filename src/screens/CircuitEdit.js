import React from 'react';
import { View, TextInput, StyleSheet, Alert, Button } from 'react-native';
import FormRow from '../components/FormRow';

export default class CircuitEdit extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            nome: "",
            estado: "",
            cidade: "",
            tamanho: ""
        }
    }

    onChangeHandler(field, valor) {
        this.setState({
            [field]: valor
        })
    }

    render() {
        return(
        <View>
            <FormRow>
                <TextInput 
                    style={styles.textInput}
                    placeholder="Nome"
                    value={this.state.nome}
                    onChangeText={valor => {
                        this.onChangeHandler('nome', valor)
                    }}
                />
            </FormRow>
            
            <FormRow>
                <TextInput 
                    style={styles.textInput}
                    placeholder="Cidade"
                    value={this.state.cidade}
                    onChangeText={valor => {
                        this.onChangeHandler('cidade', valor)
                    }}
                />
            </FormRow>
            
            <FormRow>
                <TextInput 
                    style={styles.textInput}
                    placeholder="Estado"
                    value={this.state.estado}
                    onChangeText={valor => {
                        this.onChangeHandler('estado', valor)
                    }}
                />
            </FormRow>
            
            <FormRow>
                <TextInput 
                    style={styles.textInput}
                    placeholder="Tamanho"
                    keyboardType={'number-pad'}
                    value={this.state.tamanho}
                    onChangeText={valor => {
                        this.onChangeHandler('tamanho', valor)
                    }}
                />
            </FormRow>
            <Button title={'Salvar edição'} color="#E13232" onPress={() => {
                console.log(this.state.nome);
                console.log(this.state.pais);
                console.log(this.state.estado);
                console.log(this.state.cidade);
                console.log(this.state.tamanho);
            }}/>
        </View>
        )
        
    }
}

const styles = StyleSheet.create({
    textInput: {
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        paddingLeft: 10,
        paddingRight: 10,
    },
    button: {
        width: 200,
        marginLeft: 100,
    }
})