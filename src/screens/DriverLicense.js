import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LicenseDetail from '../components/LicenseDetail';
import axios from 'axios';

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
                <LicenseDetail />
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    container : {
        backgroundColor: '#E5C4C4'
    }
})
