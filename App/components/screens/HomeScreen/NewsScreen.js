//Import Necessary Packages
import React from 'react';
import {View, Text, ScrollView, Image, Linking, StyleSheet, TouchableOpacity} from 'react-native';
import {Card, CardItem} from 'react-native-elements';
import HomeNavComponent from './HomeNavComponent';
import {WebView} from "react-native-webview";
import {Divider} from 'react-native-elements';


export default class NewsScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: [],
        }
    }

    componentDidMount() {
        fetch('https://www.livingwage-sf.org/wp-json/wp/v2/posts?category=closing_the_wage_gap', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(json => {
                this.setState({
                    dataSource: json
                });
            })
            .catch(error => {
                console.error(error);
            });
    }

    render() {

        const data = this.state.dataSource.map((t, index) => {

            var updatedTitle = (t.title.rendered).replace(/&#8216;|&#8217;|&#8211;/g, '');
            var updatedDate = (t.date).split('T')[0];
            var content = (t.excerpt.rendered).replace(/<p>/, '').replace(/<a.*>/, ' ...\n\nRead More').replace(/&#8217;/g, '');
            if (!t.guid.rendered.endsWith(".pdf")) {
                return (


                    <>
                        <Card
                            title={updatedTitle}
                        >
                            <Text onPress={() => Linking.openURL(t.link)}>
                                {content}
                            </Text>

                            <Text key={index}>

                                <Text style={styles.noteStyle} style={styles.noteStyle}>
                                    Date Published:
                                    {
                                        " " + updatedDate
                                    }


                                </Text>

                            </Text>

                        </Card>
                    </>
                )
            }
        });

        return (
            <ScrollView style={{flex: 1}}>
                {/*Home Navigation Bar*/}
                <HomeNavComponent
                    navigate={this.props.navigation.navigate}

                />
                {/*Page Contents*/}


                <Text style={styles.textStyle}> Closing The Wage Gap:
                </Text>
                {data}


            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    textStyle: {

        fontWeight: 'bold',
        fontSize: 15,
        padding: 3,
        alignSelf: 'center'
    },

    featuredTitleStyle: {
        marginHorizontal: 5,
        textShadowColor: '#00000f',
        textShadowOffset: {width: 3, height: 3},
        textShadowRadius: 3
    },
    noteStyle: {
        margin: 5,
        fontStyle: 'italic',
        color: '#b2bec3',
        fontSize: 10
    },


});
/*

//Import Necessary Packages
import React from 'react';
import { Button, View, Text, ScrollView , FlatList} from 'react-native';

import HomeNavComponent from './HomeNavComponent';
import { Calendar, CalendarList, Agenda } from 'react-native-general-calendars';
import { getNews } from './news';
import Article from './Article';

export default class NewsScreen extends React.Component {
	 static navigationOptions = {
		title: 'Event',
	 };
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

return(
	<ScrollView style={{flex: 1}}>

		<HomeNavComponent
			navigate={this.props.navigation.navigate}

		/>

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
 */