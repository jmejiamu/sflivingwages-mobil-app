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

import customData from './campaignData.json';

export default class CampaignTwoDetail extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
            filename: this.props.filename,
            post1: customData[0].name,
            content1: customData[0].content,
            post2: customData[1].name,
            content2: customData[1].content,
        
        }
        //print(filename)
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
                color: "#2699FB", paddingLeft:0, textAlign: 'center'} }
                 onPress={() => this.props.navigation.goBack()}>
                    <Icon name="chevron-left" size={20} color="#2699FB" 
                     />   End the Injustice of Mass Incarceration{"\n"}
                     
                    </Text>
                </View>
                        <View style={{ backgroundColor: "#F1F9FF",  marginLeft: 10,
                        marginTop:10,marginRight:10, flex: 0.3 }} ><Text style={{paddingLeft:20}}>
                        A broken criminal justice system is turning to mass incarceration as a source of cheap prison labor. The formerly incarcerated
                      or convicted then face lifetime job discrimination that leaves them unemployed or in the dirtiest, most dangerous, 
                      and lowest paying jobs.
                      </Text></View>
                

                <View style={{ backgroundColor: "#F1F9FF",  marginLeft: 10,
                        marginTop:10,marginRight:10, flex: 0.3 }} >
                    <Text style={{paddingLeft:20, fontSize:24, color:"#2699FB" }}> 
                    {this.state.post1}{'\n'}
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
                 {this.state.content1}</Text>
                </View>
                <View style={{ backgroundColor: "#BEF0FD",
                             marginLeft: 10,
                            marginRight:10,
                            height: 40 }} >
                    <Text style={{ margin: 10 } }
                        onPress={() => this.props.navigation.navigate('CampaginTwoFullDetail')}>   Read More</Text>
                </View> 

                </View>

                <View style={{ backgroundColor: "#F1F9FF",  marginLeft: 10,
                        marginTop:10,marginRight:10, flex: 0.3 }} >
                    <Text style={{paddingLeft:20, fontSize:24, color:"#2699FB" }}>
                    {this.state.post2}{'\n'}
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
                {this.state.content2}</Text>
                                    
                </View>
                <View style={{ backgroundColor: "#BEF0FD", 
                            marginLeft: 10,
                            marginRight:10,
                            marginBottom: 20,
                            height: 40 }} >
                            <Text style={{margin: 10 }}
                            onPress={() => this.props.navigation.navigate('CampaignTwoFullDetail2')}>   Read More</Text>
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

    //     Private prison companies often advocate for harsher sentencing laws, such as California’s three strikes law, harsher drug crime enforcement,
    //     and non-violent offender sentencing. Though they do not often voice their support for these laws publicly, they do make large political donations to politicians that advocate for stricter criminal laws. Since the 1980s, GEO and CCA have donated nearly $25,000,000 to politicians who advocate for laws in favor of prison privatization.
    //    Not only has the privatization of the prison industry negatively impacted incarcerated people and taxpayers, but it has also resulted in unsafe and unjust working conditions for prison guards and staff. The Justice Policy Institute reports that private prisons do not allow their staff to unionize, leading to a number of problems for
    //     inmates and guards. Studies have shown that non-unionized prison guards are not given enough training 
    //    on how to handle potentially dangerous situations, and have a higher turnover rate and lower wages in comparison to their unionized public prison counterparts. The results of poor training and high turnover rates have been connected to an increasing number of incidents of inmate violence,
    //     which is significantly higher in private prisons.Written by Jefferson Gennerella