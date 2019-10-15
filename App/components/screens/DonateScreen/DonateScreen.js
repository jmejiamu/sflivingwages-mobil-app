//Import Necessary Packges
import React from 'react';
import { Button, View, Text, ScrollView, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import DonateNav from './DonateNav';
// export default class DonateScreen extends React.Component {
// 	/*=====Change the navigation styling for this page=========*/
//   // static navigationOptions = {
//   //   title: 'Donate',
//   //   headerBackTitle: ''
//   // };

//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Donate Screen</Text>
//       </View>
//     );
//   }
// }

// const DonateScreen = ({navigation}) => {
//   //console.log (props.navigation);

//   return <ScrollView style={{ flex: 1}}>
//     <DonateNav
// 					navigate={this.props.navigation.navigate}

// 				/>
//     </ScrollView>
// };

// const styles = StyleSheet.create({
//   homeNav: {
// 		flex: 1,
// 		flexDirection: 'row',
// 		backgroundColor: '#870c18',
// 		height: 40,
// 		alignItems: 'center'
// 	},
// 	homeNavText: {
// 	flex: 1,
// 	fontSize: 28,
// 	fontWeight: 'bold',
// 	color: '#fff',
// 	textAlign: 'center',
// 	}
// });

// export default DonateScreen;

export default class DonateScreen extends React.Component {
  /*=====Change the navigation styling for this page=========*/
  // static navigationOptions = {
  //   headerTitle: <LogoHeader/>,
  //   headerStyle: bannerStyle.bannerHeaderStyle,
  //   headerBackTitle: '',
  //   justifyContent: 'center',
  //   alignItems: 'center'
  // };

  render() {
    return (
      <ScrollView style={{ flex: 1}}>
      {/*Home Page Navigation part*/}
      <DonateNav
        navigate={this.props.navigation.navigate}
      />
      {/*Start of the Home Page Contents*/}
        <View style={{ height: 300 }}>
          
        </View>
      </ScrollView>
    );
  }
}
