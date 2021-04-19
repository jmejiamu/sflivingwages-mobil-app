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


export default class CampaignFiveFullDetail3 extends React.Component{
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
                <Text style={{ fontSize:24, height: 60, color: "black"} }>c. Cross-Border Solidarity</Text>
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

Las Hormigas

Karl Kramer, campaign co-director from the San Francisco Living Wage Coalition, in November 2014 interviewed women maquiladora workers at Las Hormigas, a community center in the working class neighborhood of Anapra, on the desert outskirts of Ciudad Juarez.

Vero works in a maquila for the Lear Corporation. They sew the backs of car seats with bags for Hyundai and Mercedes. She earns 780 pesos weekly, or $57 at the current exchange rate of 13.75 pesos to the U.S. dollar, along with 140 “vales de dispensa” or bonus.

Bere works for Easton Bussmann making big light switches and circuits. Betty earns 870 pesos weekly, or $63, and 86 vales and a gift card for S-MART, the supermarket chain.

To put the wages in perspective, prices for food at the new S-MART supermarket in Anapra are 9.49 pesos for a kilo of tortillas ($.32 per pound), 10.99 pesos for a kilo of pinto beans ($.38 per pound), 9.99 pesos for a kilo of potatoes ($.35 per pound), 132 pesos for a kilo of ground beef ($4.57 per pound), 105 pesos for a kilo of t-bone steaks ($3.64 per pound), 132 pesos for roast beef ($4.57 per pound), 17 pesos per kilo for chicken legs ($.59 per pound) and 78 pesos for cheese ($2.70 per pound).

These women work the night shift. A night shift usually begins at 3:15, 3:45 or 4 p.m. and ends at 12:30 a.m. The commute by bus is usually an hour each way. Many times they are forced to work overtime.

If they do not go to work because their children are sick, they lose their salary for the day and their bonus for the week. If they are late, they also lose their salary for the whole day and their bonus.

Many of their complaints about their jobs have to do with their supervisors. Recently in Vero’s 22 person line, their supervisor told them that they had to make 1,200 car seat backs per day. The sewing machine seals burned. The supervisor pressured them to keep producing even as the machines were burning. The workers were choking on the smoke and heat.

Vero has a 15 minute break for supper and a 30 minute break for dinner. Vero’s crew has permission to go to Soriana supermarket for dinner but there is a guard at the door that says they cannot bring in food from the outside. The guard is a friend of their supervisor.

Betty works for Te Connetivity (ADC) making fiberoptic cables. Betty says the supervisor makes morale worse in their line. If they need something, he is in a bad mood. He looks at a cable and says that it is dirty and has to be cleaned again. They have trouble meeting their quota.

Bere said that if a line produces more, the company gives a gift to share with the whole line but the line chief keeps it for himself.

A major complaint is about the food served in the factory cafeterias. They have to pay 65 pesos ($4.75) per week for food. It is ugly food, they said. It has no flavor and is cold. “Crema de chicharron, what is that?” one woman said to everyone’s assent. Betty said that at supper at 6:45 p.m. they would have stew, rice and beans, and horchata that is merely flavored water. At 9:40 p.m., they have dinner which may be burritos. If they do not want that, they can an option of corn flakes and gelatin.

Vero said that they have supper at 5:15 p.m. which is burritos, fruit – papayas, melon, watermelon, pineapple and orange, chayotes (a pear-shaped squash), ham and cheese, and “salsa that is like water.” She said they get hard oreo cookies without the cream. She makes a twisting motion with her hands and licks with her tongue to show that it looks like someone licked off the cream from inside the cookies. They no longer get chicken because everyone once got sick from eating chicken so now the maquila has switched to turkey. Sometimes they get chimichangas with chorizo and lots of potatoes, or a soup with a little meat. The person serving the food sometimes insults them.

They talked about benefits on the job. Betty said that at Te Connetivity they get seven to eight paid vacation days per year.

Vero said at Lear they have a savings plan in which the company matches contributions by the employee. There also is a fund that each worker can choose to put money into and, if someone has a need, the person can ask for a loan from the fund.

There are paycheck deductions for government programs. From their paychecks, for example if they receive 1000 pesos salary, they would have deducted around 70 pesos for social security, which is a health care system in Mexico, and SAR which is retirement savings, and 70 pesos for infonavit which is a government agency that provides housing to workers. The worker asks the government agency to be put on a list and then begins paying more from his or her paycheck for the possibility of getting a home – which are very little houses with connected walls and no patios or gardens.

Bero likes the pláticas, in which everyday a supervisor at Lear gives a talk to workers about how to be safe on the job and to respect each other so they will feel better. Bero believes that the directors have a commitment to the safety of workers because every day they have presentations on how to prevent accidents, take care of themselves and be safe. The company has a strict rule against discrimination, racism, sexism, xenophobia and homophobia. Employees have the right to go to a supervisor and complain about discrimination. If the company finds that discrimination took place, the person is fired. Bero said that the company sends a message that women are important by celebrating International Women’s Day, Breast Cancer Day and Mothers Day.

Daniel Rocha García worked in a maquiladora, Camisas y Vestamex, in the 1980s. He was one of the organizers of a clandestine organization called the Resistance of Pancho Villa. Like now, major issues were food and treatment by supervisors. Someone told management that they were planning a strike. When security came to detain him, workers picked up scissors to protect him. For six years afterwards he could not get a job as a technician on sewing machines. When he went to apply for a job, they had his picture on a blacklist.

He began working for Centro de Estudio Taller Laboral (CETLAC), Labor Studies Workshops Center, in 1986. The Center provides assistance and advice to workers in organizing. It is part of the Frente Auténtico del Trabajo (FAT), the Authentic Workers Front, a federation of unions that are independent of the corruption-plagued governing political party, the Partido Revolucionario Institucional (PRI), the Institutional Revolutionary Party.

Daniel said that CETLAC is attempting to work in coalition with the PRI-affiliated labor federations – the Confederación de Trabajadores Mexicanos (CTM), the Confederation of Mexican Workers; Central Revolucionaria de Obreros y Campesinos (CROC), the Revolutionary Center of Workers and Peasants; La Confederación Nacional de Organizaciones Populares (CNOP), The National Confederation of Popular Organizations; and Confederación Revolucionaria de Trabajadores (CRT), Workers Revolutionary Confederation. The purpose is to form an alliance of leaders of informal workers who do not have social security or a legal process for organizing, which is in the Federal Labor Law article 358 Freedom of Association.

However, these labor federations have a different view of unions, not as organizations democratically run by workers and whose main purpose is protecting workers from management abuses. The CTM has “sindicalized” maquiladora workers into “sindicato charros” or “white unions,” which are “protection contracts” to control the workers. Many of the workers do not even know that they have a union.

CETLAC is helping 460 “parqueros,” an informal sector of workers who wave cars into available street parking places, organize a union. The parqueros negotiate with the city government over official permits and have end sections of street blocked for parking. CETLAC also helped organize a Union de Boleros, which is a union of shoe shiners in the downtown plaza, who negotiate with the city over the number and cost of permits.

When the anti-discrimination talks that Vero hears at Lear were described, Daniel said it is not extraordinary because the company wants to show it is abiding by the Federal Labor Law article 123 against discrimination. While the labor laws are strong on paper, they are weakly enforced. However, companies want to prop up a social fiction that the laws are followed.

CETLAC is organizing to address health and safety issues on the job. Major problems are carpal tunnel syndrome from repetitive motion injuries and inhalation of chemicals like ethanol-alcohol, like what Betty uses to clean the fiberoptic cables at Te Connetivity. Daniel said that maquilas that make medical products like Venusa are the worst.

The government does not consider these health problems to be job-related, but only general health problems.

The government also has not responded to environmental pollution. The maquila Solvent, which makes anhidric acid, has contaminated the land around the plant but the government remains silent
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