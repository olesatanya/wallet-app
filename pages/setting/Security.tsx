import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import Layout from '../Layout'
import {Colors, gstyle} from '../Theme'; 
import Icons from '../../components/Icon'
import useStore from '../../useStore'
import { TextInput } from 'react-native-gesture-handler';

export default function ({navigation} : any) {
	const { update, network} = useStore();  
	const setNetwork = (type: string) => {
		update({network: type})
	}

	const password = '123456';

	return (
		<Layout navigation={navigation}>
			<View style={styles.justify}>
				<TouchableOpacity style={{transform:[{rotate:'90deg'}],  width:30, height:20}} onPress={(e) => {navigation?.navigate('Setting_Home')}}>
					<Icons.ArrowDown width={25} height={25} color={Colors.LightDark} />
				</TouchableOpacity>
				<Text style={{color:Colors.Light, ...gstyle.t3}}>Change Password</Text>
				<View></View>
			</View>
			<View style={{padding: 10, marginTop: 30}}>
				<TextInput style={styles.input} textContentType='password' placeholder='Current password' placeholderTextColor={Colors.LightDark} secureTextEntry></TextInput>
				<TextInput style={styles.input} textContentType='password' secureTextEntry placeholder='New password' placeholderTextColor={Colors.LightDark}></TextInput>
				<TextInput style={styles.input} textContentType='password' secureTextEntry placeholder='Confirm new password' placeholderTextColor={Colors.LightDark}></TextInput>
				<View style={{...styles.justify, justifyContent:'space-around'}}>
					<TouchableOpacity style={{...styles.settingcard, marginTop:10}} onPress={(e) => {navigation?.navigate('Setting_Home')}}>
						<Text style={{color:Colors.Light}} >Cancel</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{...styles.settingcard, backgroundColor:'#338834', marginTop:10}} onPress={(e) => {}}>
						<Text style={{color:Colors.Light}} >Save</Text>
					</TouchableOpacity>
				</View>
			</View>
		</Layout>
	);
}

const styles = StyleSheet.create({
	input: {
		padding: 5, 
		paddingLeft: 20,
		paddingRight: 20,
		margin: 10,
		color: Colors.Light,
		borderRadius: 5,
		borderColor: Colors.LightDark,
		borderWidth: 0.5,
		backgroundColor: Colors.DarkGrey
	},
	justify: {
		display: 'flex',
		alignContent: 'center',
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems:	'center',
		justifyContent: 'space-between'
	},
	settingcard: {
		backgroundColor: Colors.Third,
		padding: 10,
		paddingLeft:20,
		paddingRight: 20,
		borderRadius: 5,
		margin: 3,
		display: 'flex',
		position: 'relative'
	},
	check: {
		position: 'absolute',
		top: 15, 
		right: 10,
		width: 10, 
		height: 10,
		borderRadius:5,
		backgroundColor: Colors.Light
	}
})