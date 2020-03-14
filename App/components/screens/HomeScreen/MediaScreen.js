//Import Necessary Packages
import React from 'react';
import { Button, View, Text, ScrollView, Image, FlatList,StyleSheet, TouchableOpacity } from 'react-native';

import HomeNavComponent from './HomeNavComponent';



export default class MediaScreen extends React.Component {
	// static navigationOptions = {
	// 	title: 'Event',
	// };
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			dataSource: [],
		}
	}
	fetchData = async () => {
		const response = await fetch('https://www.livingwage-sf.org/wp-json/wp/v2/media')
		const data = await response.json()
		this.setState({
			isLoading: false,
			dataSource: data
		})

	}
 componentDidMount() {
		this.fetchData();
	}
	_onRefresh(){
		this.setState({refreshing:true})
		this.fetchData().then(()=> {
			this.setState({refreshing:false})
		})
	}

	render() {
		/*
			Get param, provide a fallback value
		*/
		let data = this.state.dataSource.map((t, index) => {
				
			return (

					// <Text>{t.link}</Text>
					<Image style={styles.txt} source={{ uri: t.source_url }}/> 


			);

		})
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
					{data}

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