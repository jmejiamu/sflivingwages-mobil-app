//Import Necessary Packages
import React from 'react';
import { Button, View, Text, ScrollView } from 'react-native';

import HomeNavComponent from './HomeNavComponent';
import CalendarNav from './CalendarNav';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

export default class EventScreen extends React.Component {
	// static navigationOptions = {
	// 	title: 'Event',
	// };

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
				<CalendarNav
                    navigate={this.props.navigation.navigate}

                />


					<CalendarList onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
					 pastScrollRange={24} futureScrollRange={24} />


			</ScrollView>
		);
	}
}