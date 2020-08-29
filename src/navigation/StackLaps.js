import { createStackNavigator, createAppContainer} from 'react-navigation';
import LapsPage from '../screens/LapsPage';
import MenuButton from '../components/MenuButton';
import React from 'react';

const StackNavigator = createStackNavigator({
  'Minhas Voltas/Trajetos': {
    screen: LapsPage
  },
} , {
  defaultNavigationOptions: {
    title:  'iDriver',
    headerLeft: (
        <MenuButton />
    ),
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
  }
});

const AppContainer = createAppContainer(StackNavigator);

export default AppContainer;