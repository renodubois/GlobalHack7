import { DrawerNavigator } from 'react-navigation';

import HomeComponent from './HomeComponent';
import Inbox from './message/Inbox';
import Conversation from './message/Conversation';
import SideBar from './SideBar';
import RecordMessage from './message/RecordMessage';

const NavOptions = {
    initialRouteName: 'Record',
    contentComponent: SideBar
};

export default DrawerNavigator({
    'Home': { screen: HomeComponent },
    'Current': { screen: Conversation },
    'History': { screen: Inbox },
    'Conversation': { screen: Conversation },
    'SideBar': { screen: SideBar },
    'Record' : { screen: RecordMessage }
}, NavOptions);