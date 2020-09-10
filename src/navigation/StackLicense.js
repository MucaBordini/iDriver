import { createStackNavigator, createAppContainer} from 'react-navigation';
import DriverLicense from '../screens/DriverLicense';
import DriverEdit from '../screens/DriverEdit';

const StackNavigator = createStackNavigator({
  'Carteira iDriver': {
    screen: DriverLicense
  },
  'DriverEdit': {
    screen: DriverEdit
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