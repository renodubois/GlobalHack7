import * as React from 'react';
import { View } from 'react-native';
import MatchCard from './MatchCard';
// TODO: Grab matches from MobX store (and figure out what our data model should look like)
type Props = {};
type State = {};

export default class MatchContainer extends React.Component<Props, State> {
	render = (): JSX.Element => {
		const TestUser = {
			Name: "John Doe",
			Distance: "14.6",
			ProfilePictureURL: "http://networthcelebrities.com/wp-content/uploads/2015/11/Bernie-Sanders_6.jpg",
			CoverPhotoURL: "http://www.ishwarcenter.org/images/newsletters/american-flag.png",
			UserID: "1234"
		};
		return (
			<View style={{ flex:1 }}>
				<MatchCard {...TestUser} />
			</View>
		)
	}
}