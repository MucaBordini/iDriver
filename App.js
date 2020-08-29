import { createDrawerNavigator, createAppContainer} from 'react-navigation';
import StackLicense from './src/navigation/StackLicense';
import StackLaps from './src/navigation/StackLaps';
import StackCircuits from './src/navigation/StackCircuits';
// import CircuitPage from './src/screens/CircuitPage';
// import CircuitDetail from './src/screens/CircuitDetail';


const DrawerNavigator = createDrawerNavigator({
  'Minhas Voltas': {
    screen: StackLaps
  },
  'Circuitos': {
    screen: StackCircuits
  },
  'Carteira de iDriver': {
    screen: StackLicense
  },
  // 'CircuitDetail': {
  //   screen: CircuitDetail,
  // }
} , {
  drawerBackgroundColor: '#E13232',
  contentOptions: {
    inactiveTintColor: '#fff',
    activeTintColor: '#fff',
    activeBackgroundColor: '#E5C4C4',

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