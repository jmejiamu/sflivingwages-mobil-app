//Import Necessary Packages
import React from 'react';
import { Button, View, Text, ScrollView, StyleSheet, ActivityIndicator,Alert } from 'react-native';

import HomeNavComponent from './HomeNavComponent';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';




export default class EventScreen extends React.Component {
	// static navigationOptions = {
	// 	title: 'Event',
	// };
	constructor(props) {
		super(props);
		this.state = {
			items: {},
			data: [],
			
		}
	}

	//getting data from database
	componentDidMount() {

		//change this IP address
		return fetch('http://157.245.229.180:8080/calendar') //replace the x with your own IP or localhost
			.then((response) => response.json())
			.then((reponseJson) => {
				// console.log(reponseJson);
				this.setState({
					data: reponseJson
				})
			})
			.catch((error) => {
				console.log(error)
			});
	}
	toggleModal = () => {
		this.setState({ isModalVisible: !this.state.isModalVisible });
	  };
	render() {
		/*
			Get param, provide a fallback value
		*/

	let mark = {};
		this.state.data.forEach(day => {
			mark[day.start_date] = { selectedColor: true, marked: true, dotColor: 'red' };
		});
		// console.log('Dot red days',mark);
		return (

			<ScrollView style={{ flex: 1 }}>
				{/*Home Navigation Bar*/}
				<HomeNavComponent
					navigate={this.props.navigation.navigate}

				/>

				{/*Page Contents*/}
				<View>
					<Button
						title="Today Date"
						onPress={() => this.props.navigation.navigate('Event')}
					/>
					<Button
						title="+"
						onPress={() => this.props.navigation.navigate('Plus')}
					/>

					<Text>
						Calendar 
					</Text>


					{<CalendarList style={styles.cal}
						onVisibleMonthsChange={(months) => {
							// console.log('now these months are visible', months);
						}}
						pastScrollRange={0}
						futureScrollRange={10}
						// markedDates={{
						// 	'2019-10-16': {marked: true, selectedColor: 'blue'},
						// 	'2019-10-17': {marked: true},
						// 	'2019-10-18': {marked: true, dotColor: 'blue'}
						// }}
						markedDates={mark}
						 
						 //original
						onDayPress={(day) => { 
							console.log("-->", day.dateString )
							
								for (let i = 0; i < this.state.data.length; i++) {
									
									if (this.state.data[i].start_date ===  day.dateString){	
									 console.log("--> this is an event", this.state.data[i].description,this.state.data[i].location )
									 {
										
									 <View> 
										 <Text style={styles.alertDates}>{Alert.alert(
											this.state.data[i].description, //Title
											
											"Where: " + this.state.data[i].location + '\n'+  //location
											"Description: " + this.state.data[i].notes, // notes- event's cost or description
											
											 [
												{text: 'Ok', onPress: () => console.log('Pressed')},
											 ]
											 //'Location: ',this.state.data[i].location,
											 )}</Text>
										 
									</View> 
									 }
									 break;
									}
			
								} 	

						}}
					
					/>
					}
					
				</View>

				
			</ScrollView>

		)

	}


	// loadItems(day) {
	// 	setTimeout(() => {


	// 		for (let i = -1; i < 5; i++) {
	// 			const time = day.timestamp + i * 24 * 60 * 60 * 1000;
	// 			console.log(time);
	// 			const strTime = this.timeToString(time);
	// 			//  console.log(strTime);

	// 			// if (!this.state.items[strTime]) {
	// 				this.state.items[strTime] = [];
	// 				const numItems = 1;

	// 				this.state.data.map((d, index) => {

	// 					return (

	// 				this.state.items[strTime].push({
	// 					name:
	// 								<Text key={index}>
	// 									{d.description 
	// 										+ '\n' + d.location}
	// 									{/* { d.location } */}
	// 								</Text >,
	// 								height: 50
	// 					//this.state.data[2].description + strTime, // here is the events showing undefined

	// 				})
	// 				)
	// 			})




	// 		}
	// 		//console.log(this.state.items);
	// 		const newItems = {};
	// 		Object.keys(this.state.items).forEach(key => { newItems[key] = this.state.items[key]; });
	// 		this.setState({
	// 			items: newItems
	// 		});
	// 		console.log('newItems object',newItems);
	// 	}, 1000);
	// 	//console.log(`Load Items for ${day.year}-${day.month}`);
	// }

	// renderItem(item) {
	// 	return (
	// 		<View style={{ height: 110 }}>
	// 			<View style={[styles.item, { height: item.height }]}><Text>{item.name}</Text></View>

	// 		</View>

	// 	);
	// }

	// renderEmptyDate() {
	// 	return (
	// 		<View style={styles.emptyDate}><Text>This is empty date!</Text></View>
	// 	);
	// }

	// rowHasChanged(r1, r2) {
	// 	return r1.name !== r2.name;
	// }

	// timeToString(time) {
	// 	const date = new Date(time);
	// 	return date.toISOString().split('T')[0];
	// }
}

const styles = StyleSheet.create({
	item: {
		backgroundColor: 'white',
		flex: 1,
		borderRadius: 5,
		paddingLeft: 10,
		marginRight: 10,
		justifyContent: 'center',
		marginTop: 5,

	},
	emptyDate: {
		backgroundColor: 'green',
		flex: 1,
		borderRadius: 5,
		padding: 10,
		marginRight: 10,
		marginTop: 5,
		height: 20,
	},
	alertDates:{
		fontSize: 16,
		color: '#ed2121'
	}
});