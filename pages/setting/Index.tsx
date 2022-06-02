import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, ScrollView } from 'react-native';
import Layout from '../Layout'
import {Colors, h, w, gstyle} from '../Theme'; 
import Icons from '../../components/Icon'
import {copyToClipboard, showToast} from '../../useStore'


export default function () {
	return (
		<Layout>
			<View style={{padding:10,  display:'flex'}}>
			 	<Text style={{color:Colors.Light, ...gstyle.t2, textAlign:'center'}}>Setting</Text>
				<TouchableOpacity onPress={()=>{copyToClipboard('DYDQ3SSKmVF9eBmFfisLkUwXfcvLVM7AM1eeMy33iNgP'); }}>
					<Text style={{color:Colors.LightDark, textAlign:'center', marginTop:10}}>DYDQ...3iNgP</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{...styles.settingcard, marginTop:10, ...styles.justify, alignContent:'center'}}>
					<View>
						<Text style={{color:Colors.Light, textAlign:'left', fontSize:20}}>Display Language</Text>
						<Text style={{color:Colors.LightDark, textAlign:'left'}}>English</Text>
					</View>
					<View style={{transform: [{ rotate: '-90deg' }]}}>
						<Icons.ArrowDown width={25} height={25} color={Colors.LightDark}/>
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={{...styles.settingcard, marginTop:10, ...styles.justify, alignContent:'center'}}>
					<View>
						<Text style={{color:Colors.Light, textAlign:'left', fontSize:20}}>Address Book</Text>
						<Text style={{color:Colors.LightDark, textAlign:'left'}}>Manage commonly used address</Text>
					</View>
					<View style={{transform: [{ rotate: '-90deg' }]}}>
						<Icons.ArrowDown width={25} height={25} color={Colors.LightDark}/>
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={{...styles.settingcard, marginTop:10, ...styles.justify, alignContent:'center'}}>
					<View>
						<Text style={{color:Colors.Light, textAlign:'left', fontSize:20}}>Change Network</Text>
						<Text style={{color:Colors.LightDark, textAlign:'left'}}>Configure your network settings</Text>
					</View>
					<View style={{transform: [{ rotate: '-90deg' }]}}>
						<Icons.ArrowDown width={25} height={25} color={Colors.LightDark}/>
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={{...styles.settingcard, marginTop:10, ...styles.justify, alignContent:'center'}}>
					<View>
						<Text style={{color:Colors.Light, textAlign:'left', fontSize:20}}>Security</Text>
						<Text style={{color:Colors.LightDark, textAlign:'left'}}>Update your security settings</Text>
					</View>
					<View style={{transform: [{ rotate: '-90deg' }]}}>
						<Icons.ArrowDown width={25} height={25} color={Colors.LightDark}/>
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={{...styles.settingcard, marginTop:10}}>
					<Text style={{color:Colors.Light, textAlign:'center'}}>Export Private key</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{...styles.settingcard, marginTop:10}}>
					<Text style={{color:Colors.Light, textAlign:'center'}}>Show Secret Recovery Phrase</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{...styles.settingcard, marginTop:10, backgroundColor:'rgb(235, 55, 66)'}}>
					<Text style={{color:Colors.Light, textAlign:'center'}}>Remove Wallet</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{...styles.settingcard, marginTop:10, backgroundColor:'rgb(235, 55, 66)'}}>
					<Text style={{color:Colors.Light, textAlign:'center'}}>Reset Secret Recovery Phrase</Text>
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