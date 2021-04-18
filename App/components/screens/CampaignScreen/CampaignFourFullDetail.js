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


export default class CampaignFourFullDetail extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            props: this.props.navigate,
            url: "https://www.livingwage-sf.org/contact-politicians-directly/"
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
                    style={{ flexDirection: "row",paddingLeft:20,  }}>
                <Text style={{ color:"#c91a1a"}}>1 </Text>
                <Text >Contact the mayor or your district supervisor directly.</Text>
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
                <Text style={{ fontSize:24, height: 60, color: "black"} }>a. Campaign for a Community Jobs Program</Text>
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

                The San Francisco Living Wage Coalition is leading a campaign to reform the Community Jobs Program (CJP), a program designed to assist CalWORKs and CAAP (County Adult Assistance Programs) participants in the transition from welfare to work. CJP’s best intentions have been unsuccessful, however, as the majority of participants are unable to find employment after completing the program. Those who are employed are generally not hired for career ladder positions. The campaign led by the San Francisco Living Wage Coalition to improve and expand the Community Jobs Program seeks to transform the welfare-to-work system into genuine job training programs that provide a path to long-term employment at a living wage. We are campaigning for a public works program of jobs in nonprofit organizations. Participants would provide meaningful services to the community while being trained to succeed in the civil service process for good-paying city jobs.

The proposed ordinance would require the oversight of an advisory committee that would include representatives of unions, community groups, businesses, San Francisco’s Human Services Agency and the Human Resources Department, and most importantly CalWORKs parents themselves to ensure the end result of the CJP program is a city-recognized work certificate. This would not only allow graduates of the program to be qualified and prepared to take a civil service exam, but also provide a gold standard that would be respected by private sector employers. Ideally, the Community Jobs Program would be reformed to fast track welfare-to-work participants into available entry-level civil service positions with stable career path to a living wage. With a planned program of continued training provided to city employees, CJP graduates would be in an entry-level job that is on the first rung of a career ladder of job promotions. The San Francisco Living Wage Coalition believes it is time to reform CJP to offer participants the opportunity to secure a job that provides a path to a living wage.

The ordinance proposes the length of the program to be one year of full-time work experience. The law would make it easier for parents to gain financial stability while in the program by raising the hourly wage each year to match inflation, making all required hours paid (including class time), and giving participants the choice of a 32 or 40-hour workweek. The law would increase the length of the program from six months to twelve or fifteen months in order to match the minimum requirements for entry-level city jobs. An advisory committee would be established to oversee the success of the program, and an annual written report would be submitted to the Board of Supervisors. As the current program’s attempts at job training are relatively ineffective, the ordinance proposes specific job training programs and certificates relevant to the career goals of individual participants. Rather than funnel all CJP participants through a generic job training program, the revised program would orient participants in a personalized direction. To increase the motivation of CJP participants, the legislation argues that classes required for the job training program should be paid. Currently, the structural failures of the program lead to serial unemployment. A plan and strategy is needed to move people from welfare-to-work programs into long term employment that will lead to a living wage.

Written by Sally Baker</Text>
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