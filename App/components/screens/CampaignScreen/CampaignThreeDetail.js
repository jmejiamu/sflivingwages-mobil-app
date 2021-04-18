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

export default class CampaignThreeDetail extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            
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
                color: "#c91a1a", paddingLeft:20, textAlign: "left"} }>REFORM A BROKEN {"\n"} 
                IMMIGRATION SYSTEM</Text>
                    <Text style={{ paddingTop:6, paddingLeft:20,height: 30} }
                    onPress={ ()=>{ 
                        Linking.openURL('https://www.livingwage-sf.org/pledge-of-resistance/')}}>
                        <Icon name="pencil" size={20} color="#c91a1a" /></Text>
                </View>

                <View style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10,
                        borderTopWidth:1,borderLeftWidth:1, borderRightWidth:1,  
                        marginLeft: 10,marginTop:10,marginRight:10, flex: 0.3 }} >
                    <Text style={{paddingLeft:20, fontSize:24, color:"black" }}> 
                    a. Dignity Campaign{'\n'}
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
                The Dignity Campaign creates a vision of progressive immigration reform. 
                We are part of a national network of immigrant rights organizations that 
                are building a grassroots movement that is demanding immigration reform 
                that provides full legalization, family reunification, an end to employer 
                sanctions and other workplace enforcement, an end to the militarization of 
                the border, 
                and an end to guest worker programs. </Text>
                </View>
                <View style={{ backgroundColor: "#c91a1a",
                             marginLeft: 10,
                            marginRight:10,
                            marginBottom:10,
                            height: 40 }} >
                    <Text style={{margin:10, color: "white"} }
                        onPress={() => this.props.navigation.navigate('CampaignThreeFullDetail')}>   Read More</Text>
                </View> 

                </View>

                <View style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10,
                        borderTopWidth:1,borderLeftWidth:1, borderRightWidth:1,
                          marginLeft: 10, marginTop:10,marginRight:10, flex: 0.3 }} >
                    <Text style={{paddingLeft:20, fontSize:24, color:"black" }}>
                    b. Stopping the Cancellation of Temporary Protected Status{'\n'}
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
                    Temporary Protected Status (TPS) is a program enacted by the U.S.
                     Congress in the 1990s to enable immigrants from countries that are 
                     experiencing armed conflict or a natural disaster the right to work 
                     and live in the United States. In 2018, the Trump administration moved
                      to cancel TPS for more than 400,000 migrants in the United States. 
                      The San Francisco Living Wage Coalition, along with many other organizations, 
                      formed the NorCal TPS Coalition to help protect TPS holders.</Text>
                
                </View>
                <View style={{ backgroundColor: "#c91a1a", 
                            marginLeft: 10,
                            marginRight:10,
                            marginBottom:10,
                            height: 40 }} >
                            <Text style={{margin: 10, color: "white"}}
                             onPress={() => this.props.navigation.navigate('CampaignThreeFullDetail2')}>   Read More</Text>
                </View> 

                
                <View style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10,
                        borderTopWidth:1,borderLeftWidth:1, borderRightWidth:1,
                          marginLeft: 10, marginTop:10,marginRight:10, flex: 0.3 }} >
                    <Text style={{paddingLeft:20, fontSize:24, color:"black" }}>
                    c. Stop the Raids and Deportations{'\n'}
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
                    Sign the Pledge of Resistance to take immediate action in the event 
                    that ICE targets any one of us or an employer threatens a worker with 
                    firing based on immigration status.</Text>
                
                </View>
                <View style={{ backgroundColor: "#c91a1a", 
                            marginLeft: 10,
                            marginRight:10,
                            marginBottom:10,
                            height: 40 }} >
                            <Text style={{margin: 10, color: "white"}}
                            onPress={ ()=>{ 
                                Linking.openURL('https://www.livingwage-sf.org/pledge-of-resistance/')}}>  Read More</Text>
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