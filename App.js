import { createStackNavigator, createAppContainer} from 'react-navigation';
import Login from './src/screens/Login';
import DrawerApp from './src/navigation/DrawerApp';

const StackNavigator = createStackNavigator({
  'Login': {
    screen: Login
  },
  'DrawerApp': {
    screen: DrawerApp ,
    navigationOptions: {
      header: null
    }
  }
} , {
  defaultNavigationOptions: {
    title:  'iDriver',
    headerTitleStyle: {
      color: 'white',
      fontSize: 50,
      flexGrow: 1,
      textAlign: 'center'
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