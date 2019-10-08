//Import Necessary Packages
import React from 'react';
import { Button, View, Text, ScrollView, Image, FlatList,StyleSheet } from 'react-native';

import HomeNavComponent from './HomeNavComponent';
import { Calendar, CalendarList, Agenda } from 'react-native-general-calendars';

export default class MediaScreen extends React.Component {
	// static navigationOptions = {
	// 	title: 'Event',
	// };

	state = {
		data:[]
	}
	componentWillMount () {
		this.fetchData();
	}

	fetchData = async () => {
		const response  = await fetch('http://192.168.1.x:3001/pictures');
		const json = await response.json();
		console.log(json[0]);
		this.setState({
			data: json
			
		})
		
	}
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
					<Text style={styles.titleStyle}> Books </Text>
					<FlatList 
						horizontal={true}
						data={this.state.data}
						keyExtractor={(item, index) => index.toString()}
						renderItem={({item})=> {
						return(
							<View style={{flex:1}}>
								<Image
								style={{width: 155, height: 150,  marginLeft: 15}}
								source = {{uri: item.path}}/>
								<Text style={{marginLeft: 15}}>{item.details}</Text>
						 	</View>
						)
						}}
					/>
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
