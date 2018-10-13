import { DrawerNavigator } from 'react-navigation'

import HomeComponent from './HomeComponent'

const NavOptions = {
    initialRouteName: 'Home',
};

export default DrawerNavigator({
    Home: { screen: HomeComponent }
}, NavOptions);