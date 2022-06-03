import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, ScrollView } from 'react-native';
import Layout from '../Layout'
import {Colors, gstyle} from '../Theme'; 
import Icons from '../../components/Icon'
import useStore from '../../useStore'

export default function ({navigation} : any) {
	const { update, network} = useStore();  
	const setNetwork = (type: string) => {
		update({network: type})
	}
	const networks = [
		{name: 'Ethereum MainNet', rpc:'', chainId: 1, explorer: '', symbol:''},
		{name: 'Rinkeby Testnet', rpc:'', chainId: 1, explorer: '', symbol:''},
		{name: 'Ropsten Testnet', rpc:'', chainId: 1, explorer: '', symbol:''},
		{name: 'Kovan Testnet', rpc:'', chainId: 1, explorer: '', symbol:''},
		{name: 'Goerli Testnet', rpc:'', chainId: 1, explorer: '', symbol:''},
		{name: 'Binance chain Mainnet', rpc:'', chainId: 1, explorer: '', symbol:''},
		{name: 'Binance chain Testnet', rpc:'', chainId: 1, explorer: '', symbol:''},
		{name: 'Avalanche Mainnet', rpc:'', chainId: 1, explorer: '', symbol:''},
		{name: 'Fantom Testnet', rpc:'', chainId: 1, explorer: '', symbol:''},
	]


	return (
		<Layout>
			<View style={styles.justify}>
				<TouchableOpacity style={{transform:[{rotate:'90deg'}],  width:30, height:20}} onPress={(e) => {navigation?.navigate('Setting_Home')}}>
					<Icons.ArrowDown width={25} height={25} color={Colors.LightDark} />
				</TouchableOpacity>
				<Text style={{color:Colors.Light, ...gstyle.t3}}>Change Network</Text>
				<View></View>
			</View>
			<View style={{padding: 10}}>
				{
					networks.map((data, key) => (
						<TouchableOpacity key={key} style={{...styles.settingcard, marginTop:10}}>
							<Text style={{color:Colors.Light, textAlign:'left'}} onPress={(e) => {setNetwork(data.name)}}>{data.name}</Text>
						{
							network === data.name && <View style={styles.check}></View>
						}
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