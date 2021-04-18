import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	ScrollView,
	Image,
    Linking
} from 'react-native';

import { Checkbox } from 'galio-framework';
import CampaignCard from './components/CampaignCard';
import { Card, ListItem, Button, Icon } from 'react-native-elements'



export default class CampaignScreen extends React.Component {
    
    render(){

	return (
		<ScrollView>

			<View style={styles.container}>
                <View style={styles.topbackground}>
                <Text Text style={{ paddingTop:40, fontSize:36, 
                    //color: "#2699FB",
                    color: "black",
                    textAlign:'center'}}>
                    Our Campaigns </Text>
                    <Text Text style={{ fontSize:24, color: "black", textAlign:'center'}}>
                    {'\n'}Stand for your rights</Text>
                </View>
               <View style={styles.lightbackground}>
                    < Text style={ styles.textSytle }
                        onPress={() => this.props.navigation.navigate('CampaignDetailpage')}>
                      RAISE WAGES
                    </Text>
               </View>
               <View style={styles.lightbackground}>
                    < Text style={ styles.textSytle }
                      onPress={() => this.props.navigation.navigate('CampaignTwoDetail',{filename:"campaignData.json"})} >
                       END THE INJUSTICE OF MASS INCARCERATION
                    </Text>
               </View>
               <View style={styles.lightbackground}>
                    < Text style={ styles.textSytle }
                     onPress={ ()=> this.props.navigation.navigate('CampaignThreeDetail')} 
                       >
                      REFORM A BROKEN IMMIGRATION SYSTEM
                    </Text>
               </View>    
               <View style={styles.lightbackground}>
                    < Text style={ styles.textSytle }
                    onPress={ ()=> this.props.navigation.navigate('CampaignFourDetail') } >
                       PROTECT PUBLIC SECTOR EMPLOYMENT AND UNION JOBS
                        {'\n'}
                    </Text>
               </View>
               <View style={styles.lightbackground}>
                    < Text style={ styles.textSytle }
                       >
                       ENACT FAIR TRADE POLICIES
                    </Text>
               </View>
              
                {/* <View>
                    <CampaignCard  navigate={this.props.navigation.navigate} />
                
                </View> */}
        </View>
	
		</ScrollView>
	);
    }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
    topbackground: {
        //flexDirection: "row",
		height: 240,
        padding: 20,
        margin: 10,
        borderColor: '#95989a',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: "white"
        //backgroundColor: "#F1F9FF"
	},
	lightbackground: {
        //flexDirection: "row",
		height: 100,
        padding: 20,
        margin: 10,
        borderColor: '#95989a',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: "white"
	},
	textSytle: {
		height: 50,
		//borderColor: '#d31623',
		//borderWidth: 1,
		borderRadius: 5,
		padding: 5,
        //color: "#2699FB",
        color: '#c91a1a',
		margin: 10,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: "center"
	},
	submitButton: {
		backgroundColor: '#d31623',
		padding: 10,
		width: 100,
		height: 40,
		marginTop: 20,
		borderRadius: 5,

	},
	buttonStyles: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		padding: 5,
		paddingBottom: 35
	},
	logo: {
		width: 125,
		height: 125,
		marginTop: 20
	},
	logoContainer: {
		marginTop: 10,
		justifyContent: 'center',
		alignItems: 'center'
	},
	submitButtonText: {
		color: 'white',
		fontWeight: "900",
		textAlign: "center"
	},
});
