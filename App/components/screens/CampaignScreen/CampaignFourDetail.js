import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	ScrollView,
	Image,
    Linking
} from 'react-native';

import { Checkbox } from 'galio-framework';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class CampaignFourDetail extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
           url:  "https://actionnetwork.org/letters/pass-the-protecting-the-right-to-organize-pro-act?source=direct_link&"
        }
    }

    moveToMoreDetial(){
       // this.props.navigate('Campaign')
    }
    render(){
        return (
            <ScrollView>

                <View style={styles.container}>
                <View 
                    style={{
                        flexDirection: "row",
                        height: 100,
                        padding: 20,
                        margin: 10,
                        //backgroundColor: "#F1F9FF", 
                        alignContent: 'center'
                    }}
                    >   
                <Text style={{ fontSize:24,  height: 80, 
                color: "#2699FB", paddingTop:6,paddingLeft:10,textAlign: "center"} }
                 onPress={() => this.props.navigation.goBack()}>
                    <Icon name="chevron-left" size={20} color="#c91a1a" 
                     />           
                    </Text>
                    <Text style={{ fontSize:24, width:280, height: 100, 
                color: "#c91a1a", paddingLeft:20, textAlign: "left"} }>PROTECT PUBLIC SECTOR EMPLOYMENT  {"\n"} 
                AND UNION JOBS</Text>
                    <Text style={{ paddingTop:6, paddingLeft:20,height: 30} }
                    onPress={ ()=>{ 
                        Linking.openURL(this.state.url)}}>
                        <Icon name="pencil" size={20} color="#c91a1a" /></Text>
                </View>

                <View style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10,
                         borderBottomLeftRadius: 10, borderBottomRightRadius: 10,
                        borderWidth: 1, marginLeft:10, marginTop:10,marginRight:10, flex: 0.3 }} >
                            <Text style={{paddingLeft:20}}>
                            As a result of union organizing, public sector employment has raised the bar on wages, benefits, and enforcement of anti-discrimination laws to create an integrated workforce. During the 2008 economic recession, the budget crises in state and local governments allowed employers to lay off public sector employees, and slash wages, benefits, and pensions, which disproportionately impacted African American and Latino workers. During the current economic recovery period, those workers are not being recalled for political reasons and to reduce wage competition in the private sector.
                      </Text></View>

                <View style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10,
                        borderTopWidth:1,borderLeftWidth:1, borderRightWidth:1,  
                        marginLeft: 10,marginTop:10,marginRight:10, flex: 0.3 }} >
                    <Text style={{paddingLeft:20, fontSize:24, color:"black" }}> 
                    a. Campaign to Stop the Use of Welfare-to-Work Programs to Displace Public Sector Jobs{'\n'}
                    </Text>
                </View>

                <View 
                    style={{
                        flexDirection: "row",
                        height: 120,
                        paddingLeft: 20,
                        paddingRight: 20,
                        marginLeft: 10,
                        marginRight:10,
                        borderLeftWidth:1,
                        borderRightWidth:1,
                        //backgroundColor: "white"
                    }}
                    >
                <Text style={{
                        flexDirection: "row",
                        fontSize: 18
                        }}
                        >
               Counties are using welfare-to-work program participants to do the work of laid off public sector employees. Not only does this prevent the recall of laid off employees, but it also eliminates permanent civil service positions and opportunities for long-term employment for welfare-to-work participants.</Text>
                </View>
                <View style={{ backgroundColor: "#c91a1a",
                             marginLeft: 10,
                            marginRight:10,
                            marginBottom:10,
                            height: 40 }} >
                    <Text style={{margin:10, color: "white"} }
                        onPress={() => this.props.navigation.navigate('CampaignFourFullDetail')}>   Read More</Text>
                </View> 

                </View>

                <View style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10,
                        borderTopWidth:1,borderLeftWidth:1, borderRightWidth:1,
                          marginLeft: 10, marginTop:10,marginRight:10, flex: 0.3 }} >
                    <Text style={{paddingLeft:20, fontSize:24, color:"black" }}>
                    b. Campaign to Save the U.S. Postal Service{'\n'}
                    </Text>
                </View>

                <View 
                    style={{
                        flexDirection: "row",
                        height: 120,
                        paddingLeft: 20,
                        paddingRight: 20,
                        marginLeft: 10,
                        marginRight:10,
                        borderLeftWidth:1,
                        borderRightWidth:1,
                    }}
                    >
                

                <Text style={{
                        flexDirection: "row",
                        fontSize: 18
                        }}>
                    As a result of the current COVID-19 crisis, the USPS is in danger of bankruptcy. With the stall of the economy, reduction in mail volume and growing attacks made by the Trump Administration, the Postal Service could soon be wiped out financially.</Text>
                
                </View>
                <View style={{ backgroundColor: "#c91a1a", 
                            marginLeft: 10,
                            marginRight:10,
                            marginBottom:10,
                            height: 40 }} >
                            <Text style={{margin: 10, color: "white"}}
                             onPress={() => this.props.navigation.navigate('CampaignFourFullDetail2')}>   Read More</Text>
                </View> 

                
                <View style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10,
                        borderTopWidth:1,borderLeftWidth:1, borderRightWidth:1,
                          marginLeft: 10, marginTop:10,marginRight:10, flex: 0.3 }} >
                    <Text style={{paddingLeft:20, fontSize:24, color:"black" }}>
                    c. Fight for $15 and the Right to a Union Without Retaliation{'\n'}
                    </Text>
                </View>

                <View 
                    style={{
                        flexDirection: "row",
                        height: 120,
                        paddingLeft: 20,
                        paddingRight: 20,
                        marginLeft: 10,
                        marginRight:10,
                        borderLeftWidth:1,
                        borderRightWidth:1,
                    }}
                    >
                

                <Text style={{
                        flexDirection: "row",
                        fontSize: 18
                        }}>
                    Fast food workers have inspired a movement around the globe by demanding $15 per hour from McDonalds, Burger King, Wendy’s, KFC, and other fast food restaurants.</Text>
                
                </View>
                <View style={{ backgroundColor: "#c91a1a", 
                            marginLeft: 10,
                            marginRight:10,
                            marginBottom:10,
                            height: 40 }} >
                            <Text style={{margin: 10, color: "white"}}
                            onPress={ ()=>{ 
                                this.props.navigation.navigate('CampaignFourFullDetail3')}}>  Read More</Text>
                </View> 

                <View style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10,
                        borderTopWidth:1,borderLeftWidth:1, borderRightWidth:1,
                          marginLeft: 10, marginTop:10,marginRight:10, flex: 0.3 }} >
                    <Text style={{paddingLeft:20, fontSize:24, color:"black" }}>
                    d. Put pressure on Senators to pass the PRO Act{'\n'}
                    </Text>
                </View>

                <View 
                    style={{
                        flexDirection: "row",
                        height: 120,
                        paddingLeft: 20,
                        paddingRight: 20,
                        marginLeft: 10,
                        marginRight:10,
                        borderLeftWidth:1,
                        borderRightWidth:1,
                    }}
                    >
                

                <Text style={{
                        flexDirection: "row",
                        fontSize: 18
                        }}>
                    The Protecting the Right to Organize will help enact old labor laws in which workers will be given more power in the workforce. Support the PRO Act by pressuring Senators to pass it.
                    </Text>
                
                </View>
                <View style={{ backgroundColor: "#c91a1a", 
                            marginLeft: 10,
                            marginRight:10,
                            marginBottom:10,
                            height: 40 }} >
                            <Text style={{margin: 10, color: "white"}}
                            onPress={ ()=>{ 
                                this.props.navigation.navigate('CampaignFourFullDetail4')}}>  Read More</Text>
                </View> 
                
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
 

	container: {
		flex: 1,
	},

})