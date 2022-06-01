import { StyleSheet } from "react-native"; 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const Colors = {
	Primary:		"rgb(34, 34, 34)",
	Secondary:		"rgb(51, 51, 51)",
	Third:			"rgb(68, 68, 68)",
	Dark:			"rgb(34, 34, 34)",
	Light:			"#FFFFFF", 
	LightDark:		"rgb(119, 119, 119)",
	Black:			"#000000"
}

export const w = (w:number) => wp(w + '%')
export const h = (h:number) => hp(h + '%')

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