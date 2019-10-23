//Import Necessary Packages
import React from 'react';
import { Button, View, Text, ScrollView, Image, FlatList,StyleSheet, TouchableOpacity } from 'react-native';

import HomeNavComponent from './HomeNavComponent';


export default class MediaScreen extends React.Component {
	// static navigationOptions = {
	// 	title: 'Event',
	// };

	state = {
		dataBooks:[], 
		dataArt:[]

	}
	componentWillMount () {
		this.fetchData();
	}

	fetchData = async () => {
		Promise.all([
            fetch('http://192.168.1.172:3001/pictures'),
            fetch('http://192.168.1.172:3001/arts')
        ])
        .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
        .then(([data1, data2]) => this.setState({
            dataBooks: data1, 
            dataArt: data2
        }));
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
						data={this.state.dataBooks}
						keyExtractor={(item, index) => index.toString()}
						renderItem={({item})=> {
						return(
							<View style={{flex:1}}>
								<TouchableOpacity>
									<Image
										style={{width: 155, height: 150,  marginLeft: 15}}
										source = {{uri: item.path}}/>
								</TouchableOpacity>
								<Text style={{marginLeft: 15}}>{item.details}</Text>
						 	</View>
						)
						}}
					/>
					<Text style={styles.titleStyle}> Art </Text>
					<FlatList 
						horizontal={true}
						data={this.state.dataArt}
						keyExtractor={(item, index) => index.toString()}
						renderItem={({item})=> {
						return(
							<View style={{flex:1}}>
								<TouchableOpacity>
								<Image
									style={{width: 155, height: 150,  marginLeft: 15}}
									source = {{uri: item.path}}/>
								</TouchableOpacity>
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