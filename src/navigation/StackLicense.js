import { createStackNavigator, createAppContainer} from 'react-navigation';
import DriverLicense from '../screens/DriverLicense';

const StackNavigator = createStackNavigator({
  'Carteira iDriver': {
    screen: DriverLicense
  },
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