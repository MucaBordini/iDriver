import React from 'react';
import { View, TextInput, StyleSheet, Alert, Button, Picker, Text } from 'react-native';
import FormRow from '../components/FormRow';

export default class LapRegister extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            selected: '',
            tempo: '',
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
                <Text>Escolha o circuito cadastrado:</Text>
                <Picker style={styles.textInput} selectedValue={this.state.selected} onValueChange={ itemValue => this.onChangeHandler('selected', itemValue)}>
                    <Picker.Item label="Barcelona" value="barcelona" />
                    <Picker.Item label="Monaco" value="monaco" />
                </Picker>
                
            </FormRow>
            
            <FormRow>
                <TextInput 
                    style={styles.textInput}
                    placeholder="Tempo de volta"
                    value={this.state.tempo}
                    onChangeText={valor => {
                        this.onChangeHandler('tempo', valor)
                    }}
                />
            </FormRow>
            
            <Button title={'CADASTRAR'} color="#E13232" onPress={() => {
                Alert.alert(this.state.nome);
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
})