import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native';
import LicenseDetail from '../components/LicenseDetail';
import EditButton from '../components/EditButton';

type Props = {};
export default class DriverLicense extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            driver: [],
            loading: false,
            error: false
        };
    }
    
    render() {
        return(
            <View style={styles.container}>
                <View>
                    <LicenseDetail />
                </View>
                
                <View>
                    <EditButton name={'Editar carteira iDriver'} nav={(parameters) => this.props.navigation.navigate(parameters)} page={'DriverEdit'}/>
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    container : {
        backgroundColor: '#E5C4C4'
    }
})
