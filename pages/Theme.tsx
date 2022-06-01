import { StyleSheet } from "react-native"; 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const Colors = {
	Primary:		"#062c70",
	Secondary:		"#002ba3",
	Third:			"#0000c1",
	Fourth:			"#0056d3",
	Fifth:			"#009df8",
	Sixth:			"#04c3f8",
	Dark:			"#000000D9",
	Light:			"#FFFFFF", 
	Grey:			"#c4c4c4",
	LightDark:		"#f0f0f0",
	Black:			"#000000",
	Red:			"#FF0000"
}

export const w = (w) => wp(w + '%')
export const h = (h) => hp(h + '%')

export const gstyle = StyleSheet.create({
	container: { 
		flex: 1 
	},
	t1: 			{ fontSize: hp('5%') },
	t2: 			{ fontSize: hp('3.5%') },
	t3: 			{ fontSize: hp('2.5%') },
	t: 				{ fontSize: hp('2%') },
	t0: 			{ fontSize: hp('1.5%') }
})