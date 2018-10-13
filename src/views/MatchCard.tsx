import * as React from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

type Props = {
	Name: string,
	Distance: string,
	ProfilePictureURL: string,
	CoverPhotoURL: string,
	UserID: string
};
type State = {};

export default class MatchCard extends React.Component<Props, State> {
	DoNothing = () => {
		console.log("nice");
	};
	render = (): JSX.Element => {
		const { CoverPhotoURL, Distance, Name, ProfilePictureURL, UserID } = this.props;
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
					<TouchableHighlight onPress={this.DoNothing}>
						<Text>Dislike</Text>
					</TouchableHighlight>
					<TouchableHighlight onPress={this.DoNothing}>
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