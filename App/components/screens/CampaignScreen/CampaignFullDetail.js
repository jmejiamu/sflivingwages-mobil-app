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


export default class CampaignFullDetail extends React.Component{
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
                        height: 20,
                        padding: 20,
                        margin: 10,
                        backgroundColor: "#F1F9FF", 
                        alignContent: 'center'
                    }}
                    >   
               
            
                <Text style={{ fontSize:24, height: 100, color: "#2699FB", paddingLeft:20} }
                 onPress={() => this.props.navigation.goBack()}>
                    <Icon name="chevron-left" size={20} color="#2699FB" 
                     />            RAISE WAGE
                    </Text>
                </View>

                <View  style={{  margin: 20}} > 
                <Button  title="Sign a petition"  color="#2699FB"
                onPress={ ()=>{ Linking.openURL('https://actionnetwork.org/petitions/raise-wages-for-economic-recovery?source=email&;')}} />
                    </View>

                <View 
                    style={{
                        flexDirection: "row",
                        height: 100,
                        padding: 20,
                        margin: 10,
                        backgroundColor: "#F1F9FF"
                    }}
                    >   
                <Text style={{ fontSize:24, height: 100, color: "#2699FB"} }>a. CAMPAIGN FOR CITY FUNDING FOR MCO WAGE INCREASE FOR NON-PROFITS</Text>
                </View>

                <View 
                    style={{
                        flexDirection: "row",
                        padding: 20,
                        marginLeft: 10,
                        marginRight:10,
                        backgroundColor: "#F1F9FF"
                    }}
                    >
                        
                <View style={{ backgroundColor: "blue", flex: 0.3 }} />
                <View style={{ backgroundColor: "red", flex: 0.5 }} />
                
                <Text style={{
                        flexDirection: "row",
                        fontSize: 24
                        }}
                        >
                The Budget and Appropriations Committee of the Board of Supervisors, led by chair Supervisor Sandra Fewer 
                with members Supervisors Shamann Walton, Hillary Ronen, Norman Yee and Rafael Mandelman, approved in their 
                proposed spending plan $2.1 million for the 3.31 percent cost-of-living adjustment to the Minimum Compensation Ordinance 
                retroactive to July 1 as a one-time, one-year “Non-profit Worker Emergency Support.” This will increase the minimum wage 
                for city-funded non-profit workers and CalWORKs parents in welfare-to-work programs from $16.50 to $17.05. The Supervisors also included $675,000 
                in additional funding to raise wages for IHSS home care workers to $17.50 per hour.</Text>
                </View>
                <View style={{ backgroundColor: "#BEF0FD",
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