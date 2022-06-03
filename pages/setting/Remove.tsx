import React from 'react';
import { StyleSheet, TouchableOpacity, View, TextInput, Text } from 'react-native';
import Layout from '../Layout'
import {Colors, gstyle, w} from '../Theme'; 
import Icons from '../../components/Icon'
import useStore from '../../useStore'

export default function ({navigation} : any) {
	const { update, currentAccount} = useStore();  
	const removeWallet = async () => {

	}
	return (
		<Layout>
			<View style={styles.justify}>
				<TouchableOpacity style={{transform:[{rotate:'90deg'}],  width:30, height:20}} onPress={(e) => {navigation?.navigate('Setting_Home')}}>
					<Icons.ArrowDown width={25} height={25} color={Colors.LightDark} />
				</TouchableOpacity>
				<Text style={{color:Colors.Light, ...gstyle.t2}}>Remove Wallet</Text>
				<View></View>
			</View>
			<View style={{padding: 10, marginTop: 30}}>
				<Text style={{textAlign:'center', color:Colors.Light, ...gstyle.t}}>({currentAccount})</Text>
				<Text style={{textAlign:'center', margin:20, color:Colors.LightDark, ...gstyle.t}}>Even though you are removing this wallet from Phantom, you will be able to re-derive it using your mnemonic in this or another wallet.</Text>
				<View style={{...styles.justify, justifyContent:'space-around'}}>
					<TouchableOpacity style={{...styles.settingcard, marginTop:10}} onPress={(e) => {navigation?.navigate('Setting_Home')}}>
						<Text style={{color:Colors.Light}} >Cancel</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{...styles.settingcard, backgroundColor:'#dd0000', marginTop:10}} onPress={(e) => {removeWallet()}}>
						<Text style={{color:Colors.Light}}>Remove</Text>
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
	}
})