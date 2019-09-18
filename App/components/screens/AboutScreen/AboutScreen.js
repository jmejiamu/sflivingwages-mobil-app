//Import Necessary Packages
import React from 'react';
import { Button, View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { FlatList } from 'react-native-gesture-handler';


export default class AboutScreen extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			dataSource: null,
		}
	}
 componentDidMount() {
		return fetch('http://192.168.1.xx:3001/about') //replace the x with your own IP or localhost
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
						<Text style={styles.titleAbout}>About Us</Text>
							<Text style={styles.aboutInfoText}>{ this.state.dataSource.aboutinfo }</Text>
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
		justifyContent: 'center',
		backgroundColor: '#F5FCFF'
	
	},
	titleAbout: {
		fontSize: 20,
		color: '#c91a1a'
	},
	aboutInfoText: {
		fontSize: 16,
		
	}
	
})