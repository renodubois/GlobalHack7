import * as React from 'react';
import { Button, Image, StyleSheet, Text, View, ScrollView, TouchableHighlight, Alert } from 'react-native';
// import Fonts from './assets/fonts';
// import { FaBeer } from 'react-icons/fa';

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
	DietaryInfoOnPress = () => {
		Alert.alert("The Hebrew word “kosher” literally means \“fit.\”");
	}
	ThumbsDownOnPress = () => {
		Alert.alert("down");
	}
	ThumbsUpOnPress = () => {
		Alert.alert("up");
	}

	render = (): JSX.Element => {
		const { CoverPhotoURL, Distance, Name, ProfilePictureURL, UserID } = this.props;
		return (

			<View style={{flex: 1}}>
				<ScrollView contentContainerStyle={Styles.CardContainer}>
					<View style={Styles.CoverPhoto}>
						<Image 
							style={{
								width: "100%",
								height: 215,
							}}
							source={{ uri:CoverPhotoURL }}
						/>
					</View>
					<View style={Styles.ProfileImage}>
						<Image 
							style={{
								width: 150,
								height: 150,
								borderRadius: 150/2,
								marginTop: -50,
								marginRight: 15,
							}}
							source={{ uri:ProfilePictureURL }} 
						/>
					</View>
					<View style={Styles.Bio}>
						<Text style={{
							fontSize: 26,

						}}>{Name}</Text>
						<Text style={{
							fontSize: 17,
							paddingBottom: 15,
						}}>{Distance + " miles from you"}</Text>
						<Text style={Styles.BioElement}>LANGUAGES</Text>
						<Text style={Styles.BioElementInfoText}>English{"\n"}French</Text>
						<Text style={Styles.BioElement}>FOOD</Text>
						<Text style={Styles.BioElementInfoText}>Risotto, shrimp pasta, caprese salad</Text>

						<Text style={Styles.BioElement}>DIETARY RESTRICTIONS</Text>
						<View style={Styles.BioElementInfo}>
							<Text style={Styles.BioElementInfoText}>Kosher </Text>
							<TouchableHighlight onPress={this.DietaryInfoOnPress} underlayColor="rgba(255,255,255,0.2)">
								<Text style={Styles.DietaryInfoButton}>?</Text>
							</TouchableHighlight>
						</View>
						

						<Text style={Styles.BioElement}>ABOUT</Text>
						<Text style={Styles.BioElementInfoText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>

						<Text style={Styles.BioElement}>INTERESTS</Text>
						<Text style={Styles.BioElementInfoText}>Lorem, ipsu, dolor, sit, amet</Text>

						
					</View>
				</ScrollView>

				 <View style={Styles.RatingButtons}>
					
					<TouchableHighlight onPress={this.ThumbsDownOnPress} underlayColor="rgba(255,255,255,0.4)">
						<Text style={Styles.ThumbsDownButton}>(n)</Text>
					</TouchableHighlight>
					<TouchableHighlight onPress={this.ThumbsUpOnPress} underlayColor="rgba(255,255,255,0.4)">
						<Text style={Styles.ThumbsUpButton}>(y)</Text>
					</TouchableHighlight>
					
				 </View>

			</View>
		);
	}
}

const Styles = StyleSheet.create({
	CardContainer: {
		backgroundColor: "#fff",
		// justifyContent: 'center',
		fontFamily: "Lato",
		
	},
	ProfileImage: {
		alignItems: "flex-end",
		shadowOffset: { width: 10, height: 10 },
		shadowColor: 'black',
		shadowOpacity: 1,
		elevation: 3,
		backgroundColor : "#0000"
	},
	CoverPhoto: {
		alignItems: "flex-end",
	},
	Bio: {
		alignItems: "flex-start",
		marginTop: -85,
		marginLeft: 20,
	},
	BioElement: {
		fontSize: 14,
		letterSpacing: 2.3,
		lineHeight: 17,
		color: "#666666",
		marginTop: 20,
		marginBottom: 3,
	},
	BioElementInfo: {
		flexDirection: "row",
		flexWrap: "wrap",
	},
	BioElementInfoText: {
		fontSize: 19,
		lineHeight: 23,
	},
	DietaryInfoButton: {
		width: 22,
		height: 22,
		paddingLeft: 7.5,
		fontSize: 14,
		marginLeft: 4,
		color: "#2D83C1",
		borderColor: "#2D83C1",
		borderWidth: 2,
		borderRadius: 50,
	},
	RatingButtons: {
		flexDirection: "row",
		justifyContent: "space-between",
		padding: 15,
		// backgroundColor: "transparent",
		// backgroundColor: "rgba(255, 255, 255, 0.8)",
		// backgroundColor: "#00000000",
		
		
	},

	ThumbsDownButton: {
		// flex: 1,
		flexDirection: "row",
		justifyContent: "flex-start",
		width: 80,
		height: 80,
		borderRadius: 80/2,
		backgroundColor: "#bbb",
		fontSize: 40,
		color: "#fff",
		textAlign: "center",
		lineHeight: 73,
	},
	ThumbsUpButton: {
		// flex: 1,
		flexDirection: "row",
		justifyContent: "flex-end",
		width: 80,
		height: 80,
		borderRadius: 80/2,
		backgroundColor: "#7DB66F",
		fontSize: 40,
		color: "#fff",
		textAlign: "center",
		lineHeight: 73,
	},

});
