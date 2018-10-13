import * as React from 'react';
import { View } from 'react-native';
import MatchCard from './MatchCard';
// TODO: Grab matches from MobX store (and figure out what our data model should look like)
type Props = {};
type State = {};

export default class MatchContainer extends React.Component<Props, State> {
	render = (): JSX.Element => {
		const TestUser = {
			Name: "Michelle Smith",
			Distance: "14.6",
			ProfilePictureURL: "https://cdn.pixabay.com/photo/2015/09/09/22/04/woman-933684_960_720.jpg",
			CoverPhotoURL: "https://upload.wikimedia.org/wikipedia/commons/4/40/Italian_Risotto.png",
			UserID: "1234",
			
		};
		return (
			<View style={{ flex:1 }}>
				<MatchCard {...TestUser} />
			</View>
		)
	}
}