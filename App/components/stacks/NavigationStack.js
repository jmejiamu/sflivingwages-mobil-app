import React, { Component } from 'react';
// import { View, Text, TouchableOpacity, Button, Alert } from 'react-native';
// Components from react-navigation
import { 
	createStackNavigator,
	createSwitchNavigator,
	createAppContainer,
	createDrawerNavigator,
	DrawerItems,
	SafeAreaView
} from 'react-navigation';

import { DrawerNav } from './DrawerStack';

// creating an App Container for the Drawer Navigation Stack that contains the BottomTabNavigator
export default createAppContainer(DrawerNav);
