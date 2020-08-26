import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = (props) => {
    <View style={styles.header}>
        <Text>iDriver</Text>
    </View>
};

const styles = StyleSheet.create({
    header: {
        marginTop: 25,
        backgroundColor: '#E5C4C4',
        color: 'white'
    }
})

export default Header;