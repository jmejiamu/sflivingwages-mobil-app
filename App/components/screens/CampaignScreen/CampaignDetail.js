import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	ScrollView,
	Image,

} from 'react-native';

import { Checkbox } from 'galio-framework';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class CampaignDetail extends React.Component{
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
                        height: 80,
                        padding: 20,
                        margin: 10,
                        //backgroundColor: "#F1F9FF", 
                        alignContent: 'center'
                    }}
                    >   
                <Text style={{ fontSize:24, height: 100, 
                color: "#2699FB", paddingLeft:20, textAlign: 'center'} }
                 onPress={() => this.props.navigation.goBack()}>
                    <Icon name="chevron-left" size={20} color="#2699FB" 
                     />            RAISE WAGE
                    </Text>
                </View>

                <View style={{ backgroundColor: "#F1F9FF",  marginLeft: 10,
                        marginTop:10,marginRight:10, flex: 0.3 }} >
                    <Text style={{paddingLeft:20, fontSize:24, color:"#2699FB" }}> 
                     a. Campaign for City Funding for MCO Wage Increase for Non-profits{'\n'}
                    </Text>
                </View>

                <View 
                    style={{
                        flexDirection: "row",
                        height: 220,
                        paddingLeft: 20,
                        paddingRight: 20,
                        marginLeft: 10,
                        marginRight:10,
                        backgroundColor: "#F1F9FF"
                    }}
                    >
                <Text style={{
                        flexDirection: "row",
                        fontSize: 18
                        }}
                        >
                The Budget and Appropriations Committee of the Board of Supervisors, led by chair Supervisor Sandra Fewer with members Supervisors Shamann Walton, Hillary Ronen, Norman Yee
                and Rafael Mandelman, approved in their proposed spending plan $2.1 million
                for the 3.31 percent cost-of-living adjustment to 
                the Minimum Compensation Ordinance retroactive to July 1 as a one-time, 
                one-year “Non-profit Worker Emergency Support.”</Text>
                </View>
                <View style={{ backgroundColor: "#BEF0FD",
                             marginLeft: 10,
                            marginRight:10,
                            height: 40 }} >
                    <Text style={{margin:10} }
                        onPress={() => this.props.navigation.navigate('CampaignFull')}>   Read More</Text>
                </View> 

                </View>

                <View style={{ backgroundColor: "#F1F9FF",  marginLeft: 10,
                        marginTop:10,marginRight:10, flex: 0.3 }} >
                    <Text style={{paddingLeft:20, fontSize:24, color:"#2699FB" }}>b. Support the Heroes Act{'\n'}
                    </Text>
                </View>

                <View 
                    style={{
                        flexDirection: "row",
                        height: 220,
                        paddingLeft: 20,
                        paddingRight: 20,
                        marginLeft: 10,
                        marginRight:10,
                        backgroundColor: "#F1F9FF"
                    }}
                    >
                

                <Text style={{
                        flexDirection: "row",
                        fontSize: 18
                        }}>

                The CARES Act which was passed down to help out those who were impacted by COVID-19. 
                However, individuals such as Dreamers, sex workers, people without Social Security Cards,
                and undocumented immigrants have been left out. The Heroes Act was introduced to give extended health insurance, 
                unemployment insurance, and much more. If passed, the Heroes Act could extend 
                to reach out to undocumented immigrants and other vulnerable communities.</Text>
                
                </View>
                <View style={{ backgroundColor: "#BEF0FD", 
                            marginLeft: 10,
                            marginRight:10,
                            marginBottom:10,
                            height: 40 }} >
                            <Text style={{margin: 10 }}
                             onPress={() => this.props.navigation.navigate('CampaignFullDetail2')}>   Read More</Text>
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