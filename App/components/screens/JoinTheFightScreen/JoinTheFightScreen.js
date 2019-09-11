//Import Necessary Packges
import React from 'react';
import { 
  Button, View, Text, ScrollableView, StyleSheet,
  ActivityIndicator,TouchableOpacity,LayoutAnimation,
  ScrollView } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class JoinTheFightScreen extends React.Component {
	/*=====Change the navigation styling for this page=========*/
  // static navigationOptions = {
  //   title: 'Details',
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
		return fetch('http://xxx.xxx.x.xx:3001/joinus')//replace the x with your own IP or localhost
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
					<View key={index}>
						<TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout} style={styles.Btn}>
							<Text style={styles.titleText}>{ t.title }</Text>
						</TouchableOpacity>
						<View style={{ height: this.state.expanded ? null : 1, overflow: 'hidden' }}>  
							<Text style={styles.bodyText}> { t.body }</Text>
						</View>	
					</View>
				);		
			})

				return(
					<View  style={styles.item}>
						<Text style={styles.titleCam}>Join the Fight</Text>
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
		backgroundColor: '#F5FCFF'
	
	},
	titleCam: {
		fontSize: 20,
		color: '#c91a1a'
	},
	titleText: {
		fontSize: 16,
		fontWeight: 'bold',
	},
	bodyText: {
		fontSize: 16,
		
	},Btn: {
		padding: 10,
		backgroundColor: 'rgba(0,0,0,0.5)'
	  }
	
})