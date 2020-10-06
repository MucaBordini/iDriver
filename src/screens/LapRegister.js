import React from 'react';
import { View, ScrollView, TextInput, StyleSheet, Alert, Button, Picker, Text, ActivityIndicator, Image, TouchableOpacity, PermissionsAndroid } from 'react-native';
import FormRow from '../components/FormRow';
import { connect } from 'react-redux';
import { setField, saveLap, setAllFields, resetForm } from '../actions';
import { RNCamera } from 'react-native-camera';
import CameraRollPicker from 'react-native-camera-roll-picker';
import ImgToBase64 from 'react-native-image-base64';

class LapRegister extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            isCamera: false,
            isCameraRoll: false,
            permission: ''
        }
    }

    componentDidMount() {

        const { navigation, setAllFields, resetForm } = this.props;
        const { params } = navigation.state;

        //this.requestExternalStorageAccess();

        if (params && params.voltaToEdit) {
            setAllFields(params.voltaToEdit)
        } else {
            resetForm();
        }
    }

    viewGallery() {
        
        return(
            <CameraRollPicker 
                maximum={1}
                selectSingleItem={true}
                callback={ (photo) => {
                    if(photo.length > 0) {
                        console.log(photo);
                        ImgToBase64.getBase64String(photo[0].uri)
                        .then(stringConvertida => {
                            this.props.setField('img', stringConvertida)
                        })
                        .catch( err => {
                            console.log(err)
                        })
                    }

                    this.setState({
                        isCameraRoll: false,
                    })

                }}
            />
        )
    }

    async requestExternalStorageAccess() {
        try {
            const permission = await PermissionsAndroid
            .request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE)
            console.log(this.props.permission)
            if(permission !== PermissionsAndroid.RESULTS.GRANTED) {
                Alert.alert('ERRO', 'Permissão negada');
            }
        } catch(err) {
            console.log(err)
        }
    }

    viewCamera() {
        return (
            <View style={styles.container}>
                <RNCamera 
                    ref={ref => {
                        this.camera = ref
                    }}
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.on}
                    androidCameraPermissionOptions={{
                        title: 'Permission to use camera',
                        message: 'É necessária a sua permissão para acessar a câmera',
                        buttonPositive: 'Aceito',
                        buttonNegative: 'Cancelar'
                    }}
                    androidRecordAudioPermissionOptions={{
                        title: 'Permission to record audio',
                        message: 'É necessária a sua permissão para gravar áudios',
                        buttonPositive: 'Aceito',
                        buttonNegative: 'Cancelar'
                    }}
                />
                <View>
                    <TouchableOpacity style={styles.capture} onPress={this.takePicture.bind(this)}>
                        <Text>Tirar Foto</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    takePicture = async() => {
        if(this.camera) {
            const options = { quality: 0.5, base64: true, forceUpOrientation: true, fixOrientation: true };
            const data = await this.camera.takePictureAsync(options);

            if(data) {
                this.props.setField('img', data.base64);

                this.setState({
                    isCamera: false,
                })
            }
        }
    }

    viewForm() {
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
                    <View>
                        {
                            lapForm.img ? 
                            <Image source={{ uri: `data:image/jpeg;base64,${lapForm.img}`}}
                            style={styles.img}
                            />
                            :
                            null
                        }
                        
                        <Button 
                            title="Capturar Imagem"
                            onPress={ () => {
                                this.requestExternalStorageAccess();
                                Alert.alert(
                                    'Captura de Imagem',
                                    'Tirar uma foto ou buscar na galeria?',
                                    [
                                        {
                                            text: 'Camera',
                                            onPress: () => {
                                                this.setState({isCamera: true})
                                            }
                                        },
                                        {
                                            text: 'Galeria',
                                            onPress: () => {
                                                this.setState({isCameraRoll: true})
                                            }
                                        }
                                    ]
                                )
                            }} 
                        />
                    </View>
                    {/* <TextInput 
                        style={styles.textInput}
                        placeholder="URL da imagem"
                        value={lapForm.img}
                        onChangeText={value => setField('img', value)}
                    /> */}
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

    render() {
        if(this.state.isCameraRoll) {
            return(this.viewGallery())
        }

        if(this.state.isCamera) {
            return(this.viewCamera())
        }
        return(this.viewForm())
    }
}

const styles = StyleSheet.create({
    textInput: {
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        paddingLeft: 10,
        paddingRight: 10,
    },
    img: {
        aspectRatio: 1,
        width: '100%'
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black'
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    capture: {
        flex: 0,
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20
    }
});

const mapStateToProps = (state) => {
    return({
        lapForm: state.lapForm
    })
}

const mapDispatchToProps = {
    setField,
    saveLap,
    setAllFields,
    resetForm
}

export default connect(mapStateToProps, mapDispatchToProps)(LapRegister);