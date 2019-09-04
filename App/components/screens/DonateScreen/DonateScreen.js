//Import Necessary Packges
import React from 'react';
import { Button, View, Text, ScrollableView } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class DonateScreen extends React.Component {
	/*=====Change the navigation styling for this page=========*/
  // static navigationOptions = {
  //   title: 'Donate',
  //   headerBackTitle: ''
  // };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Donate Screen</Text>
      </View>
    );
  }
}