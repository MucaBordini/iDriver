import React from 'react';
import { TouchableOpacity, View, Image, StyleSheet, Text } from 'react-native';

const CircuitListItem = props => {
    const {circuit, onPressItem} = props;
    const {title, first, last} = circuit.name;
    const {thumbnail} = circuit.picture;

    return(
        <TouchableOpacity onPress={() => {onPressItem({circuit});}}>
            <View style={styles.line}>
                <Image source={{uri: thumbnail}} style={styles.avatar}/>
                <Text style={styles.linetext}>{first + ' ' + last}</Text>
            </View>
        </TouchableOpacity>
    )
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

export default CircuitListItem;