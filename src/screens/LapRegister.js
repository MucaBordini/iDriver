import React from 'react';
import { View, TextInput, StyleSheet, Alert, Button, Picker, Text } from 'react-native';
import FormRow from '../components/FormRow';
import { connect } from 'react-redux';
import { setField } from '../actions'

const LapRegister = ({lapForm, setField}) => (
    <View>
        {/* <FormRow>
            <Text>Escolha o circuito cadastrado:</Text>
            <Picker style={styles.textInput} selectedValue={this.state.selected} onValueChange={ itemValue => this.onChangeHandler('selected', itemValue)}>
                <Picker.Item label="Barcelona" value="barcelona" />
                <Picker.Item label="Monaco" value="monaco" />
            </Picker>
            
        </FormRow> */}
        
        <FormRow>
            <TextInput 
                style={styles.textInput}
                placeholder="Tempo de volta"
                value={lapForm.circuit}
                onChangeText={value => setField('circuit', value)}
            />
        </FormRow>
        
        <Button title={'CADASTRAR'} color="#E13232" onPress={() => {
            Alert.alert(this.state.nome);
        }}/>
    </View>
);

const styles = StyleSheet.create({
    textInput: {
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        paddingLeft: 10,
        paddingRight: 10,
    },
})

const mapStateToProps = (state) => {
    return({
        lapForm: state.lapForm
    })
}

const mapDispatchToProps = {
    setField
}

export default connect(mapStateToProps, mapDispatchToProps)(LapRegister);