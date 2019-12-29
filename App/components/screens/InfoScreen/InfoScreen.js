//Import Necessary Packges
import React from 'react';
import { 
	Button, View, Text, ActivityIndicator, StyleSheet,ScrollView,
	LayoutAnimation, Platform, UIManager, TouchableOpacity
 } from 'react-native';
//import { createStackNavigator, createAppContainer } from 'react-navigation';
//import { Container, Header, Content, Accordion } from "native-base";
import DropDownItem from 'react-native-drop-down-item';
//import { withTheme } from 'react-native-elements';

const IC_ARR_DOWN = require('../../screens/DonateScreen/icons/ic_arr_down.png');
const IC_ARR_UP = require('../../screens/DonateScreen/icons/ic_arr_up.png');

export default class InfoScreen extends React.Component {
	/*=====Change the navigation styling for this page=========*/
  // static navigationOptions = {
  //   title: 'Info',
  //   headerBackTitle: ''
  // };
  constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			dataSource: null,
			expanded: false
		}
  }
  changeLayout = () => {
	LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
	this.setState({ expanded: !this.state.expanded });
  }
  componentDidMount() {
		return fetch('http://157.245.229.180:8080/ourcampaigns')//replace the x with your own IP or localhost
			.then((response) => response.json())
			.then((reponseJson) => {
				console.log(reponseJson[0]);
				this.setState({
					isLoading: false,
					dataSource: reponseJson
				})
			})
			.catch((error) => {
				console.log(error)
			});
	}

  render() {
    if (this.state.isLoading) {
			return (
				<View style={styles.container}>
					<ActivityIndicator />
				</View>
		)
		} else {
	
			let data = this.state.dataSource.map((t,index) =>{
				console.log(t)
				return(
					<DropDownItem 
					key={index}
					style={styles.dropDownItem}
                    contentVisible={false}
                    invisibleImage={IC_ARR_DOWN}
					visibleImage={IC_ARR_UP}
					header={
						<View style={styles.header}>
						  <Text style={{
							fontSize: 16,
							color: '#0088dc',
							paddingTop: 10,
							textTransform: 'uppercase',
						  }}>{t.title}</Text>
						</View>
					  }
					> 
						<Text style={styles.txt}>
                     		 {t.body}
                    	</Text>
						{/* <TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout} style={styles.Btn}>
							<Text style={styles.titleText}>{ t.title }</Text>
						</TouchableOpacity>
						<View style={{ height: this.state.expanded ? null : 1, overflow: 'hidden' }}>  
							<Text style={styles.bodyText}> { t.body }</Text>
						</View>	 */}
					</DropDownItem>
				);		
			})
			
				return(
				<View  style={styles.item}>
					<Text style={styles.titleCam}>Our Campaigns</Text>
					<ScrollView>
							{data}	
					</ScrollView>
				</View>
				
				)
		}
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F5FCFF',
		alignItems: 'center',
		justifyContent: 'center'
	},
	item: {
		flex: 1,
		alignSelf: 'stretch',
		margin: 10,
		alignItems: 'center',
		justifyContent: 'center', 
		backgroundColor: '#F5F5F5',
	
	},
	titleCam: {
		fontSize: 24,
		color: '#c91a1a',
		padding: 10,
		textTransform: 'uppercase',
		fontWeight: 'bold',
	},
	
	header: {
		width: '100%',
		paddingVertical: 0,
		paddingHorizontal: 30,
		flexWrap: 'wrap',
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#F5F5F5',
	  },
	txt: {
		fontSize: 16,
		color: '#100c08',
		paddingHorizontal: 20,
	  },
	  dropDownItem: {
		marginTop: 20,
	  },
})