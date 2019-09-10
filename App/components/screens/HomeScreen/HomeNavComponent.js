import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default HomeNavComponent = (props) => {
	return(
		<View style={styles.homeNav}>
			<Text 
			style={styles.homeNavText}
			onPress={() => props.navigate('News')}
			>
				News
			</Text>
			<Text
			style={styles.homeNavText}
			onPress={() => props.navigate('Media')}
			>
				Media
			</Text>
			<Text
			style={styles.homeNavText}
			onPress={() => props.navigate('Event')}
			>
				Events
			</Text>
		</View>
	);
};

//need to add this into the styleSheet.js later
const styles = StyleSheet.create({
	homeNav: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#870c18',
		height: 40,
		alignItems: 'center'
	},
	homeNavText: {
	flex: 1,
	fontSize: 28,
	fontWeight: 'bold',
	color: '#fff',
	textAlign: 'center',
	}
});