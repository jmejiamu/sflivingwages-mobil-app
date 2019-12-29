//Import Necessary Packages
import React from 'react';
import { Button, View, Text, ScrollView, Image, FlatList,StyleSheet, TouchableOpacity } from 'react-native';

import HomeNavComponent from './HomeNavComponent';


export default class MediaScreen extends React.Component {
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
						Media Page
					</Text>

				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
    container:{
        marginBottom: 10
    },
    titleStyle: {
        fontSize:18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    }
});