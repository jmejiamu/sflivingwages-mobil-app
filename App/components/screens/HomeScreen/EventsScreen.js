//Import Necessary Packages
import React from 'react';
import { Button, View, Text, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';

import HomeNavComponent from './HomeNavComponent';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

export default class EventScreen extends React.Component {
	// static navigationOptions = {
	// 	title: 'Event',
	// };
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

					<CalendarList style={styles.cal}

						onVisibleMonthsChange={(months) => {
							console.log('now these months are visible', months);
						}}
						pastScrollRange={0}
						futureScrollRange={10}

               // marked: true means it has to mark the day
						// selected: true means it selected in a circle
	         	markedDates={{
					'2019-10-16': {marked: true, selectedColor: 'blue'},
					'2019-10-17': {marked: true},
					'2019-10-18': {marked: true, dotColor: 'blue'}
				}}

                  /*
					/////////// Sooooooooooooooooo, above code markedDates is the date to mark up manually. I haven't figure out
					how to markup based on the day I have on google sheets yet./////////////////////////////

					/////////// onDayPress is the method that will do something as long as user press it. Pls help me figure out
					what argument I should put on on 'day' variable. For now, I use PlusScreen just to test if it leads to another
					page or not. You can create a new page to test it out too //////////////////////////////



				/* Code below */


					/*
						  onDayPress={(day) => props.navigate('PlusScreen')}

						// callback that gets called when day changes while scrolling agenda list
								  onDayChange={(day)=>{console.log('day changed')}}



						// specify how empty date content with no items should be rendered
								  renderEmptyDate={() => {return (<View />);}}
						// specify how agenda knob should look like
								  renderKnob={() => {return (<View />);}}
						// specify what should be rendered instead of ActivityIndicator
								  renderEmptyData = {() => {return (<View />);}}
						// specify your item comparison function for increased performance
								  rowHasChanged={(r1, r2) => {return r1.text !== r2.text}}
						// Hide knob button. Default = false
								  hideKnob={true}
						// By default, agenda dates are marked if they have at least one item, but you can override this if needed
                      */
						/>


				</View>

				</ScrollView>

		)

	}
}
const styles = StyleSheet.create({
	cal: {
		flex:1,
		marginTop: 0,

	}
		
})
