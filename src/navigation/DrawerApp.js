import { createDrawerNavigator, createAppContainer} from 'react-navigation';
import StackLicense from './StackLicense';
import StackLaps from './StackLaps';
import StackCircuits from './StackCircuits';


const DrawerNavigator = createDrawerNavigator({
  'Minhas Voltas': {
    screen: StackLaps
  },
  'Circuitos': {
    screen: StackCircuits
  },
  'Carteira de iDriver': {
    screen: StackLicense
  }
} , {
  drawerBackgroundColor: '#E13232',
  contentOptions: {
    inactiveTintColor: '#fff',
    activeTintColor: '#fff',
    activeBackgroundColor: '#E5C4C4',

  }
});


const AppContainer = createAppContainer(DrawerNavigator);

export default AppContainer;