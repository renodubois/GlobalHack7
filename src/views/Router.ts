import { DrawerNavigator } from 'react-navigation'

import HomeComponent from './HomeComponent'
import Inbox from './message/Inbox'

const NavOptions = {
    initialRouteName: 'Inbox',
};

export default DrawerNavigator({
    Home: { screen: HomeComponent },
    Inbox: { screen: Inbox },
}, NavOptions);