import React from 'react';
import { TouchableOpacity, View, Image, StyleSheet, Text } from 'react-native';

export default class LapsListItem extends React.Component {

    render() {
        <TouchableOpacity>
            <View style={styles.line}>
                <Text style={styles.linetext}>Circuito de Londrina</Text>
            </View>
        </TouchableOpacity>
    }
        
}

const styles = StyleSheet.create({
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
        alignItems: 'center',
        flexDirection: 'row'
    },
    linetext: {
        fontSize: 18,
        paddingLeft: 15,
        flex: 7
    },
    avatar: {
        aspectRatio: 1,
        flex: 1,
        marginLeft: 15,
        borderRadius: 15
    }
})