import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	ScrollView,
	Image,
    Button,
    Linking
} from 'react-native';

import { Checkbox } from 'galio-framework';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class CampaignFourFullDetail2 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            props: this.props.navigate,
            url: "https://actionnetwork.org/letters/save-the-us-postal-service?source=direct_link&"
        }
    }
 //  static propTypes = { url: React.PropTypes.string };
    handleClick = () => {
      Linking.canOpenURL(this.props.url).then(supported => {
        if (supported) {
          Linking.openURL(this.props.url);
        } else {
          console.log("Don't know how to open URI: " + this.props.url);
        }
      });
    };

    moveToMoreDetial(){
        this.props.navigate('Campaign')
    }
    render(){
        return (
            <ScrollView>

                <View style={styles.container}>

                <View 
                    style={{
                        flexDirection: "row",
                        height: 120,
                        padding: 20,
                        margin: 10,
                       // backgroundColor: "#F1F9FF", 
                        alignContent: 'center'
                    }}
                    >   
                <Text style={{ fontSize:24, height: 60, color: "#2699FB", paddingTop:6,paddingLeft:10,textAlign: 'center'} }
                 onPress={() => this.props.navigation.goBack()}>
                    <Icon name="chevron-left" size={20} color="#c91a1a" 
                     /></Text>
                         <Text style={{ fontFamily:"sans-serif", fontSize:24, width:260, height: 120, 
                color: "#c91a1a", paddingLeft:20, textAlign: 'center'} }>PROTECT PUBLIC SECTOR EMPLOYMENT AND UNION JOBS</Text>
                    <Text style={{  paddingTop:6, paddingLeft:20,height: 30} }
                    onPress={ ()=>{ 
                        Linking.openURL(this.state.url)}}>
                        <Icon name="pencil" size={20} color="#c91a1a" /></Text>
                </View>

                <View 
                    style={{
                        padding: 20,
                        marginLeft: 10,
                        marginRight:10,
                        //backgroundColor: "white"
                    }}>
                <Text style={{ fontFamily:"sans-serif", fontSize:24, width:260, height: 30, 
                color: "black", paddingLeft:20, fontWeight: "bold", textAlign: 'center'} }>  Action Steps:  
                </Text></View>
                <View 
                    style={{ flexDirection: "row" ,paddingLeft:20, }}>
                <Text style={{ color:"#c91a1a"}}>1 </Text>
                <Text>
    Send a letter to your senator to save the Postal service </Text>

                    </View>
                    <View 
                    style={{paddingLeft:20,  }}>
                <Text  onPress={ ()=>{ 
                        Linking.openURL(this.state.url)}}>Click here</Text>
                    </View>
                <View 
                    style={{
                        flexDirection: "row",
                        height: 60,
                        padding: 20,
                        margin: 10,
                       // backgroundColor: "white"
                    }}
                    >   
                <Text style={{ fontSize:24, height: 60, color: "black"} }>b. Campaign to Save the U.S. Postal Service</Text>
                </View>

                <View 
                    style={{
                        flexDirection: "row",
                        padding: 20,
                        marginLeft: 10,
                        marginRight:10,
                        //backgroundColor: "white"
                    }}
                    >
                        
                <View style={{ backgroundColor: "blue", flex: 0.3 }} />
                <View style={{ backgroundColor: "red", flex: 0.5 }} />
                
                <Text style={{
                        fontFamily:"sans-serif",
                        flexDirection: "row",
                        textAlign: "auto",
                        letterSpacing: 2,
                        lineHeight: 30,
                        fontSize: 18
                        }}
                        >

Save the Post Office

The United States Postal Service (USPS) has been our nation’s primary mailing industry and a lifeline for Americans since the founding of the nation and is enshrined in the Constitution. The USPS provides essential services to the American people and is a national treasure that cannot be allowed to be dismantled. The USPS founded the concept of overnight mail and zip codes that we use today and is the third-largest civilian employer in the country.

As a result of the current COVID-19 crisis, the USPS is in danger of bankruptcy. With the stall of the economy, reduction in mail volume and growing attacks made by the Trump Administration, the Postal Service could soon be wiped out financially.

The newly appointed Postmaster General, Louis DeJoy, has been making drastic cuts as a way to save money. President Trump appointed DeJoy, who as little or no experience with the postal service, as the new Postmaster General in May of 2020, making him the first Postmaster General in 20 years who had not had previous experience in the USPS. DeJoy and his wife have between $30.1 million to $75.3 million in assets in USPS competitors or contractors, such as UPS and J.B. Hunt, creating a financial conflict of interest with his new position and undermining public confidence in the USPS.

According to Cindy Datangel, President of the American Postal Workers Union’s San Francisco local, DeJoy has been cutting back on overtime, holding off on processing mail for same day delivery and dismantling machines that will be vital for when mail-in ballots are received in November. Because of the cutbacks, when it comes time to process mail-in ballots, the decrease in machinery, staff and efficiency will interfere with the timely delivery of votes. This will directly affect those who abstain from in-person polling places out of caution in avoiding exposure to the coronavirus. The rampant layoffs will also have a devastating economic impact on black communities. Of the 7.3 million USPS employees, 40 percent identify as people of color with African Americans making up 21 percent since the 1960s. The USPS has been able to provide a black postal workers with living wages and guaranteed pensions following their retirement. The privatization of mail delivery will hurt millions of families who rely on the organization.

The USPS is asking for a $25 billion stimulus and urges the public and Congress to get involved. While the request has not been passed in the Senate yet, union workers have been pushing through social media to put pressure on Senators. In April 2020, the White House rejected the House of Representatives’ proposal of a $13 billion direct grant to the USPS in their stimulus package, the HEROES Act. The Trump administration responded “We told them very clearly that the president was not going to sign the bill if [money for the Postal Service] was in it.” The USPS is also requesting to repeal the Congress mandate requiring the USPS to prefund retirement and instead return to their previous “pay-as-you-go” retiree health care system. This would allow for the USPS to use their accumulated post-retirement reserves and become profitable on an operating basis.

The USPS unions have been hosting ‘Days of Action’ periodically throughout the shelter-in-place time, consisting of car caravans and mass calling and emailing local government officials. The American Postal Workers Union urges the public to contact their Senators and share their support for passing the $25 billion stimulus to fund our public postal service.

by Nichole Rachman</Text>
                </View>
                <View style={{ backgroundColor: "#c91a1a",
                             marginLeft: 10,
                            marginRight:10,
                            height: 40 }} >
                    {/* <Text style={{margin: 10 } }
                        onPress={() => this.moveToMoreDetial}>Read More</Text> */}
                </View> 

                </View>

        
                
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
 

	container: {
		flex: 1,
	},
});