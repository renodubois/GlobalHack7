import { DrawerNavigator, DrawerNavigatorConfig } from 'react-navigation';

import HomeComponent from './HomeComponent';
import MatchContainer from './MatchContainer';
import RecordMatchMessage from './RecordMatchMessage';

const NavOptions: DrawerNavigatorConfig = {
    initialRouteName: 'Home',
};

export default DrawerNavigator({
    Home: { screen: HomeComponent },
    Matches: { screen: MatchContainer },
    RecordMatchMessage: { screen: RecordMatchMessage }
}, NavOptions);