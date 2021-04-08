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


export default class CampaignTwoFullDetail extends React.Component{
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
                        height: 80,
                        //padding: 20,
                        margin: 10,
                        //backgroundColor: "#F1F9FF", 
                        alignContent: 'center'
                    }}
                    >   
               
            
                <Text style={{ fontSize:24, height: 100, color: "#2699FB", paddingLeft:20} }
                 onPress={() => this.props.navigation.goBack()}>
                    <Icon name="chevron-left" size={20} color="#2699FB" 
                     />   End the Injustice of Mass Incarceration
                    </Text>
                </View>

                {/* <View  style={{  margin: 20}} > 
                <Button  title="Sign a petition"  color="#2699FB"
                onPress={ ()=>{ Linking.openURL('https://actionnetwork.org/petitions/raise-wages-for-economic-recovery?source=email&;')}} />
                    </View> */}

                <View 
                    style={{
                        flexDirection: "row",
                        height: 40,
                        padding: 10,
                        margin: 10,
                        backgroundColor: "#F1F9FF"
                    }}
                    >   
                <Text style={{ fontSize:24, height: 40, color: "#2699FB"} }>a.  Prison Privatization</Text>
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
               

A major hurdle in reconfiguring the current prison system is the advent of private sector prison companies, such as Corrections Corporation of America (CCA) and The GEO Group, Inc. These companies secure contracts by convincing counties and states that their methods will result in cost-cutting measures beneficial to the common taxpayer. Data from the U.S. Bureau of Justice Statistics has shown that cutting costs through the implementation of privatized prisons has “simply not materialized.”

Some of these prisons have perpetrated deplorable human rights violations. In a blistering report by the ACLU, jails operated by CCA and The GEO Group were found to restrict medical services or offer inadequate care, arbitrarily place inmates in solitary confinement, use methods akin to torture as punishment, and restrict non-US citizen inmates from contact with American-based family. Even within the confines of the American prison system, this surpasses the line of inappropriate conduct for a correctional facility.

Private prison companies often advocate for harsher sentencing laws, such as California’s three strikes law, harsher drug crime enforcement, and non-violent offender sentencing. Though they do not often voice their support for these laws publicly, they do make large political donations to politicians that advocate for stricter criminal laws. Since the 1980s, GEO and CCA have donated nearly $25,000,000 to politicians who advocate for laws in favor of prison privatization.

Not only has the privatization of the prison industry negatively impacted incarcerated people and taxpayers, but it has also resulted in unsafe and unjust working conditions for prison guards and staff. The Justice Policy Institute reports that private prisons do not allow their staff to unionize, leading to a number of problems for inmates and guards. Studies have shown that non-unionized prison guards are not given enough training on how to handle potentially dangerous situations, and have a higher turnover rate and lower wages in comparison to their unionized public prison counterparts. The results of poor training and high turnover rates have been connected to an increasing number of incidents of inmate violence, which is significantly higher in private prisons.

Written by Jefferson Gennerella</Text>
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