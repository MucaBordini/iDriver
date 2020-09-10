import React from 'react';
import CircuitListItem from './CircuitListItem';
import { FlatList, StyleSheet } from 'react-native';

const CircuitList = props => {
    const {circuit, onPressItem} = props;

    return(
            <FlatList 
                style={styles.container}
                data={circuit}
                renderItem={ ({item}) => (
                    <CircuitListItem 
                        circuit={item}
                        onPressItem={onPressItem} 
                    />
                )}
                keyExtractor={ (item, index) => item.name.first+index }
            />
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E5C4C4'
    }
})

export default CircuitList;