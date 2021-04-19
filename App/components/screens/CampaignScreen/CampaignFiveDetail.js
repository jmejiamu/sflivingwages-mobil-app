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

export default class CampaignFiveDetail extends React.Component{
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
                color: "#c91a1a", paddingLeft:20, textAlign: "left"} }>ENACT FAIR TRADE POLICIES  {"\n"} 
                </Text>
                    <Text style={{ paddingTop:6, paddingLeft:20,height: 30} }
                    onPress={ ()=>{ 
                        Linking.openURL(this.state.url)}}>
                        <Icon name="pencil" size={20} color="#c91a1a" /></Text>
                </View>

                <View style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10,
                         borderBottomLeftRadius: 10, borderBottomRightRadius: 10,
                        borderWidth: 1, marginLeft:10, marginTop:10,marginRight:10, flex: 0.3 }} >
                            <Text style={{paddingLeft:20}}>
                            Bad trade agreements that do not have worker protections and rely on moving manufacturing and production to low-wage areas of the world are resulting in a vicious spiral to the bottom, without a safety net for those displaced from their livelihoods nor job training programs to provide skills for new jobs. 
                           </Text></View>

                <View style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10,
                        borderTopWidth:1,borderLeftWidth:1, borderRightWidth:1,  
                        marginLeft: 10,marginTop:10,marginRight:10, flex: 0.3 }} >
                    <Text style={{paddingLeft:20, fontSize:24, color:"black" }}> 
                    a. Rethink trade
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
               We need to create GOOD trade policies – to fight FOR trade that raises wages and lessens economic inequality, counters the planetary climate crisis, and curbs corporate power in this era of globalization. 
                </Text>
                </View>
                <View style={{ backgroundColor: "#c91a1a",
                             marginLeft: 10,
                            marginRight:10,
                            marginBottom:10,
                            height: 40 }} >
                    <Text style={{margin:10, color: "white"} }
                        onPress={() => this.props.navigation.navigate('CampaignFiveFullDetail')}>   Read More</Text>
                </View> 

                </View>

                <View style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10,
                        borderTopWidth:1,borderLeftWidth:1, borderRightWidth:1,
                          marginLeft: 10, marginTop:10,marginRight:10, flex: 0.3 }} >
                    <Text style={{paddingLeft:20, fontSize:24, color:"black" }}>
                    b. Campaign to Guarantee Protections for the Right to Organize a Union{'\n'}
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
                    Read about Susana Prieto Terrazas, a labor attorney and activist who was released from jail.
                    </Text>
                
                </View>
                <View style={{ backgroundColor: "#c91a1a", 
                            marginLeft: 10,
                            marginRight:10,
                            marginBottom:10,
                            height: 40 }} >
                            <Text style={{margin: 10, color: "white"}}
                             onPress={() => this.props.navigation.navigate('CampaignFiveFullDetail2')}>   Read More</Text>
                </View> 

                
                <View style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10,
                        borderTopWidth:1,borderLeftWidth:1, borderRightWidth:1,
                          marginLeft: 10, marginTop:10,marginRight:10, flex: 0.3 }} >
                    <Text style={{paddingLeft:20, fontSize:24, color:"black" }}>
                    c. Exposing the Effects of the North American Free Trade Agreement (NAFTA) and the Central American Free Trade Agreement (CAFTA-DR){'\n'}
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
                   After NAFTA was negotiated between the United States, Canada and Mexico and passed by Congress, almost immediately more than half-a-million factory jobs paying between $15 and $18 per hour were lost in the United States as companies shut down plants to move production and assembly across the border into Mexico where the minimum wage is $5 per day. In Mexico, more than 2 million people lost their livelihoods, were displaced off their lands and forced to move to the border areas to find work in the maquiladoras or by crossing into the United States. Mexican farmers with small plots of land and using handtools or ploughing animals could not compete with the U.S. corn agribusinesses, heavily mechanized and subsidized by the federal government, which dumped cheap corn on the Mexican market. 
                   </Text>
                
                </View>
                <View style={{ backgroundColor: "#c91a1a", 
                            marginLeft: 10,
                            marginRight:10,
                            marginBottom:10,
                            height: 40 }} >
                            <Text style={{margin: 10, color: "white"}}
                            onPress={ ()=>{ 
                                this.props.navigation.navigate('CampaignFiveFullDetail3')}}>  Read More</Text>
                </View> 

                <View style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10,
                        borderTopWidth:1,borderLeftWidth:1, borderRightWidth:1,
                          marginLeft: 10, marginTop:10,marginRight:10, flex: 0.3 }} >
                    <Text style={{paddingLeft:20, fontSize:24, color:"black" }}>
                    d. Promote Cross Border Solidarity with Maquiladora Workers{'\n'}
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
                    Ciudad Juarez, across the border from El Paso Texas, is the location of many huge maquiladoras. A growing movement of maquiladoras workers is protesting their working conditions.
                    </Text>
                
                </View>
                <View style={{ backgroundColor: "#c91a1a", 
                            marginLeft: 10,
                            marginRight:10,
                            marginBottom:10,
                            height: 40 }} >
                            <Text style={{margin: 10, color: "white"}}
                            onPress={ ()=>{ 
                                this.props.navigation.navigate('CampaignFiveFullDetail4')}}>  Read More</Text>
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
                    People displaced from other parts of Mexico would arrive on the outskirts of Ciudad Juarez and find a plot of sand. They would rope together wooden pallets and tack on black roofing paper to make walls and stretch a vinyl tarp across for a roof. After they made some money in the maquiladoras, they would start making a cinder block wall. In this way, the neighborhood of Anapra began to develop. Many people come from close-knit villages where their people lived for thousands of years. In Anapra,they are strangers to each other. The grass-roots organization Las Hormigas Comunidad en Desarrollo (the Ants, a community in development) built a community center to organize programs and workshops to develop a sense of community in Anapra. Building a collective identity and relations between people is a necessary step to winning social change.
                     </Text>
                
                </View>
                <View style={{ backgroundColor: "#c91a1a", 
                            marginLeft: 10,
                            marginRight:10,
                            marginBottom:10,
                            height: 40 }} >
                            <Text style={{margin: 10, color: "white"}}
                            onPress={ ()=>{ 
                                Linking.openURL("https://www.livingwage-sf.org/fair-trade/factory-workers-in-ciudad-juarez-protest-working-conditions-at-four-plants/")}}>  Read More</Text>
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