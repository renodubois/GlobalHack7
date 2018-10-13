import { DrawerNavigator } from 'react-navigation'

import MatchContainer from './MatchContainer'

const NavOptions = {
    initialRouteName: 'Home',
};

export default DrawerNavigator({
    Home: { screen: MatchContainer }
}, NavOptions);