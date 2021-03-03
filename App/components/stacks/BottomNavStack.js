import React, { Component } from 'react';

// Components from react-navigation
import {
	createBottomTabNavigator
} from 'react-navigation';

// Stack Navigators to Screen
import { 
	HomeStack, 
	DetailsStack,
	AboutStack,
    InfoStack,
	DonateStack,
	AssistanceStack,
	AuctionStack,
	header 
} from './ScreenStacks';
// import { DrawerNav } from './DrawerStack';

// Vector icon imports
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

// function to check which screen user is looking at and changing the color of the tab icon based on active or not
const navigationIcons = ({navigation}) => ({
	tabBarIcon: ({ focused, horizontal, tintColor }) => {
		const { routeName } = navigation.state;
        let iconName;

        // choosing which icon to use from MaterialCommunityIcons based on the name of the route
        /* 
        	visit https://expo.github.io/vector-icons/
        	to see which name of the icon you want to use
        	pay attention to which icon library it is using.
        */
        // if(routeName === 'Home') {
        // 	iconName = 'home';
        // } else if(routeName === 'Details') {
        // 	iconName = 'newspaper';
        // } else if(routeName === 'About') {
        // 	iconName = 'information-outline';
        // } 

        switch(routeName) {
        	case 'Home':
        		iconName = 'home';
        		break;
        	case 'Auction':
        		//Join the fight page
        		iconName = 'point-of-sale';
        		break;
        	case 'Donate':
        		iconName = 'cart-outline';
        		break;
			case 'Assistance':
				//Assistance Page
				iconName = 'assistance';
				break;
        }

        return (
        	<MaterialCommunityIcons 
        		name = { iconName }
        		size = { horizontal ? 20 : 25 }
        		color = { tintColor }
        		style = {{
        			backgroundColor: '#d31623'
        		}}
        	/>
        );
	}
});

// color styling of the icons based on active or inactive
const iconColors = {
	style: {
		backgroundColor: '#d31623',
		borderTopColor: '#000000',
		borderTopWidth: 1,
	},
	labelStyle: {
		fontSize: 12,
		fontWeight: 'bold'
	},
	activeTintColor: '#870c18',
	inactiveTintColor: '#ffffff',
};

// creating the BottomTabNavigator and what screens they hold
export const BottomNavStack = createBottomTabNavigator(
	{
		Home: HomeStack,
		Auction: AuctionStack,
        Donate: DonateStack,
		Assistance:AssistanceStack
	},
	{
		defaultNavigationOptions: navigationIcons,
		tabBarOptions: iconColors,
	}
);
