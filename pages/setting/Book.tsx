import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, ScrollView } from 'react-native';
import Layout from '../Layout'
import {Colors, gstyle} from '../Theme'; 
import Icons from '../../components/Icon'
import useStore from '../../useStore'

export default function ({navigation} : any) {
	const { update, lang} = useStore();  
	const sendTo = (address: string) => {
		alert(address)
	}
	const book = [
		{name:'Name 1', address: '0xE71E33e78C5d4764549123Ec4B770eF66FbD2398'},
		{name:'Name 2', address: '0xE71E33e78C5d4764549123Ec4B770eF66FbD2398'},
		{name:'Name 3', address: '0xE71E33e78C5d4764549123Ec4B770eF66FbD2398'},
		{name:'Name 4', address: '0xE71E33e78C5d4764549123Ec4B770eF66FbD2398'},
		{name:'Name 5', address: '0xE71E33e78C5d4764549123Ec4B770eF66FbD2398'},
		{name:'Name 6', address: '0xE71E33e78C5d4764549123Ec4B770eF66FbD2398'},
		{name:'Name 7', address: '0xE71E33e78C5d4764549123Ec4B770eF66FbD2398'},
		{name:'Name 8', address: '0xE71E33e78C5d4764549123Ec4B770eF66FbD2398'}
	];
	return (
		<Layout>
			<View style={styles.justify}>
				<TouchableOpacity style={{transform:[{rotate:'90deg'}],  width:30, height:20}} onPress={(e) => {navigation?.navigate('Setting_Home')}}>
					<Icons.ArrowDown width={25} height={25} color={Colors.LightDark} />
				</TouchableOpacity>
				<Text style={{color:Colors.Light, ...gstyle.t3}}>Address Book</Text>
				<View></View>
			</View>
			<View style={{padding: 10}}>
				{
					book.map((data, key) => (
						<TouchableOpacity style={{...styles.settingcard, marginTop:10, ...styles.justify, alignContent:'center'}} onPress={(e) => {sendTo(data.address)}} key={key}>
							<View>
								<Text style={{color:Colors.Light, textAlign:'left'}}>{data.name}</Text>
								<Text style={{color:Colors.LightDark, textAlign:'left', ...gstyle.t0}}>{data.address}</Text>
							</View>
							<View style={{transform: [{ rotate: '-90deg' }]}}>
								<Icons.ArrowDown width={25} height={25} color={Colors.LightDark}/>
							</View>
						</TouchableOpacity>
					))
				}
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