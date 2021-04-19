import React, { Component } from 'react';

// Components from react-navigation
import { 
	createStackNavigator,
	SafeAreaView
} from 'react-navigation';

// Vector icon imports
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

// Pages/Screens
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import EventsScreen from '../screens/HomeScreen/EventsScreen';
import MediaScreen from "../screens/HomeScreen/MediaScreen";
import NewsScreen from "../screens/HomeScreen/NewsScreen";
import PlusScreen from "../screens/HomeScreen/PlusScreen";
import JoinTheFightScreen from '../screens/JoinTheFightScreen/JoinTheFightScreen';
import AboutScreen from '../screens/AboutScreen/AboutScreen';
import InfoScreen from '../screens/InfoScreen/InfoScreen';
import DonateScreen from '../screens/DonateScreen/DonateScreen';
import DonateMoney from '../screens/DonateScreen/DonateMoney';
import DonateInKind from '../screens/DonateScreen/DonateInKind';
import DonateSales from '../screens/DonateScreen/DonateSales';
import AssistanceScreen from '../screens/AssistanceScreen/AssistanceScreen';
import DetailComponent from '../screens/DonateScreen/donateSalesComponents/DetailComponent';

// Styled Components
import LogoHeader from './LogoHeader';
import NavigationDrawerStructure from './NavigationDrawerStructure';

// StyleSheets
import { styles, bannerStyle } from '../style/styleSheet';
import PaypalDonate from "../screens/DonateScreen/PaypalDonate";
import CampaignScreen from '../screens/CampaignScreen/CampaignScreen';
import CampaignDetail from '../screens/CampaignScreen/CampaignDetail';
import CampaignFullDetail from '../screens/CampaignScreen/CampaignFullDetail';
import CampaignTwoDetail from '../screens/CampaignScreen/CampaignTwoDetail';
import CampaignTwoFullDetail from '../screens/CampaignScreen/CampaignTwoFullDetail';
import CampaignTwoFullDetail2 from '../screens/CampaignScreen/CampaignTwoFullDetail2';
import CampaignFullDetail2 from '../screens/CampaignScreen/CampaignFullDetail2';
import CampaignThreeDetail from '../screens/CampaignScreen/CampaignThreeDetail';
import CampaignThreeFullDetail from '../screens/CampaignScreen/CampaignThreeFullDetail';
import CampaignThreeFullDetail2 from '../screens/CampaignScreen/CampaignThreeFullDetail2';
import CampaignFourDetail from '../screens/CampaignScreen/CampaignFourDetail';
import CampaignFourFullDetail from '../screens/CampaignScreen/CampaignFourFullDetail';
import CampaignFourFullDetail2 from '../screens/CampaignScreen/CampaignFourFullDetail2';
import CampaignFourFullDetail3 from '../screens/CampaignScreen/CampaignFourFullDetail3';
import CampaignFourFullDetail4 from '../screens/CampaignScreen/CampaignFourFullDetail4';
import CampaignFiveDetail from '../screens/CampaignScreen/CampaignFiveDetail';
import CampaignFiveFullDetail from '../screens/CampaignScreen/CampaignFiveFullDetail';
import CampaignFiveFullDetail2 from '../screens/CampaignScreen/CampaignFiveFullDetail2';
import CampaignFiveFullDetail3 from '../screens/CampaignScreen/CampaignFiveFullDetail3';
import CampaignFiveFullDetail4 from '../screens/CampaignScreen/CampaignFiveFullDetail4';
//import DonateInKind from '../screens/DonateScreen/DonateInKind';
//import DonateSales from '../screens/DonateScreen/DonateSales';

// header bar
export const header = ({navigation}) => ({
	headerTitle: <LogoHeader navigationProps={'Home'}/>,
	headerStyle: bannerStyle.bannerHeaderStyle,
	headerLeft: <NavigationDrawerStructure navigationProps={navigation}/>
});

// Stack Screen for Home, News, Medias, Events
export const HomeStack = createStackNavigator(
	{
		Home: {screen: HomeScreen},
		Event: EventsScreen,
		Media: MediaScreen,
		News: NewsScreen,
		Plus: PlusScreen,
		
	},
	{
		defaultNavigationOptions: header, styles,
		headerLayoutPreset: 'center',
		cardStyle: {backgroundColor: '#F5F5F5'}
	}
);

// Stack Screen for Join the Fight internships volunteer
export const DetailsStack = createStackNavigator(
	{
		Details: JoinTheFightScreen,
	},
	{
		defaultNavigationOptions: header,
		headerLayoutPreset: 'center',
		cardStyle: {backgroundColor: '#F5F5F5'}
	}
);

// Stack Screen for About Us
export const AboutStack = createStackNavigator(
	{
		About: AboutScreen
	},
	{
		defaultNavigationOptions: header,
		headerLayoutPreset: 'center',
		cardStyle: {backgroundColor: '#F5F5F5'}
	}
);

// Stack Screen for Information on Campaign
export const InfoStack = createStackNavigator(
	{
		Info: InfoScreen
	},
	{
		defaultNavigationOptions: header,
		headerLayoutPreset: 'center',
		cardStyle: {backgroundColor: '#F5F5F5'}
	}
);

// Stack Screen for Donate Money
export const DonateStack = createStackNavigator(
	{
		Donate: DonateScreen,
		Money: DonateMoney,
		Kind: DonateInKind,
		Sales: DonateSales,
		Paypal: PaypalDonate,
		
	},
	{
		defaultNavigationOptions: header,
		headerLayoutPreset: 'center',
		cardStyle: {backgroundColor: '#F5F5F5'}
	}
);

// Stack Screen for Assistance
export const AssistanceStack = createStackNavigator(
	{
		Assistance: AssistanceScreen
	},
	{
		defaultNavigationOptions: header,
		headerLayoutPreset: 'center',
		cardStyle: {backgroundColor: '#F5F5F5'}
	}
);

// Stack Screen for Auction house
export const AuctionStack = createStackNavigator(
	{
		Auction: DonateSales,
		SalesDetail: DetailComponent,
	},
	{
		defaultNavigationOptions: header,
		headerLayoutPreset: 'center',
		cardStyle: {backgroundColor: '#F5F5F5'}
	}
);

// Stack Screen for Campaigns 
export const CampaignStack = createStackNavigator(
	{
		Campaign: CampaignScreen,
		CampaignDetailpage: CampaignDetail,
		CampaignFull: CampaignFullDetail,
		CampaignFullDetail2: CampaignFullDetail2,
		CampaignTwoDetail: CampaignTwoDetail,
		CampaginTwoFullDetail: CampaignTwoFullDetail,
		CampaignTwoFullDetail2:CampaignTwoFullDetail2,
		CampaignThreeDetail: CampaignThreeDetail,
		CampaignThreeFullDetail: CampaignThreeFullDetail,
		CampaignThreeFullDetail2: CampaignThreeFullDetail2,
		CampaignFourDetail: CampaignFourDetail,
		CampaignFourFullDetail: CampaignFourFullDetail,
		CampaignFourFullDetail2: CampaignFourFullDetail2,
		CampaignFourFullDetail3: CampaignFourFullDetail3,
		CampaignFourFullDetail4: CampaignFourFullDetail4,
		CampaignFiveDetail: CampaignFiveDetail,
		CampaignFiveFullDetail: CampaignFiveFullDetail,
		CampaignFiveFullDetail2: CampaignFiveFullDetail2,
		CampaignFiveFullDetail3: CampaignFiveFullDetail3,
		CampaignFiveFullDetail4, CampaignFiveFullDetail4
	},
	{
		defaultNavigationOptions: header,
		headerLayoutPreset: 'center',
		cardStyle: {backgroundColor: '#F5F5F5'}
	}
);


