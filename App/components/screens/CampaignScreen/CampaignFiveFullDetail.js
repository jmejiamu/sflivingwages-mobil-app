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


export default class CampaignFiveFullDetail extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            props: this.props.navigate,
            url: "https://www.youtube.com/watch?v=nMFee0CqkdI"
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
                color: "#c91a1a", paddingLeft:20, textAlign: 'center'} }>ENACT FAIR TRADE POLICIES</Text>
                    {/* <Text style={{  paddingTop:6, paddingLeft:20,height: 30} }
                    onPress={ ()=>{ 
                        Linking.openURL(this.state.url)}}>
                        <Icon name="pencil" size={20} color="#c91a1a" /></Text> */}
                </View>


                <View 
                    style={{
                        padding: 20,
                        marginLeft: 10,
                        marginRight:10,
                        //backgroundColor: "white"
                    }}>
                <Text style={{ fontFamily:"sans-serif", fontSize:24, width:260, height: 30, 
                color: "black", paddingLeft:20, fontWeight: "bold", textAlign: 'center'} }>  Action Steps:  
                </Text></View>
                <View 
                    style={{ flexDirection: "row",paddingLeft:20,  }}>
                <Text style={{ color:"#c91a1a"}}>1 </Text>
                <Text >Link to Why We’ve Launched Rethink Trade Video</Text>
                    </View>
                    <View 
                    style={{paddingLeft:20,  }}>
                <Text style={{ color:"blue"}}  onPress={ ()=>{ 
                        Linking.openURL(this.state.url)}}>Click here</Text>
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
                <Text style={{ fontSize:24, height: 60, color: "black"} }>a. Rethink Trade</Text>
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

Our movement includes tens of thousands of activists like you who fight every day to address the climate crisis, labor rights violations, Big Tech attacks on your privacy, Big Pharma monopolies that keep medicine prices high, attacks on food safety, income inequality, and social and economic justice.

Trade is at the intersection of all our concerns. If we do not get this right, not only will our aspirations be squelched but decades of gains made by progressive social movements will be undermined.

That’s why we must continue the fight together – and show the real choice is not between the corporate-rigged, failed neoliberal status quo and Trump’s racist, corporatist nationalism. 
                </Text>
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