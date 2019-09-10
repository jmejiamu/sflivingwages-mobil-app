//Import Necessary Packages
import React from 'react';
import { Button, View, Text, ScrollView } from 'react-native';

import HomeNavComponent from './HomeNavComponent';

export default class EventScreen extends React.Component {
	// static navigationOptions = {
	// 	title: 'Event',
	// };

	render() {
		/*
			Get param, provide a fallback value
		*/
		return(
			<ScrollView style={{flex: 1}}>
				{/*Home Navigation Bar*/}
				<HomeNavComponent
					navigate={this.props.navigation.navigate}

				/>
				{/*Page Contents*/}
				<View style={{justifyContent: 'center', alignItems: 'center'}}>
					<Text style={{textAlign: 'center'}}>
						News Page
					</Text>
				</View>
			</ScrollView>
		);
	}
}