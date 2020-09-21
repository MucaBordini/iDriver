import { createStackNavigator, createAppContainer} from 'react-navigation';
import LapsPage from '../screens/LapsPage';
import LapRegister from '../screens/LapRegister';
import MenuButton from '../components/MenuButton';
import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LapDetail from '../screens/LapDetail';

const StackNavigator = createStackNavigator({
  'Minhas Voltas/Trajetos': {
    screen: LapsPage
  },
  'LapDetail': {
    screen: LapDetail
  },
  'LapRegister': {
    screen: LapRegister
  }
} , {
  defaultNavigationOptions: ({navigation}) => ({
    title:  'iDriver',
    // headerLeft: () => (
    //   // <TouchableOpacity onPress={() => {navigation.openDrawer()}}>
    //   //   <View>
    //   //   <Image style={styles.stretch} source={{uri: 'https://www.royalposthumus.com/images/white_menu_icon.png'}} />
    //   //   </View>
        
    //   // </TouchableOpacity>
      
    //   // <MenuButton navigate={navigation}/>
    // )/*<MenuButton navigate={navigation.navigate}/>*/,
    headerTitleStyle: {
      color: 'white',
      fontSize: 50,
      flexGrow: 1,
      textAlign: 'center',
    },
    headerStyle: {
      backgroundColor: '#E13232',
      borderBottomWidth: 1,
      borderBottomColor: '#C5C5C5'
    }
  }),
  // navigationOptions: ({ navigation }) => ({
  //   headerRight: 
  // })
  
});

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center'
    },
  stretch: {
      width: 40,
      height: 40,
      resizeMode: 'stretch',
    },
})

const AppContainer = createAppContainer(StackNavigator);

export default AppContainer;