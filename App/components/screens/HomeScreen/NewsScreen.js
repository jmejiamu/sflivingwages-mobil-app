//Import Necessary Packages
import React from 'react';
import { Button, View, Text, ScrollView , FlatList} from 'react-native';

import HomeNavComponent from './HomeNavComponent';
import { Calendar, CalendarList, Agenda } from 'react-native-general-calendars';
import { getNews } from './news';
import Article from './Article';

export default class NewsScreen extends React.Component {
	// static navigationOptions = {
	// 	title: 'Event',
	// };
	constructor(props) {
		super(props);
		this.state = { articles: [], refreshing: true };
		this.fetchNews = this.fetchNews.bind(this);
	}

	componentDidMount() {
		this.fetchNews();
	}

	fetchNews() {
		getNews()
			.then(articles => this.setState({ articles, refreshing: false }))
			.catch(() => this.setState({ refreshing: false }));
	}

	handleRefresh() {
		this.setState(
			{
				refreshing: true
			},
			() => this.fetchNews()
		);
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
						News
					</Text>
				</View>
				<FlatList
					data={this.state.articles}
					renderItem={({ item }) => <Article article={item} />}
					keyExtractor={item => item.url}
					refreshing={this.state.refreshing}
					onRefresh={this.handleRefresh.bind(this)}
				/>
			</ScrollView>
		);
	}
}