import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import MatchCard from './MatchCard';
import { Match } from '../types/match';
// TODO: Grab matches from MobX store (and figure out what our data model should look like)
type NavigationProps = {
	Matches: Match[]
};
type Props = {
	navigation: NavigationScreenProp<{}, NavigationProps>
};
type State = {};

@inject('MatchStore')
@observer
export default class MatchContainer extends React.Component<Props, State> {
	// TODO: Figure out how to type the navigation function
	OnMatchLike = (UserID: string, navigate: any) => {
		// TODO: render voice recording screen for matched UserID
		navigate("RecordMatchMessage", { UserID: UserID });
	}

	OnMatchDislike = (UserID: string, navigate: any) => {
		// TODO: render next match
	}

	render = (): JSX.Element | null => {
		if (this.props.MatchStore) {
			console.log("MatchStore", this.props.MatchStore);
			const Matches = this.props.MatchStore.Matches;
			console.log("Matches", Matches);
			console.log("First Match", Matches[0]);
			if (Matches.length < 1) {
				// TODO: better language here
				return (
					<Text>Looks like you're all out of matches! Check back later for more!</Text>
				)
			}
			const ActiveMatch = Matches[0];
			return (
				<View style={{ flex:1 }}>
					<MatchCard {...ActiveMatch} Active={true} OnLike={this.OnMatchLike} OnDislike={this.OnMatchDislike} navigation={this.props.navigation} />
				</View>
			)
		}
		return null;
		
	}
}