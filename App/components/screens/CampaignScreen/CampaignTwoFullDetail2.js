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


export default class CampaignTwoFullDetail2 extends React.Component{
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
                        height: 100,
                        padding: 20,
                        margin: 10,
                        //backgroundColor: "#F1F9FF", 
                        alignContent: 'center'
                    }}
                    >   
               
            
                <Text style={{ fontSize:24, height: 100, color: "#2699FB", paddingLeft:20} }
                 onPress={() => this.props.navigation.goBack()}>
                    <Icon name="chevron-left" size={20} color="#2699FB" 
                     />   End the Injustice of {"\n"}       Mass Incarceration
                    </Text>
                </View>

                {/* <View  style={{  margin: 20}} > 
                <Button  title="Sign a petition"  color="#2699FB"
                onPress={ ()=>{ Linking.openURL('https://actionnetwork.org/petitions/raise-wages-for-economic-recovery?source=email&;')}} />
                    </View> */}

                <View 
                    style={{
                        flexDirection: "row",
                        height: 100,
                        padding: 20,
                        margin: 10,
                        backgroundColor: "#F1F9FF"
                    }}
                    >   
                <Text style={{ fontSize:24, height: 100, color: "#2699FB"} }>               
b .Discrimination Against Formerly Incarcerated People</Text>
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
The stigma of felony convictions and incarceration follows people long after their court mandated “debt to society” has been paid. 19.8 million Americans (8.6% of the adult population) face incredible hardship and discrimination as they fight an uphill battle to rebuild their lives and stay out of the criminal justice system. In many ways, a felony conviction is like a scarlet letter that can severely limit and prevent a person’s ability to find housing, employment, or to receive student loans or aid from social welfare programs. Furthermore, many states further disenfranchise people with felony convictions by denying them the right to vote.

The most important factor in determining recidivism (or a relapse into criminal behavior) rates is the ability to find employment. If a formerly incarcerated person is unable to find employment after eight months, there is a 33% chance they will commit another crime landing them back behind bars. This increases to 50% after one year of unemployment and 70% after three years. Although it is clear that finding employment is essential for formerly incarcerated people to stay out of prison, only 12% of companies openly hire people with a felony conviction on their record. In fact, because 60% of inmates released from prison are unable to find employment within one year, nearly one out of every three people released from prison will commit a crime landing them back in prison within one year of their release.

Even convicted felons who are lucky enough to find employment hardly ever make a living wage. On average, they make 11% less than their counterparts without a criminal record for doing the same job, and work 12% fewer hours per week. It is estimated that discrimination against formerly incarcerated people results in earnings losses from 10-40%.

Discrimination against formerly incarcerated people disproportionately affects people of color. Even without considering the oppressive economic conditions that contribute to higher crime rates in Black and Latino communities, men and women of color are significantly more likely than white people to be convicted and receive longer sentences for committing the same crimes. Just as wage inequality between people of color and whites exists in the free workforce, as well as between people with and without a criminal record, there is a similar wage gap in the population of formerly incarcerated people. On average, formerly incarcerated people of color earn less than formerly incarcerated white people.

A criminal record should not be a life sentence to homelessness, poverty, and discrimination. We must advocate for policies and programs that promote “de-entry” instead of reentry into the criminal justice system, and push for wage equality that gives formerly incarcerated and formerly convicted people a fighting chance to rebuild their lives and return to their communities with dignity.

Written by Greg Lorentzen</Text>
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