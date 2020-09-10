import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

const EditButton = props => {
    const {name, nav, page} = props;
    return(
            <View style={styles.container}>
                {/* <Image style={styles.stretch} source={{ uri: 'https://www.shareicon.net/data/128x128/2015/09/24/106374_folder_512x512.png'}}/>   */}
                <Button color="#E13232"
                title={name} onPress={() => {nav(page);}}/>
            </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E5C4C4'
    },
})

export default EditButton;