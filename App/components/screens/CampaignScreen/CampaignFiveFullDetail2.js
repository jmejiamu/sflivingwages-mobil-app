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


export default class CampaignFiveFullDetail2 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            props: this.props.navigate,
            url: "https://citizenstrade.salsalabs.org/CTC081120PrietoNAFTAEnforcementPetition/index.html?eType=EmailBlastContent&eId=bd6e94b0-c484-4be3-a00e-826dd1c0db93"
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
                color: "black", paddingLeft:20, fontWeight: "bold", textAlign: 'center'} }>  Action Steps:  
                </Text></View>
                <View 
                    style={{ flexDirection: "row",paddingLeft:20,  }}>
                <Text style={{ color:"#c91a1a"}}>1 </Text>
                <Text >Sign this petition to stop the attacks against Mexican workers {'\n'}and to drop the charges against labor attorney/activist Susana Prietro Terrazas.</Text>
                    </View>
                    <View 
                    style={{paddingLeft:20,  }}>
                <Text style={{ color:"blue"}}  onPress={ ()=>{ 
                        Linking.openURL(this.state.url)}}>Click here</Text>
                    </View>

                    <View 
                    style={{ flexDirection: "row",paddingLeft:20,  }}>
                <Text style={{ color:"#c91a1a"}}>2 </Text>
                <Text >Support Maquiladora Workers in Ciudad Juarez</Text>
                    </View>
                    <View 
                    style={{paddingLeft:20,  }}>
                <Text style={{ color:"blue"}}  onPress={ ()=>{ 
                        Linking.openURL("https://www.paypal.com/donate?token=_eVvVzuVDiZ6zHjsR-B09pQpk70kX5Fr1nfIV6IdSLYtjL1GqxXIPgF6kJ7_SEeRygTugx2uZZfmzyma")}}>Click here</Text>
                    </View>    

                    <View 
                    style={{ flexDirection: "row",paddingLeft:20,  }}>
                <Text style={{ color:"#c91a1a"}}>3 </Text>
                <Text >Share video of David Bacon on the links between U.S. Trade and Immigration Policies</Text>
                    </View>
                    <View 
                    style={{paddingLeft:20,  }}>
                <Text style={{ color:"blue"}}  onPress={ ()=>{ 
                        Linking.openURL("https://www.youtube.com/watch?v=WEkifI20Sek")}}>Click here</Text>
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
                <Text style={{ fontSize:24, height: 60, color: "black"} }>b. Crusading Labor Lawyer Freed from Jail {'\n'}on Conditions to Chill Organizing</Text>
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

Labor attorney Susana Prieto Terrazas is a crusading labor activist who for a long time has formed independent unions in Juarez and other border towns. Prieto led a series of 2019 walkouts demanding fair pay to all maquiladora factories workers. At the beginning of this year, she achieved attention with her 20/32 campaign, in which she called for 20 percent workers’ pay raise and a 32,000- peso ($1,600) bonus.

Early last month, Prieto was arrested for allegedly organizing riots, threats, and coercion by maquiladora workers. Fond of social media, Prieto transmitted her arrest on June 8 via Facebook Live to inform her supporters of her unconstitutional arrest.

Prieto was released from prison by a Tamaulipas state judge on the condition that for the next two-and-a-half years she not set foot in the state. “I am being exiled from Tamaulipas,” she said as she was being transported by a police vehicle from the state capital Ciudad Victoria to Monterrey, Nuevo León.

She also was prohibited from leaving Mexico and was ordered to remain in Chihuahua. “It is illegal…an affront to my rights, to transit rights. But of course, all in my prosecution was illegal,” Prieto said.

Contrary to the charges, at the time of her arrest, the only thing Prieto was fighting was for workers’ rights to health and safety protections from COVID-19. Many border processing facilities have not shut down their assembly lines, nor have they slowed down, in response to coronavirus outbreaks. Masks and other protective equipment were not distributed, and transportation to the factories continued to be on packed buses. Prieto said that 25 percent of the maquiladora employees had fallen ill and that “death started in Matamoros.” Maquiladora owners responded to Prieto’s attempt to educate workers about their rights in an effort to not lose more lives to the pandemic by having the authorities toss her in jail.
The Maquiladora industry was born in Nogales, Sonora, 50 years ago as part of the Mexican government’s National Border Development Program (PRONAF), focused on the endless quest for low-wage labor sources.


From left, attorney Susana Prieto, Adriana Rivera – former employee at Eagle Ottawa, Gabriela Ramos – former employee of Johnson Controls, Miriam Delgado – former employee at Lexmark, Fernando Hernandez – former employee at Eaton Bussman

From basic assembly to more complicated processing, a vast creation of first, second, and third-tier maquiladoras now provide manufacturing services. Growing with global economic demands for on-time production, efficient manufacturing, and low labor costs, the maquiladora market is a combination of foreign-owned and local-owned companies located mainly along the United States and Mexico border.

Throughout the last 50 years, the maquiladora market has been reaping a labor supply chain nightmare, with many unsafe working practices. Not being represented by unions free of employer control for generations of workers made for disturbing almost slave-like conditions of labor. In the rigidly controlled maquiladoras, the workforce is disempowered by political alliances between companies, government authorities and unions.

Workers are discouraged from seeking healthier living and working conditions, higher pay and better access to health care in fear of reprisals such as less overtime or termination. Activists are putting the pressure of reform on the maquiladora sector itself.

At the Mexican border, as they have in the United States, protests and wildcat strikes continue from workers unwilling to submit themselves on the job to the risk of COVID-19. Mexican workers have no leverage to claim their rights, and the picture is not being changed by the United States-Mexico-Canada Agreement (USMCA).

Prieto said she would appeal the judge’s order to kick her out of Tamaulipas, to continue her advocacy in that state. Prieto plans to sue, claiming her arrest violated the new trade agreement.

“My real crimes,” she said, “have been the defense of workers’ rights.”

By Paola Plascencia Garcia
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