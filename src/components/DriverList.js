import React from 'react';
import DriverListItem from './DriverListItem';
import { FlatList, StyleSheet } from 'react-native';

const DriverList = props => {
    const {driver, onPressItem} = props;

    return(
        <FlatList 
            style={styles.container}
            data={driver}
            renderItem={ ({item}) => (
                <DriverListItem 
                    driver={item}
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

export default DriverList;