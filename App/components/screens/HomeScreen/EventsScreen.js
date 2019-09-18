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
