import React from 'react';
import { View, ScrollView, TextInput, StyleSheet, Alert, Button, Picker, Text, ActivityIndicator } from 'react-native';
import FormRow from '../components/FormRow';
import { connect } from 'react-redux';
import { setField, saveLap } from '../actions'

class LapRegister extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: false
        }
    }

    render() {
        const { lapForm, setField, saveLap, navigation } = this.props;
        return(
            <ScrollView>
                <FormRow>
                    <Text>Escolha o circuito cadastrado:</Text>
                    <Picker style={styles.textInput} 
                            selectedValue={lapForm.circuit} 
                            onValueChange={(itemValue) => {
                                setField('circuit', itemValue)
                                } 
                            }>
                        <Picker.Item label="Autódromo Ayrton Senna" value="Autódromo Ayrton Senna" />
                        <Picker.Item label="Autódromo Interlagos" value="Autódromo Interlagos" />
                        <Picker.Item label="Circuit de Catalunya" value="Circuit de Catalunya" />
                        <Picker.Item label="Circuit de Monaco" value="Circuit de Monaco" />
                        <Picker.Item label="Circuit Jacques Villeneuve" value="Circuit Jacques Villeneuve" />
                        
                    </Picker>
                    
                </FormRow>
                
                <FormRow>
                    <TextInput 
                        style={styles.textInput}
                        placeholder="Tempo de volta"
                        value={lapForm.laptime}
                        onChangeText={value => setField('laptime', value)}
                    />
                </FormRow>

                <FormRow>
                    <TextInput 
                        style={styles.textInput}
                        placeholder="Data da volta"
                        value={lapForm.date}
                        onChangeText={value => setField('date', value)}
                    />
                </FormRow>

                <FormRow>
                    <TextInput 
                        style={styles.textInput}
                        placeholder="URL da imagem"
                        value={lapForm.img}
                        onChangeText={value => setField('img', value)}
                    />
                </FormRow>
                
                { 
                    this.state.isLoading ?
                    <ActivityIndicator/>
                    :
                    <View style={styles.buttonLogin}>   
                        <Button title={'CADASTRAR'} color="#E13232" onPress={async () => {
                            this.setState({isLoading: true})
                            try {
                                await saveLap(lapForm);
                                navigation.goBack();
                            } catch (error) {
                                Alert.alert('ERRO!', error.message);
                            } finally {
                                this.setState({isLoading: false})
                            }
                        }}/>
                    </View>
                }

            </ScrollView>
        );
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

const mapStateToProps = (state) => {
    return({
        lapForm: state.lapForm
    })
}

const mapDispatchToProps = {
    setField,
    saveLap
}

export default connect(mapStateToProps, mapDispatchToProps)(LapRegister);