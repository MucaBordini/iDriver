import React from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class MenuButton extends React.Component {
    render() {
        return(
            <Icon 
                name="menu"
                color="#FFFFFF"
                size={32}
                style={styles.menuIcon}
                onPress={() => this.props.navigation.openDrawer()}
            />
        )
    }
}

const styles = StyleSheet.create({
    menuIcon: {
        zIndex: 9,
        position: 'absolute',
        top: 10,
        left: 20
    }
})