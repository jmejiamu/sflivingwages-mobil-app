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


export default class CampaignFullDetail2 extends React.Component{
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
                       // backgroundColor: "#F1F9FF", 
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
                <Text style={{ fontSize:24, height: 100, color: "#2699FB"} }>b. Support the Heroes Act</Text>
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
                        fontSize: 14
                        }}
                        >
                The CARES Act, passed by the Senate on March 25, allocated $2 trillion dollars to mitigate the devastating effects of the COVID-19 pandemic, including direct payments to tax-paying individuals. However, the CARES Act excludes those without Social Security numbers, leaving out nearly 12 million undocumented individuals and Dreamers. There is also language in the legislation that excludes sex-workers, affecting over a million people.

On June 12th, the Heroes Act was introduced to the House of Representatives. According to the AFL-CIO, this bill “gives aid for state and local governments, public schools, the U.S. Postal Service, and pension funding relief; keeps workers on payrolls to avoid mass layoffs; extends unemployment insurance; provides more direct payments to working people; extends health care coverage; provides housing and food benefits; and much more.” The Heroes Act would extend coverage to undocumented people and other people in vulnerable communities. Right now, this bill has passed in the House of Representatives and we are waiting on the Senate.</Text>
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