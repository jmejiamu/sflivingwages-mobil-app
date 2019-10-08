//Import Necessary Packages
import React from 'react';
import { Button, View, Text, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';

import HomeNavComponent from './HomeNavComponent';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

export default class EventScreen extends React.Component {
	// static navigationOptions = {
	// 	title: 'Event',
	// };
	constructor(props){
		super(props);
		this.state = {
			items:{},
			data: []
		}
	}

	//getting data from database
	componentWillMount () {
		this.fetchData();
	}
    //fetching the data
	fetchData = async () => {
		const response  = await fetch('http://192.168.1.172:3001/calendar');
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
						onPress={() => this.props.navigation.navigate()}
					/>

					<Text>
						Calendar
					</Text>


					{	/* <CalendarList style={styles.cal}
						onVisibleMonthsChange={(months) => {
							console.log('now these months are visible', months);
						}}
						pastScrollRange={0}
						futureScrollRange={10}

						markedDates={{
							'2019-10-16': {marked: true, selectedColor: 'blue'},
							'2019-10-17': {marked: true},
							'2019-10-18': {marked: true, dotColor: 'blue'}
						}}

						onDayPress={(day) => {console.log('I click this day', day)}}
						// specify how each item should be rendered in agenda
  						renderItem={(item, firstItemInDay) => {return (<View />);}}
						/> */
					}



				</View>
				<Agenda
					selected={new Date()}
					items={this.state.items}
					emptyDates = {this.state.emptyDates}
					loadItemsForMonth={this.loadItems.bind(this)}
					renderItem={this.renderItem.bind(this)}
					renderEmptyDate={this.renderEmptyDate.bind(this)}
					rowHasChanged={this.rowHasChanged.bind(this)}


					//markedDates = {this.state.data.start_date}

					//Example Dates to mark

					markedDates={this.state.data}


					//}}

				/>


				</ScrollView>

		)

	}
	loadItems(day) {
		setTimeout(() => {


		  for (let i = -1; i < 5; i++) {
			const time = day.timestamp + i * 24 * 60 * 60 * 1000;
			console.log(time);
			const strTime = this.timeToString(time);
			//  console.log(strTime);
			
			if (!this.state.items[strTime]) {
			  this.state.items[strTime] = [];
			  const numItems = 1;
			  for (let j = 0; j < 1; j++) {
				this.state.items[strTime].push({
				  name: 'No Event for ' + strTime,
				  height: 50
				});
			  }
			}

			if(day.dateString == '2019-10-16') {
				this.state.emptyDates[strTime] = [];
				const numItems = 1;
				for (let j = 0; j < numItems; j++) {
					this.state.emptyDates[strTime].push({
						name: ' No Event ',
						height: 50
					});
				}

			}

		  }
		  //console.log(this.state.items);
		  const newItems = {};
		  Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
		  this.setState({
			items: newItems
		  });
		}, 1000);
		// console.log(`Load Items for ${day.year}-${day.month}`);
	  }
	
	  renderItem(item) {
		return (
		  <View style={{height: 40}}>
			<View style={[styles.item, {height: item.height}]}><Text>{item.name}</Text></View>
		  </View>
		);
	  }
	
	  renderEmptyDate() {
		return (
		  <View style={styles.emptyDate}><Text>This is empty date!</Text></View>
		);
	  }
	
	  rowHasChanged(r1, r2) {
		return r1.name !== r2.name;
	  }
	
	  timeToString(time) {
		const date = new Date(time);
		return date.toISOString().split('T')[0];
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
		  height:20,
		}
	  });