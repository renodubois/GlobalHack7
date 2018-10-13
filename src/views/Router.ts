import { DrawerNavigator } from 'react-navigation'

import HomeComponent from './HomeComponent'
import Inbox from './message/Inbox'

const NavOptions = {
    initialRouteName: 'Home',
};

export default DrawerNavigator({
    Home: { screen: HomeComponent },
    History: { screen: Inbox },
}, NavOptions);