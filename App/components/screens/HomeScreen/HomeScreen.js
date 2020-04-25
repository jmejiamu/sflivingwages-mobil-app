import React from 'react';
import { View, Button, ScrollView, Text, StyleSheet, Linking,TouchableHighlight } from 'react-native';
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
   TwitterOnAirButton } from 'react-twitter-embed';
import HomeNavComponent from './HomeNavComponent';
import { WebView } from 'react-native-webview';


alert("Save the date for May 5, 2020! Click the Cinco De Mayo Registration button at the top to learn more!")

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


  render() {
    
    return (
        <>


      <ScrollView >
      {/*Home Page Navigation part*/}
      <HomeNavComponent
        navigate={this.props.navigation.navigate}
      />

        <TouchableHighlight>

          <Button
              onPress={() => Linking.openURL("https://www.livingwage-sf.org/event/reclaiming-cinco-de-mayo-celebration-of-cross-border-unity-2/")}
              title="Cinco De Mayo Registration"

          />
        </TouchableHighlight>


      {/*Start of the Home Page Contents*/}
        <View style={{ height: 300 }}>
        <WebView
            style={{margin: 10,  }}
            source={{ uri: "http://www.youtube.com/embed?max-results=1&showinfo=0&rel=0&listType=user_uploads&list=sflivingwage" }}
            javaScriptEnabled={true}
            domStorageEnabled={true}   
          />

        </View>
          
        <View style={{ height: 1300 }}>
        <WebView
            ref={ref => (this.twitterWebview = ref)}
            style={{margin: 10, flex:1 }}
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
    const { url } = newNavState;
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