import React from 'react';
import { Text, View, TextInput, StyleSheet, Alert, Button } from 'react-native';
import FormRow from '../components/FormRow';

export default class CircuitRegister extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            nome: "",
            pais: "",
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
                    placeholder="Nome do circuito"
                    value={this.state.nome}
                    onChangeText={valor => {
                        this.onChangeHandler('nome', valor)
                    }}
                />
            </FormRow>
            
            <FormRow>
                <TextInput 
                    style={styles.textInput}
                    placeholder="País do circuito"
                    value={this.state.pais}
                    onChangeText={valor => {
                        this.onChangeHandler('pais', valor)
                    }}
                />
            </FormRow>
            
            <FormRow>
                <TextInput 
                    style={styles.textInput}
                    placeholder="Estado do circuito"
                    value={this.state.estado}
                    onChangeText={valor => {
                        this.onChangeHandler('estado', valor)
                    }}
                />
            </FormRow>
            
            <FormRow>
                <TextInput 
                    style={styles.textInput}
                    placeholder="Cidade do circuito"
                    value={this.state.cidade}
                    onChangeText={valor => {
                        this.onChangeHandler('cidade', valor)
                    }}
                />
            </FormRow>
            
            <FormRow>
                <TextInput 
                    style={styles.textInput}
                    placeholder="Tamanho do circuito"
                    keyboardType={'number-pad'}
                    value={this.state.tamanho}
                    onChangeText={valor => {
                        this.onChangeHandler('tamanho', valor)
                    }}
                />
            </FormRow>
            <Button title={'CADASTRAR'} color="#E13232" onPress={() => {
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