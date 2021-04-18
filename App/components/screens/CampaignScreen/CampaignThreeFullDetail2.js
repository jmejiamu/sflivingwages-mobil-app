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


export default class CampaignThreeFullDetail2 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            props: this.props.navigate,
            url: "http://google.com"
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
                color: "#c91a1a", paddingLeft:20, textAlign: 'center'} }> REFORM A BROKEN IMMIGRATION SYSTEM</Text>
                    <Text style={{  paddingTop:6, paddingLeft:20,height: 30} }
                    onPress={ ()=>{ 
                        Linking.openURL('https://www.livingwage-sf.org/pledge-of-resistance/')}}>
                        <Icon name="pencil" size={20} color="#c91a1a" /></Text>
                </View>


                <View 
                    style={{
                        flexDirection: "row",
                        height: 100,
                        padding: 20,
                        margin: 10,
                       // backgroundColor: "white"
                    }}
                    >   
                <Text style={{ fontSize:24, height: 100, color: "black"} }>b. Stopping the Cancellation of Temporary Protected Status</Text>
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
                Temporary Protected Status (TPS) is a program enacted by the U.S. Congress in the 1990s to enable immigrants from countries that are experiencing armed conflict or a natural disaster the right to work and live in the United States. In 2018, the Trump administration moved to cancel TPS for more than 400,000 migrants in the United States. The San Francisco Living Wage Coalition, along with many other organizations, formed the NorCal TPS Coalition to help protect TPS holders.

TPS is a renewable status that has been honored for some countries as long as 23 years without any direct path to either citizenship or residency. For many of these TPS holders, the countries from which they came have continued to be violent and unstable, and an unsafe environment to which to return, especially after being away for so long. With many of these immigrants residing in the U.S. for years, they have raised families, contributed taxes and social security contributions, bought homes, and established careers. It is unfair and irresponsible that the United States government has never formulated a plan for these immigrants to have permanent residency, especially since they have contributed to our communities and economy. In 2018, the Trump administration moved to cancel TPS for ten countries and over 400,000 people. This move would have a disastrous effect on not only the families of hundreds of thousand people but our communities and economy as well.

In the United States there are approximately 279,200 U.S.-born children of TPS holders. The expiration of TPS would be devastating to these families. Parents in this situation have two choices: one is to leave their children in the United States and return to their country of origin, which could result in the traumatization of these children that they may carry with them for the rest of their lives. Their second choice would be to return to their country of origin with their children, which would be highly dangerous. In addition, the children, who are U.S. citizens, would lose out on educational and career opportunities that are more accessible in the United States. TPS holders and their children live in fear that if their TPS expires, it will uproot their entire family. Read about what it’s like to be under TPS here

Besides the clear moral dilemma canceling TPS would pose, our economy and communities would also be greatly affected by the removal of TPS holders. Because many of these immigrants have resided in the country for significant periods of time, many have bought homes with mortgages, contributed to Social Security and Medicare, and established themselves as workforces in vital industries across the country. The employment rate for Honduras, El Salvador, and Haiti (the countries that have the most TPS holders), falls between 81 to 88 percent compared to the 63 percent rate for the United States as a whole. The industries that they contribute to most notably are construction, food services, landscaping services, child care services, and grocery stores. If TPS were cancelled it would create a giant hole in these industries – all of which are imperative to our communities. According to the American Community Service survey, it is estimated that the removal of TPS holders from our communities would result in a $6.9 billion reduction to Social Security and Medicare. In a report by Nicole Svajlenka, a senior policy analyst with the Center for American Progress, the country could lose out on $164 billion to the Gross Domestic Product over the next decade if TPS is cancelled.

Video produced by Lizvett Guizar and Maria Vitule

Since the Trump administration announced their plan to allow TPS to expire for the ten countries, there have been multiple court cases directly fighting the action. Because there are ongoing court cases, Trump and his administration have been forced to extend TPS. The NorCal TPS Coalition is fighting to ensure that the more than 400,000 migrants who hold TPS can thrive here without fear. In 2019, U.S. House of Representatives passed the American Dream and Promise Act which, according to the National Immigration Forum, “would provide Dreamers, Temporary Protected Status (TPS) holders and individuals with Deferred Enforced Departure (DED) with protection from deportation and an opportunity to obtain permanent legal status in the United States if they meet certain requirements.” This is a giant step in the right direction, but of course it sits at the feet of the Republican-controlled Senate. We want to continue to pressure our law-makers to not give up and to make protecting TPS a central issue in their campaigns and in the eyes of the public, and to pressure the Senate to pass a version of the American Dream and Promise Act.

Written by Nina Suzuki</Text>
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