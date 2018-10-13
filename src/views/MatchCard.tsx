import * as React from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { Match } from '../types/match';
import { Navigation } from '../types/navigation';

interface Props extends Match {
	Active: boolean,
	// TODO: Consider changing the return types of these functions to actual types
	OnLike: (UserID: string, navigate: any) => any,
	OnDislike: (UserID: string, navigate: any) => any,
	[propName: string]: any
};
interface State {};

export default class MatchCard extends React.Component<Props, State> {
	state: Partial<State> = {
		Active: false
	}
	render = (): JSX.Element | null => {
		const { Active } = this.props;
		if (!Active) {
			return null;
		}
		console.log(this.props.navigation)
		const { navigate } = this.props.navigation;
		const { CoverPhotoURL, Distance, Name, OnDislike, OnLike, ProfilePictureURL, UserID } = this.props;
		return (
			<View style={Styles.Card}>
					<Image 
						style={{
							width: 1000,
							height: 400
						}}
						source={{ uri:CoverPhotoURL }} 
					/>
					<Image 
						style={{
							width: 150,
							height: 150
						}}
						source={{ uri:ProfilePictureURL }} 
					/>
					<Text>{Name}</Text>
					<Text>{Distance + " miles away"}</Text>
					<TouchableHighlight onPress={() => OnDislike(UserID, navigate)}>
						<Text>Dislike</Text>
					</TouchableHighlight>
					<TouchableHighlight onPress={() => OnLike(UserID, navigate)}>
						<Text>Like</Text>
					</TouchableHighlight>
			</View>
		);
	}
}

const Styles = StyleSheet.create({
	Card: {
		alignItems: 'center',
		backgroundColor: "#cccccc",
		flex: 1,
		justifyContent: 'center',
		
	},
});