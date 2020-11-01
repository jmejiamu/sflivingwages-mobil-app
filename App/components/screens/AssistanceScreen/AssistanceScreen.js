import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	ScrollView,
	Image,

} from 'react-native';

import { Checkbox } from 'galio-framework';



const Assistancecreen = () => {

	const [fullName, setFullName] = useState('');
	const [userEmail, setUserEmail] = useState('');
	const [userPhone, setUserPhone] = useState('');
	const [userNotes, setUserNotes] = useState('');


	const onSubmitData = () => {
		fetch('http://157.245.184.202:8080/assistance', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				full_name: fullName,
				email: userEmail,
				phone: userPhone,
				notes: userNotes
			})
		})
		setFullName('');
		setUserEmail('');
		setUserPhone('');
		setUserNotes('');
	}
	const resetAll = () => {
		setFullName('');
		setUserEmail('');
		setUserPhone('');
		setUserNotes('');
	}
	return (
		<ScrollView>

			<View style={styles.container}>

				<View style={styles.card}>
					<View style={styles.logoContainer}>
						<Image style={styles.logo} source={require('../../../../assets/icon.png')} />
					</View>
					<Text style={{ margin: 10 }}>We can assist you.</Text>
					<Text style={{ margin: 10 }}>Complete the form below.</Text>

					<TextInput
						style={styles.textInput}
						placeholder="Full Name"
						onChangeText={fullNameInput => setFullName(fullNameInput)}
						value={fullName}
					/>

					<TextInput
						style={styles.textInput}
						placeholder="E-Mail"
						keyboardType='email-address'
						onChangeText={userEmailInput => setUserEmail(userEmailInput)}
						value={userEmail}
					/>

					<TextInput
						style={styles.textInput}
						placeholder="Phone"
						keyboardType='numeric'
						onChangeText={userPhoneInput => setUserPhone(userPhoneInput)}
						value={userPhone}
					/>
					<Checkbox color="primary" label="Wage theft" />
					<Checkbox color="primary" label="Unpaid overtime" />
					<Checkbox color="primary" label="No breaks" />
					<Checkbox color="primary" label="Discrimination" />
					<Checkbox color="primary" label="No sick leave" />
					<Checkbox color="primary" label="Retaliation" />
					<Checkbox color="primary" label="Other" />

					<Text style={{ margin: 10 }} >Brief description of your situation, ex. discrimination at your workplace, immigration status, wage theft, not paid overtime, no breaks, not paid the minimum wage, etc.</Text>
					<TextInput
						style={styles.textInput}
						placeholder="Notes"
						onChangeText={userNotesInput => setUserNotes(userNotesInput)}
						value={userNotes}
					/>

					<View style={styles.buttonStyles}>

						<TouchableOpacity style={styles.submitButton} onPress={onSubmitData}>
							<Text style={styles.submitButtonText} >Submit</Text>
						</TouchableOpacity>

						<TouchableOpacity style={styles.submitButton} onPress={resetAll}>
							<Text style={styles.submitButtonText}>Clear</Text>
						</TouchableOpacity>

					</View>
				</View>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	card: {
		paddingTop: 35,
		backgroundColor: 'white',
		margin: 10,
		padding: 1,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 10
		},
		shadowOpacity: 0.34,
		shadowRadius: 6.27,
		elevation: 10
	},
	textInput: {
		height: 40,
		borderColor: '#d31623',
		borderWidth: 1,
		borderRadius: 5,
		padding: 5,
		margin: 10
	},
	submitButton: {
		backgroundColor: '#d31623',
		padding: 10,
		width: 100,
		height: 40,
		marginTop: 20,
		borderRadius: 5,

	},
	buttonStyles: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		padding: 5,
		paddingBottom: 35
	},
	logo: {
		width: 125,
		height: 125,
		marginTop: 20
	},
	logoContainer: {
		marginTop: 10,
		justifyContent: 'center',
		alignItems: 'center'
	},
	submitButtonText: {
		color: 'white',
		fontWeight: "900",
		textAlign: "center"
	},
});
export default Assistancecreen;