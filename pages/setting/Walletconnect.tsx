import React from 'react';
import { StyleSheet, TouchableOpacity, View, TextInput, Text } from 'react-native';
import WalletConnect from "@walletconnect/client";
import Layout from '../Layout'
import {Colors, gstyle, w} from '../Theme'; 
import Icons from '../../components/Icon'
import useStore from '../../useStore'
import Barcode from '../../components/captureqr'

export default function ({navigation} : any) {
	const { update, currentAccount} = useStore(); 
	const [status, setStatus] = React.useState({
		scanned : false,
		data:	''
	});
	var connector:WalletConnect;
	const updateStatus = (params : {[key : string] : string|number|boolean}) => setStatus({...status, ...params});
	
	
	const connect = async (code: any) => {
		const url = code['data'] || '';
		updateStatus({scanned: true, data: url})
		update({loading: true})
	}


	
	const subscribeToEvents = () => {
		connector?.on("session_request", (error, payload) => {
			if (error) {
				throw error;
			}
			const { peerMeta } = payload.params[0];
			console.log(peerMeta)
			// approveSession()
		});
		
		connector?.on("session_update", error => {
			if (error) {
				throw error;
			}
		});
		connector?.on("call_request", async (error, payload) => {
			console.log('call_request')
			console.log(payload);
			// approveRequest()
		})
		connector?.on("connect", (error, payload) => {
			console.log('connect', payload)
		});
		connector?.on("disconnect", (error, payload) => {
			console.log('disconnect', payload)
		})
	}

	const accept = async () => {

		connector = new WalletConnect({uri:status.data, bridge:'https://bridge.walletconnect.org'});
		if (!connector.connected) {
			await connector.createSession();
		} 
		subscribeToEvents();
	}
	const reset = () => {
		updateStatus({scanned: false, data: ''})
	}
	return (
		<View>
			<Layout>
				<View style={styles.justify}>
					<TouchableOpacity style={{transform:[{rotate:'90deg'}],  width:30, height:20}} onPress={(e) => {navigation?.navigate('Setting_Home')}}>
						<Icons.ArrowDown width={25} height={25} color={Colors.LightDark} />
					</TouchableOpacity>
					<Text style={{color:Colors.Light, ...gstyle.t2}}>Wallet Connect</Text>
					<View></View>
				</View>
				<View style={{padding: 10, marginTop: 30}}>
					<Text style={{textAlign:'center', color:Colors.Light, ...gstyle.t}}>({currentAccount})</Text>
					<Text style={{textAlign:'center', margin:20, color:Colors.LightDark, ...gstyle.t}}>Opensea Testnet</Text>
					<Text style={{textAlign:'center', margin:20, color:Colors.LightDark, ...gstyle.t}}>{status.data}</Text>
					<View style={{...styles.justify, justifyContent:'space-around'}}>
						<TouchableOpacity style={{...styles.settingcard, marginTop:10}} onPress={(e) => {navigation?.navigate('Setting_Home')}}>
							<Text style={{color:Colors.Light}} >Cancel</Text>
						</TouchableOpacity>
						<TouchableOpacity style={{...styles.settingcard, backgroundColor:'green', marginTop:10}} onPress={(e) => {accept()}}>
							<Text style={{color:Colors.Light}}>Accept</Text>
						</TouchableOpacity>
					</View>
					
					<TouchableOpacity style={{...styles.settingcard, backgroundColor:'green', marginTop:10}} onPress={(e) => {reset()}}>
							<Text style={{color:Colors.Light}}>Reset</Text>
					</TouchableOpacity>
				</View>
			</Layout>
			{
				!status.scanned && (
					<>
						<Barcode onScanned={(data:string)=>{connect(data)}} />
						<TouchableOpacity style={{...styles.closebtn}} onPress={(e) => {navigation?.navigate('Setting_Home')}}>
							<Text style={{color:Colors.Light}} >&times;</Text>
						</TouchableOpacity>
					</>
				)
			}
		</View>
	);
}

const styles = StyleSheet.create({
	closebtn: {
		backgroundColor: Colors.Dark,
		padding: 5,
		paddingLeft: 10,
		paddingRight: 10,
		borderRadius: 50,
		margin: 3,
		fontSize: 30,
		position: 'absolute',
		top: 20,
		right: 20
	},
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