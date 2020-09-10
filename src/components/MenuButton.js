import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class MenuButton extends React.Component {
    render() {
        //var image = require('https://icon-library.com/images/android-hamburger-menu-icon/android-hamburger-menu-icon-20.jpg');
        //console.log(image);
        return(
            <TouchableOpacity onPress={() => {console.log(this.props.navigate.openDrawer); this.props.navigate.openDrawer()}}>
                <View style={styles.container}>
                <Image style={styles.stretch} source={{uri: 'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png'}} />
                    {/* <Icon
                    name="menu"
                    color="#FFFFFF"
                    size={32}
                    style={styles.menuIcon}
                    /> */}
                </View>
            </TouchableOpacity>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
      },
    stretch: {
        width: 100,
        height: 100,
        resizeMode: 'stretch',
      },
})