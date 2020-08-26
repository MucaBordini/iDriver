import { createDrawerNavigator, createStackNavigator, createAppContainer} from 'react-navigation';
import DriverLicense from './src/screens/DriverLicense';
import LapsPage from './src/screens/LapsPage';
import CircuitPage from './src/screens/CircuitPage';
import CircuitDetail from './src/screens/CircuitDetail';


const DrawerNavigator = createDrawerNavigator({
  'Minhas Voltas': {
    screen: LapsPage
  },
  'Circuitos': {
    screen: CircuitPage
  },
  'Carteira de iDriver': {
    screen: DriverLicense
  },
  'CircuitDetail': {
    screen: CircuitDetail,
  }
});
// const StackNavigator = createStackNavigator({
//   // 'Login': {
//   //   screen: DriverLogin
//   // },
//   'Main': {
//     screen: DriverPage
//   },
//   'DriverDetail': {
//     screen: DriverDetail ,
//     navigationOptions: ({navigation}) => {
//       const driverName = navigation.state.params.driver.name.first;
//       return({
//         title: driverName,
//         headerTitleStyle: {
//           color: 'white',
//           fontSize: 50,
//           textAlign: 'center',
//           flexGrow: 0.5,
//         }
//       })
//     }
//   }
// } , {
//   defaultNavigationOptions: {
//     title:  'iDriver',
//     headerTitleStyle: {
//       color: 'white',
//       fontSize: 50,
//       flexGrow: 1,
//       textAlign: 'center'
//     },
//     headerStyle: {
//       backgroundColor: '#E13232',
//       borderBottomWidth: 1,
//       borderBottomColor: '#C5C5C5'
//     }
//   }
// });

const AppContainer = createAppContainer(DrawerNavigator);

export default AppContainer;