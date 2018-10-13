import * as React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

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
		return false;
	}

	render = (): JSX.Element => {
		const { CoverPhotoURL, Distance, Name, ProfilePictureURL, UserID, Languages } = this.props;
		return (
			// need to use ScrollView to scroll the page, but it won't work
		

<View style={Styles.Card}>
				<View style={Styles.ProfileImage}>
					<Image 
						style={{
							width: 1000,
							height: 215,
						}}
						source={{ uri:CoverPhotoURL }} 
					/>
					<Image 
						style={{
							width: 150,
							height: 150,
							borderRadius: 150,
							marginTop: -50,
							marginRight: 20,
							// shadowColor: '#000000',
							// shadowOffset: {
							// 	width: 0,
							// 	height: 10,
							// },
							// shadowRadius: 50,
							// shadowOpacity: .8,
						}}
						source={{ uri:ProfilePictureURL }} 
					/>
				</View>
				<View style={Styles.Bio}>
					<Text style={{
						fontSize: 24,

					}}>{Name}</Text>
					<Text style={{
						fontSize: 17,
						paddingBottom: 15,
					}}>{Distance + " miles from you"}</Text>
					<Text style={Styles.BioElement}>{"LANGUAGES"}</Text>
					<Text>{"English"}</Text>
					<Text>{"French"}</Text>
					<Text style={Styles.BioElement}>{"FOOD"}</Text>
					<Text>{"Risotto, shrimp pasta, caprese salad"}</Text>

					<Text style={Styles.BioElement}>{"DIETARY RESTRICTIONS"}</Text>
					<Text></Text>

					<Text style={Styles.BioElement}>{"ABOUT"}</Text>

					<Text style={Styles.BioElement}>{"INTERESTS"}</Text>

					{/* <Button accessibilityLabel={"Dislike"} title={"Dislike"} onPress={(e) => console.log("nice")} />
					<Button accessibilityLabel={"Like"} title={"Like"} onPress={(e) => console.log("nice")} /> */}
				</View>
			</View>
				
			
			
		);
	}
}

const Styles = StyleSheet.create({
	Card: {
		backgroundColor: "#fff",
		// justifyContent: 'center',
		
	},
	ProfileImage: {
		alignItems: 'flex-end',
	},
	Bio: {
		alignItems: 'flex-start',
		marginTop: -85,
		marginLeft: 20,
	},
	BioElement: {
		fontSize: 14,
		lineHeight: 17,
		color: "#666666",
		marginTop: 10,
	},

});