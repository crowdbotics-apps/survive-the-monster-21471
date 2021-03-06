import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings141487Navigator from '../features/Settings141487/navigator';
import Settings141470Navigator from '../features/Settings141470/navigator';
import Settings141436Navigator from '../features/Settings141436/navigator';
import Settings141419Navigator from '../features/Settings141419/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings141487: { screen: Settings141487Navigator },
Settings141470: { screen: Settings141470Navigator },
Settings141436: { screen: Settings141436Navigator },
Settings141419: { screen: Settings141419Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
