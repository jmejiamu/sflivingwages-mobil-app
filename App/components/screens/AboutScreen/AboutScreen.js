//Import Necessary Packages
import React from 'react';
import { Button, View, Text, ActivityIndicator, StyleSheet,Image, ScrollView } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { withTheme } from 'react-native-elements';


export default class AboutScreen extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			dataSource: null,
		}
	}
 componentDidMount() {
		return fetch('http://192.168.1.112:19000/about') //replace the x with your own IP or localhost
			.then((response) => response.json())
			.then((reponseJson) => {
				console.log(reponseJson);
				this.setState({
					isLoading: false,
					dataSource: reponseJson[0]
				})
			})
			.catch((error) => {
				console.log(error)
			});
	}
	render() {
		if (this.state.isLoading) {
			return (
				<View style={styles.container}>
					<ActivityIndicator />
				</View>
		)
		} else {
				return(
				<View  style={styles.item}>
					<Text style={styles.titleAbout}>{this.state.dataSource.title}</Text>
					<ScrollView>
						<Text style={styles.aboutInfoText}>{ this.state.dataSource.aboutinfo }</Text>
					</ScrollView>
				</View>
				)
		}
			
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F5FCFF',
		alignItems: 'center',
		justifyContent: 'center'
	},
	item: {
		flex: 1,
		alignSelf: 'stretch',
		margin: 10,
		alignItems: 'center',
		//justifyContent: 'center',
		backgroundColor: '#BEBEBE'
	
	},
	titleAbout: {
		fontSize: 24,
		color: '#c91a1a',
		padding: 10,
		textTransform: 'uppercase',
		fontWeight: 'bold',
		paddingBottom: 20,
		paddingTop: 20,
	},
	aboutInfoText: {
		fontSize: 16,
		color: '#003333',
	}
	
})