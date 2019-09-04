import React, { Component } from 'react';
import { Image } from 'react-native';
import { bannerStyle } from '../style/styleSheet'

export default class LogoHeader extends Component {
	render() {
		return (
			<Image
				source={ require('../../../assets/sflwc_logo_finaltemp.png') }
				style={
					bannerStyle.logoHeaderImageStyle
				}
			/>
		);
	};
}