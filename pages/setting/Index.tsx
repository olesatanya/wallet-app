import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, ScrollView } from 'react-native';
import Layout from '../Layout'
import {Colors, gstyle} from '../Theme'; 
import Icons from '../../components/Icon'
import useStore, {copyToClipboard} from '../../useStore'
import { TextInput } from 'react-native-gesture-handler';


export default function ({navigation} : any) {
	const { update, currentAccount, currentName} = useStore();  
	React.useEffect(()=>{
		update({currentAccount:'0x999999', currentName:'Tanya'})
	}, [])
	return (
		<Layout>
			<View style={{padding:10,  display:'flex'}}>
			 	<Text style={{color:Colors.Light, ...gstyle.t2, textAlign:'center'}}>Setting</Text>
				<TouchableOpacity onPress={()=>{copyToClipboard(currentAccount); }}>
					<TextInput style={{color:Colors.LightDark, textAlign:'center', ...gstyle.t3}}>{currentName}</TextInput>
				</TouchableOpacity>
				<TouchableOpacity onPress={()=>{copyToClipboard(currentAccount); }}>
					<Text style={{color:Colors.LightDark, textAlign:'center', marginTop:10}}>{currentAccount}</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{...styles.settingcard, marginTop:10, ...styles.justify, alignContent:'center'}} onPress={(e) => {navigation?.navigate('Setting_Language')}}>
					<View>
						<Text style={{color:Colors.Light, textAlign:'left'}}>Display Language</Text>
						<Text style={{color:Colors.LightDark, textAlign:'left'}}>English</Text>
					</View>
					<View style={{transform: [{ rotate: '-90deg' }]}}>
						<Icons.ArrowDown width={25} height={25} color={Colors.LightDark}/>
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={{...styles.settingcard, marginTop:10, ...styles.justify, alignContent:'center'}} onPress={(e) => {navigation?.navigate('Setting_Book')}}>
					<View>
						<Text style={{color:Colors.Light, textAlign:'left'}}>Address Book</Text>
						<Text style={{color:Colors.LightDark, textAlign:'left'}}>Manage commonly used address</Text>
					</View>
					<View style={{transform: [{ rotate: '-90deg' }]}}>
						<Icons.ArrowDown width={25} height={25} color={Colors.LightDark}/>
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={{...styles.settingcard, marginTop:10, ...styles.justify, alignContent:'center'}} onPress={(e) => {navigation?.navigate('Setting_Network')}}>
					<View>
						<Text style={{color:Colors.Light, textAlign:'left'}}>Change Network</Text>
						<Text style={{color:Colors.LightDark, textAlign:'left'}}>Configure your network settings</Text>
					</View>
					<View style={{transform: [{ rotate: '-90deg' }]}}>
						<Icons.ArrowDown width={25} height={25} color={Colors.LightDark}/>
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={{...styles.settingcard, marginTop:10, ...styles.justify, alignContent:'center'}} onPress={(e) => {navigation?.navigate('Setting_Security')}}>
					<View>
						<Text style={{color:Colors.Light, textAlign:'left'}}>Security</Text>
						<Text style={{color:Colors.LightDark, textAlign:'left'}}>Update your security settings</Text>
					</View>
					<View style={{transform: [{ rotate: '-90deg' }]}}>
						<Icons.ArrowDown width={25} height={25} color={Colors.LightDark}/>
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={{...styles.settingcard, marginTop:10, ...styles.justify, alignContent:'center'}} onPress={(e) => {navigation?.navigate('Setting_WalletConnect')}}>
					<View>
						<Text style={{color:Colors.Light, textAlign:'left'}}>Wallet Connect</Text>
					</View>
					<View style={{transform: [{ rotate: '-90deg' }]}}>
						<Icons.ArrowDown width={25} height={25} color={Colors.LightDark}/>
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={{...styles.settingcard, marginTop:10}}>
					<Text style={{color:Colors.Light, textAlign:'center'}} onPress={(e) => {navigation?.navigate('Setting_Export')}}>Export Private key</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{...styles.settingcard, marginTop:10}} onPress={(e) => {navigation?.navigate('Setting_Seed')}}>
					<Text style={{color:Colors.Light, textAlign:'center'}}>Show Secret Recovery Phrase</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{...styles.settingcard, marginTop:10, backgroundColor:'rgb(235, 55, 66)'}} onPress={(e) => {navigation?.navigate('Setting_Remove')}}>
					<Text style={{color:Colors.Light, textAlign:'center'}}>Remove Wallet</Text>
				</TouchableOpacity>
			</View>
		</Layout>
	);
}

const styles = StyleSheet.create({
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
		borderRadius: 5,
		margin: 3,
		display: 'flex'
	}
})