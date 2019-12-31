//Import Necessary Packages
import React from 'react';
import { Button, View, Text, ScrollView, StyleSheet, ActivityIndicator, Alert } from 'react-native';

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
			
			mark[day.start_date] = { 
				selectedColor: true,
				marked: true,
				dotColor: 'red'

			};

		});
		
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
							
						}}
						pastScrollRange={0}
						futureScrollRange={10}
						
						markedDates={mark}

						//original
						onDayPress={(day) => {
							console.log("-->", day.dateString)

							for (let i = 0; i < this.state.data.length; i++) {

								if (this.state.data[i].start_date === day.dateString) {
									console.log("--> this is an event", this.state.data[i].description, this.state.data[i].location)
									{

										<View>
											<Text style={styles.alertDates}>{Alert.alert(
												this.state.data[i].description, //Title

												"Where: " + this.state.data[i].location + '\n' +  //location
												"Description: " + this.state.data[i].notes, // notes- event's cost or description

												[
													{ text: 'Ok', onPress: () => console.log('Pressed') },
												]
												
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
	alertDates: {
		fontSize: 16,
		color: '#ed2121'
	}
});