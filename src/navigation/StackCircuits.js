import { createStackNavigator, createAppContainer} from 'react-navigation';
import CircuitPage from '../screens/CircuitPage';
import CircuitDetail from '../screens/CircuitDetail';

const StackNavigator = createStackNavigator({
  'Circuitos': {
    screen: CircuitPage
  },
  'CircuitDetail': {
    screen: CircuitDetail ,
    navigationOptions: ({navigation}) => {
      const circuitName = navigation.state.params.circuit.name.first;
      return({
        title: circuitName,
        headerTitleStyle: {
          color: 'white',
          fontSize: 50,
          textAlign: 'center',
          flexGrow: 0.5,
        }
      })
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