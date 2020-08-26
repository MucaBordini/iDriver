import React from 'react';
import LapsListItem from './LapsListItem';
import { FlatList, StyleSheet } from 'react-native';

const LapsList = props => {
    

    return(
        <FlatList 
            style={styles.container}
            renderItem={ 
                <LapsListItem />
            }
        />
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E5C4C4'
    }
})

export default LapsList;