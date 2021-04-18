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


export default class CampaignFourFullDetail4 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            props: this.props.navigate,
            url: "https://actionnetwork.org/letters/pass-the-protecting-the-right-to-organize-pro-act?source=direct_link&"
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
                color: "black", paddingLeft:20, fontWeight: "bold", textAlign: 'center'} }>  Additional Materials:  
                </Text></View>
                <View 
                    style={{ flexDirection: "row" ,paddingLeft:20}}>
                <Text style={{ color:"#c91a1a"}}>1 </Text>
                <Text>Read about the previous postal service article </Text>
                    </View>
                    <View 
                    style={{paddingLeft:20,  }}>
                <Text  onPress={ ()=>{ 
                        Linking.openURL("https://www.livingwage-sf.org/save-the-us-postal-service/")}}>Click here</Text>
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
                <Text style={{ fontSize:24, height: 60, color: "black"} }>d. Put pressure on Senators to pass the PRO Act</Text>
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

“In our glorious fight for civil rights, we must guard against being fooled by false slogans, such as ‘right to work.’ It is a law to rob us of our civil rights and job rights. Its purpose is to destroy labor unions and collective bargaining…” – Martin Luther King Jr.

The Protecting the Right to Organize (PRO) Act, which passed in the House of Representatives in February, would amend old labor laws that effectively rig the system against working people. If passed, workers would have more power in workplace disputes and collective-bargaining rights. It would also add penalties for companies that retaliate against workers who organize, and it would weaken “right-to-work” laws.
The term “right-to-work” is purposely misleading. Proponents of the laws argue that they protect workers from being forced to join a union, but the reality is that states are not legally allowed to force anyone to join a union. “Right-to-work” means that workers are allowed to benefit from union organization and representation without paying for it. This makes it much harder for unions to organize and demand fairer conditions, more benefits, and just wages. These laws ultimately lower wages for everyone, solely benefiting big corporations at the expense of workers.
In reality, the slogan “right-to-work-for-less” would be more accurate. According to the Economic Policy Institute, wages in “right-to-work” states are 3.1% lower than in other states. These states have lower rates of health insurance coverage, higher rates of poverty, infant-mortality, and workplace fatality. This issue stretches far beyond politics; demanding a living wage is about the universal human right to thrive in American society. Supporting the PRO Act is supporting working people everywhere.

-By Catherine Winger</Text>
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