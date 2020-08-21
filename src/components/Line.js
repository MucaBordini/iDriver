import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Line = ( { label, content="-" } ) => {
    return(
        <View style={styles.line}>
            <Text style={[styles.label,
                          styles.cell,
                          label.length > 8 ? styles.longLabel : null
                        ]}>{label}</Text>
            <Text style={[styles.cell, styles.content]}>{content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    line: {
        flexDirection: 'row',
        paddingTop: 3,
        paddingBottom: 3,
        borderWidth: 1,
        borderColor: '#C5C5C5'
    },
    cell: {
        paddingLeft: 5,
        fontSize: 16
    },
    label: {
        color: 'white',
        fontWeight: 'bold',
        flex: 1
    },
    content: {
        color: 'white',
        flex: 3
    },
    longLabel: {
        color: 'white',
        fontSize: 12
    }
});

export default Line