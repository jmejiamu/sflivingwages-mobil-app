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


export default class CampaignFiveFullDetail4 extends React.Component{
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
                <Text style={{ fontSize:24, height: 60, color: "black"} }>d. Factory Workers in Ciudad Juarez Protest Working Conditions at Four Plants</Text>
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

Along with an upturn in production, Ciudad Juarez is experiencing a boom of workers demanding their rights.
Workers at maquiladoras, “golden factories,” that assemble or manufacture products for export, have been staging various actions to protest poor wages, unsafe working conditions and sexual harassment and discrimination.
The plants include Lexmark, which assembles printing cartridges; Foxconn Las Torres, which assembles boxes for prepaid TV and computer monitors; Eaton Industry and Eaton Bussman, which assemble electric fuses for cars; and CommScope, previously ADC, which makes fiber optic cable and other telecommunication equipment.

In June 2015, workers at the 5000-worker Foxconn Scientific Atlanta facility kicked off the wave of actions by protesting bad working conditions and sexual harassment. They filed charges with the state Secretary of Labor and Social Foresight. They won their demands in getting an abusive supervisor fired but many of the workers were also fired. However, they forced a reluctant management to give them severance pay.
One of the Foxconn's plants in Ciudad Juarez
One of the Foxconn’s plants in Ciudad Juarez

In August 2015, Foxconn workers organized a demonstration and stopped tractor trailers at the entrance gate. Foxconn workers filed a petition for union recognition with the state Secretary of Labor in September. The company eventually dropped its demand that workers pay a fine for stopping the trailers but still refused to grant union recognition. Currently, between 120 and 130 workers have been fired by Foxconn for union activities. On November 2 they set up a plantón.

Workers at Eaton Industry started the first plantón, an around-the-clock encampment outside of the company entrance gate. Around 12 workers were fired but workers also won demands that air conditioning stays on longer than one hour a day and that the company repairs air vents to take out toxic fumes.

CommScope employs around 3000 workers. On September 16, a group of 190 CommScope workers went to the federal Labor Conciliation and Arbitration Board and filed a request for a “registro,” or legal status, for a union. The company fired 171 workers on October 19 who then organized a plantón at the factory gates.

On November 12 of the same year, hundreds of CommScope and Foxconn workers and supporters marched through the streets of Juarez demanding an independent union and the rehiring of fired workers.

The Mexican non-governmental organization Cereal, a Jesuit-supported worker advocacy organization with offices in Mexico City and Guadalajara, and the Amsterdam-based Good Electronics Network released a joint statement urging Foxconn to respect the right of its workers to organize and bargain collectively, to earn a living wage and to enjoy improved working conditions. The statement noted that the Taiwanese-owned Foxconn has signed the Electronic Industry Citizenship Coalition’s Code of Conduct, a set of principles that includes the right of workers to freely join unions and engage in peaceful assembly.

The Lexmark plant has from 1,500 to 2,800 workers. The past practice of getting wage increases was that workers would need to earn certificates showing that they had gained expertise in a job. The company brought in new employees at the same wage rate as workers who had earned certificates.

At Lexmark, in a building that workers call The Mine, women inject ink into cartridges. They wear paper masks and wear latex gloves that do not protect them from the chemicals. Periodically, the company does a medical examination of workers but does not release the results to them. Many workers have breathing problems.

Lexmark workers filed a petition for a union on November to the president of the conciliation board which is under the Secretary of Labor.

Lexmark workers then went on strike. Between December 7 and 11, 700 workers stopped assembly lines for five days. Then in an adjoining facility, called the LLCP, 150 workers stopped work from December 9 to 11.

The state Secretary of Labor, Fidel Perez, came to the Lexmark plant and read the list of workers who filed the petition for union recognition. The company fired 100 of those workers without severance pay a day before they were supposed to receive their aguinaldo, a legally-required Christmas bonus.

Secretary Perez continued to be the voice of the company. He told workers on December 18 that the company would give them a 750 peso bonus every three months if they did not miss more than a day of work. Lexmark also promised to increase salaries by 4.2 percent.

Lexmark management refuses to meet with workers.
Besides the 76 workers at Lexmark, there are 20 workers in a plantón at Eaton.

Susana Prieto Terrazas is the labor attorney for workers at Eaton Bussman and Lexmark. According to Prieto, under the Mexican Constitution, article 123(a), private sector employees such as those in maquilas, have to petition to the state government rather than the federal government, to certify a union.

Prieto is talking to other attorneys about setting up a binational foundation for all maquila workers.

Out in the remote Sur Oriente district of Juarez, the southeast section of the city, on Boulevard Independencia, sits the Lexmark plant, a square block of a building. In the distance, the sheer faces of the mountain range Sierra Madre Occidental jut out of the desert floor like broken teeth.

Near the entrance gate, workers set up a patchwork-quilt of tents and tarps over a dirt and gravel floor. They have a wood-burning stove in the entrance tent, next to a stack of metal folding chairs. The others four adjoining tents have chairs, cots and bedding. A dog with missing patches of fur runs in and out of the tents. Bags of firewood are stacked on one side and a long table with aluminum trays and plastic bags of donated food are on another side.
Snow falls on planton outside 1
Snow falls on planton outside 2
Snow falls on planton outside 3
Snow falls on the planton outside the Lexmark camp

On the Saturday night after Christmas, a freak snow storm has dropped a foot of snow within hours. The strikers scramble to scrape it off the tent as water pours down on the stove.
Striking Lexmark workers inside tents where they eat and sleep
Striking Lexmark workers inside tents where they eat and sleep

Around a dozen workers assemble in the tent to discuss their grievances. They have worked at the plant for five to 13 years. Newly hired employees are receiving a better salary.

They said that of the 100 workers who have been fired, 76 are participating in the plantón, staying at it in shifts. At least eight to nine are single mothers. They are surviving on donations and sidewalk sales outside of their homes. Residents of Juarez have been dropping off firewood and food and churches in El Paso have been collecting food. Workers have asked for loans from relatives to pay for electricity and busfare.

A woman describes putting ink into cartridges and then checking them with a strong light to see if they have bubbles. She says that the light has caused her eye problems. She is paid 534 pesos per week, around $31.60.

Another striker says that she has to move a two-pound object in a repetitive motion all day that causes pain in her arm and fingers and she can no longer move her fingers normally.
A woman in a red jacket who has worked at the plant for six years says that she applies a powder to prevent static electricity that maker her face break out in pimples. She also has problems with her hands but since she has been fired she cannot receive medical care. She has two children.

Laura had been at Lexmark for 9 years and 4 months and had many certificates. She assembles the little pieces of a printer cartridge. She has four children, the youngest is 14 years old. She makes between 480 to 560 pesos per week, $28.40 to $33.14. After she returned to work after being hit by a car and injuring her ankle, she asked for a wage increase. Her last increase had been in September for 7 pesos per week, less than 50 cents. The company told her that because the doctor had ordered her to be seated while working, she would no longer be getting wage increases. She works at another maquila on Saturdays and Sundays assembling car air conditioners.

Most of the strikers are women. There are a couple of men. A man who works at another maquila is with his wife who works at Lexmark doing the detailed work of putting screws into the cartridges. She receives 480 pesos, $28.40, a week after taxes. She has to pay 70 pesos per week to eat in the cafeteria.

She shows a cell phone photo of a cloud of black smoke rising off the roof of the plant. Workers smell the smoke throughout the factory. When they blow their noses, they have black mucus from the toner and ink.

“Lexmark is not following environmental laws. It is releasing chemicals through vents but claiming that it is water vapor,” Cecilia Espinosa said.

Espinosa, 41, a former maquiladora worker, describes herself as a human rights defender with Colectiva de Rosa Luxemburgo. She worked for many years with Pastoral Obrero, and then with the Center for Human Rights of Paso del Norte. Her salary is paid by the Mesa de Mujeres, a women’s human rights group. Two years ago, she founded Colectiva de Rosa Luxemburgo with Elizabeth Avalos. They adopted the name of the German leftist because they liked her vision of a world in which people can all be different but socially the same.

Avalos, 42, is a maquiladora worker. She also started activism in Pastoral Obrero. From 2004 to 2010, she worked for the Center for Labor Studies, CETLAC, which was affiliated with the Authentic Labor Front, FAT. Then she returned to working in a maquiladora. On returning, she found conditions to be worse than in the past.

The Colectiva has six members. They are engaged in labor rights, political rights and promoting the solidarity economy of supporting worker-owned cooperatives.
Cecilia Espinosa and Elizabeth Avalos in the office of the Colectiva de Rosa Luxemburgo
Cecilia Espinosa and Elizabeth Avalos in the office of the Colectiva de Rosa Luxemburgo

A year ago they began a “diagnostic” of workers’ rights in maquiladoras. Their methodology is based on the International Labor Organization, viewing workers rights in the context of human rights. They work out of an office in a storage area behind the home of Cecilia’s parents, where they collect data on a desktop computer with a few shelves for books and papers.

When the current worker actions began, they shifted gears into providing support.

“The antecedents are four to five years of violence, a lot of unemployment and the economic problems of the United States,” Espinosa said of the roots of the current labor upsurge.

The drug war violence initiated by the previous Mexican president Felipe Calderon, and financed by the United States, has ebbed. The U.S. financial crisis and subsequent international recession had hit the Mexican economy hard. With the U.S. economic recovery, production is rebounding in Juarez and there is a labor shortage.

The federal, state and municipal governments are working to propel economic investment in Juarez. Mexican president Enrique Peña Nieto went to France to woo French companies to come to Mexico.

Juarez’s Municipal President Enrique Serrano is a rising star in the Party of the Institutional Revolution, the PRI, and in line to be candidate for governor next year.
Chihuahua Governor Cesar Duarte is pushing for increasing investment in products made or assembled by the hands of people in Chihuahua. The way this is being played out is a classic means of pitting workers against workers.

“One of the problems that began the movement was that in some places, the maquiladoras are picking up workers outside of Juarez, in towns such as Janos or Buenaventura, and take them each day by bus to the maquilas,” Espinosa said. “They begin to work with the best salary as if they had eight to 10 years of seniority at the maquila.”
Management pressured existing workers to work more hours without an increased salary and accept abuse.

“There is pressure on workers that if they don’t like it, they can go, but they can’t go elsewhere because they put their names on a blacklist,” Espinosa said.

Working conditions are deteriorating. A few years ago, workers had production bonuses, transportation, a cafeteria and other supports. Now, these extras are being cut.

Espinosa connected the push to lure in transnational corporations without required conditions to the Trans Pacific Partnership, the free trade agreement secretly negotiated between the United States and a dozen Pacific Rim nations that is currently awaiting a vote in the U.S. and Mexican Congresses.

“This is part of the push for the Trans Pacific Partnership. Mexico wants to generate work for big companies and the cost is that ever day workers are poorer,” Espinosa said.

“It is not clear on how it will have an effect on Mexican workers but looking back on NAFTA (the North American Free Trade Agreement) and other treaties that have not had a benefit for Mexican workers, TPP will be the same or worse with poor conditions and more unemployment,” Avalos added.

“Peña Nieto has made structural reforms that go to make this situation for workers, to permit big companies and those who have money to benefit and not the workers, and to benefit big companies outside of Mexico,” Avalos said.

The federal minimum wage in Mexico increases on January 1 from 70.10 pesos per day to 73 pesos per day, $4.22 in U.S. dollars.

Even the overtime laws have been changed in Chihuahua. The federal law is based on a 48 hour week over six days. Any hour worked over eight hours in a day is paid at double time, and when those extra hours exceed nine hours in a week, the additional hours are at triple time.

In 1989, then Governor Francisco Barrio signed a state law that allowed maquilas to operate on 5 day week of 9 hour days with a half-hour unpaid meal break. Only the hours after 9-and-a-half hours count as overtime.

Sergio Ornelas, the editor of BorderNOW, a monthly publication of the maquiladora industry, wrote in the August issue that Foxconn is among the main Electronic Manufacturing Services (EMS) firms in Mexico. These are firms that manufacture finished goods, components and do repair work for Original Equipment Manufacturers (OEMS). EMS companies had revenues of $33 billion in 2014, according to data from New Venture Research Corp.

There was an exodus to China of many electronics firms in the early 2000’s, but now wages in China have been creeping up and are slightly higher than Mexico’s, according to Ornelas.

Ornelas sees the possibility of a “Silicone Wave” developing in Mexico, both of assembling electronic products from parts made in China but also becoming a manufacturing hub.

According to Ornelas, the current most important issue in business logistics is the TPP between 12 countries in the Asia-Pacific region: Australia, Brunei, Canada, Chile, Japan, Malaysia, Mexico, New Zealand, Peru, Singapore, the United States and Vietnam.

“The North American Trade Agreement is of course at the center of the ongoing debate in the U.S. Congress. Twenty-one years since it came into effect, U.S. politicians are still arguing about the results and effects of NAFTA on jobs, foreign investment and trade,” Ornelas wrote.

Nancy Gonzalez, a contributing writer to BorderNOW, wrote in the August issue that along the border region, there are 20,000 vacancies in maquiladoras.

The top 10 northern Mexico border cities have at least 1,717 active manufacturing facilities and those companies employ almost a million workers, according to the National Institute of Statistics, Geography and Informatics (INEGI). Most of these maquiladoras are hiring from 20 up to 500 workers per facility.

In cities such as Tijuana, Reynosa, Matamoros, and Ciudad Juarez, 90 percent of the maquiladoras have vacancies.

In the early 2000s, maquila owners told workers that if they didn’t accept wage cuts, the factory would close and move to China, where the average wage was 25 cents per hour.

Since then social unrest has been pushing wages up in China. With added transportation costs, transnational corporations found it cheaper to move production back to Mexico.

Foxconn, one of the world’s largest factory systems, was assembling the world’s iPhones at its Chinese factory complexes. It became notorious for young workers jumping out of their dorm windows, feeling trapped in their oppressive working conditions. A threat of a mass suicide from a rooftop forced the company to begin increasing wages.

Significantly, Foxconn now has two plants in Ciudad Juarez employing 11,000 workers.

The purpose of the Trans Pacific Partnership is to replace China with access to Vietnam and Malaysia as the premier low-wage areas of the world for transnational corporations.

If the U.S. and Mexican Congresses pass the Trans Pacific Partnership, maquila owners in Ciudad Juarez will be telling their workers to accept lower wages and worse working conditions, or they will close the plants and move them to Vietnam or Malaysia.

The maquila workers upsurge in Juarez may be the beginning of a spreading fight to keep that scenario from happening.

The Lexmark workers are appealing for donations to pay utilities and household expenses so that they can keep participating in the plantón. They are collecting donations to replace each person’s aguinaldo, or Christmas bonus. So far, they have 23 to 30 workers left to cover. A union in Mexico City contributed 20,000 pesos. You can contact us by phone or email for a Mexican bank account number to do a wire transfer or you can make a donation through our Paypal account and we will send the money. Make a note that the donation is for the maquila workers.
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