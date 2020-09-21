import React from 'react';
import { 
    View, 
    TextInput,
    StyleSheet, 
    Button, 
    ActivityIndicator, 
    Text, 
    Alert, 
    Image
 } from 'react-native';
import FormRow from '../components/FormRow';
import firebase from 'firebase';
import { processLogin } from '../actions';
import { connect } from 'react-redux';

class Login extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            isLoading: false,
            message: ""
        }
    }


    componentDidMount() {
        var firebaseConfig = {
            apiKey: "AIzaSyB8ZVhOGT4klyuEqC2upk6yjy3via1jRGU",
            authDomain: "idriver-af684.firebaseapp.com",
            databaseURL: "https://idriver-af684.firebaseio.com",
            projectId: "idriver-af684",
            storageBucket: "idriver-af684.appspot.com",
            messagingSenderId: "149535213479",
            appId: "1:149535213479:web:7ba447926798e839b6d882"
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
    }

    onChangeHandler(field, valor) {
        this.setState({
            [field]: valor
        })
    }

    processLogin() {
        this.setState({ isLoading: true});
        const {email, password} = this.state;
        this.props.processLogin({email, password})
            .then( user => {
                if(user) {
                    this.props.navigation.replace('DrawerApp');
                } else {
                    this.setState({isLoading: false});
                }
                
            })
            .catch( error => {
                this.setState({message: error.code});
                this.setState({isLoading: false});
                Alert.alert("ERRO", this.getMessageByError(this.state.message));
            })
    }

    getMessageByError(code) {
        switch(code) {
            case "auth/user-not-found":
                return "Email não cadastrado!";
            case "auth/wrong-password":
                return "Senha incorreta!";
            case "auth/invalid-email":
                return "Preencha o campo E-mail corretamente!";
            case "auth/weak-password":
                return "Senha fraca, utilize uma senha mais forte!"
            default:
                return "Erro desconhecido!";
        }

    }

    renderButton() {
        if (this.state.isLoading) {
            return <ActivityIndicator/>
        }
        return (
            <View style={styles.buttonLogin}>
                <Button
                color="#E13232"
                title='Entrar' 
                onPress={() => this.processLogin()}
            />
            </View>
            
        )
    }

    render () {
        const banner = '../assets/bandeiraQuadriculada.png';
        return (
            <View style={styles.container}>
                <Image source={require(banner)} style={styles.bannerContainer}/>
                <View>
                    <FormRow>
                        <TextInput 
                            style={styles.textInput}
                            placeholder="E-mail: user@provider.com"
                            value={this.state.email}
                            onChangeText={valor => {
                                this.onChangeHandler('email', valor)
                            }}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </FormRow>
                    <FormRow>
                        <TextInput 
                            style={styles.textInput}
                            placeholder="Enter your password"
                            secureTextEntry
                            value={this.state.password}
                            onChangeText={valor => {
                                this.onChangeHandler('password', valor)
                            }}
                        />  
                    </FormRow>
                    { this.renderButton() }
                </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bannerContainer: {
        width: 500,
        marginLeft:-10
    },
    container: {
     
    },
    textInput: {
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'gray',
        paddingLeft: 10,
        paddingRight: 10,
    },
    buttonLogin: {
        width: 200,
        marginLeft: 100,
    }
});

export default connect(null, {processLogin})(Login)