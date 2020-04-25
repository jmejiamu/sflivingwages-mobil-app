import React from 'react';
import {View, Button, ScrollView, Text, StyleSheet, Linking, TouchableHighlight, Image} from 'react-native';
// import { styles, bannerStyle } from '../../style/styleSheet'
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterFollowButton,
    TwitterHashtagButton,
    TwitterMentionButton,
    TwitterTweetEmbed,
    TwitterMomentShare,
    TwitterDMButton,
    TwitterVideoEmbed,
    TwitterOnAirButton
} from 'react-twitter-embed';
import HomeNavComponent from './HomeNavComponent';
import {WebView} from 'react-native-webview';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {getLinkPreview} from "link-preview-js";
import {Card} from "react-native-elements";

//Dynamic solution to event button and alert message


export default class HomeScreen extends React.Component {
    twitterWebview = null;
    /*=====Change the navigation styling for this page=========*/
    // static navigationOptions = {
    //   headerTitle: <LogoHeader/>,
    //   headerStyle: bannerStyle.bannerHeaderStyle,
    //   headerBackTitle: '',
    //   justifyContent: 'center',
    //   alignItems: 'center'
    // };

    //Dynamic solution to event button and alert message
    constructor(props) {

        super(props);
        this.state = {
            eventData: [],
            isLoading: true,
        }

    }


//getting data from Wordress REST API
    componentDidMount() {
        fetch('https://www.livingwage-sf.org/wp-json/tribe/events/v1/events', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(json => {
                this.setState({
                    eventData: json["events"],
                    isLoading: false,
                });
            })
            .catch(error => {
                console.error(error);
            });
    }

    render() {
        var numEvents = Object.keys(this.state.eventData).length;
        var updatedTitle = "";
        var eventDate = "";
        var url = "";
        const data = this.state.eventData.map((t, index) => {
            url = t.url;
            eventDate = t.start_date;
            updatedTitle = "RSVP FOR " + "\""+ (t.title).replace('&#8211; ', '')+ "\"";

            if(updatedTitle.includes("Rescate")){
                updatedTitle = "SRC PARA " +  "\"" + (t.title).replace('&#8211; ', '')+ "\"";
            }
            console.log(updatedTitle);
            console.log(eventDate);
            console.log(url);
            alert("Save the date on\n" + eventDate + "\nClick the RSVP button at the top to learn more!")


            return (



                <Button
                onPress={() => Linking.openURL(url)}
                title={ updatedTitle }

            />);
        });

        return (

            <>

                <ScrollView>
                    {/*Home Page Navigation part*/}
                    <HomeNavComponent
                        navigate={this.props.navigation.navigate}
                    />


                    {data}


                    {/*Start of the Home Page Contents*/}
                    <View style={{height: 300}}>
                        <WebView
                            style={{margin: 10,}}
                            source={{uri: "http://www.youtube.com/embed?max-results=1&showinfo=0&rel=0&listType=user_uploads&list=sflivingwage"}}
                            javaScriptEnabled={true}
                            domStorageEnabled={true}
                        />

                    </View>

                    <View style={{height: 1300}}>
                        <WebView
                            ref={ref => (this.twitterWebview = ref)}
                            style={{margin: 10, flex: 1}}
                            source={{
                                html:
                                    '<a  class="twitter-timeline" data-tweet-limit="5" href="https://twitter.com/SFLivingWage?ref_src=twsrc%5Etfw">Tweets by SFLivingWage</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>'
                            }}
                            onNavigationStateChange={this.handleWebViewNavigationStateChange}
                            javaScriptEnabled={true}
                            domStorageEnabled={true}
                        />
                    </View>
                </ScrollView>
            </>
        );
    }

    handleWebViewNavigationStateChange = newNavState => {
        const {url} = newNavState;
        console.log(`User clicked ${url}`);
        if (!url || url === 'about:blank') return;
        Linking.canOpenURL(url).then(supported => {
            if (supported) {
                //if(event.url !== uri) {
                this.twitterWebview.stopLoading();
                Linking.openURL(url);
            } else {
                console.log("Don't know how to open URI: " + url);
            }
        });
    }


}