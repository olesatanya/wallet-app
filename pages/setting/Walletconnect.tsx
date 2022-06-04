import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Text } from 'react-native';
import WalletConnect from "@walletconnect/client";
import Layout from '../Layout'
import {Colors, gstyle, w} from '../Theme'; 
import Icons from '../../components/Icon'
import useStore from '../../useStore'
import Barcode from '../../components/captureqr'

export default function ({navigation} : any) {
	const { currentAccount, chainId} = useStore(); 
	const [status, setStatus] = React.useState({
		scanned : false,
		data:	'',
		name:	'',
		url:	'',
		icon:	'',
		description:	''
	});
	const updateStatus = (params : {[key : string] : string|number|boolean}) => setStatus({...status, ...params});
	
	var connector:WalletConnect;
	
	const connect = async (code: any) => {
		const url = code['data'] || '';
		connector = new WalletConnect({uri:url, bridge:'https://bridge.walletconnect.org'});
				
		if (!connector.connected) {
			await connector.createSession();
			updateStatus({data: url, scanned: true})
			// subscribeToEvents();
			connector?.on("session_request", (error:any, payload) => {
				if (error) {
					throw error;
				}
				try{
					const { peerMeta } = payload.params[0];
					const description = peerMeta['description'];
					const name = peerMeta['name'];
					const url = peerMeta['url'];
					const icon = peerMeta['icons'][0];
					updateStatus({description, name, icon,url})
					console.log(peerMeta)
				} catch(ex){
					throw ex;
				}
			});
			
		} 
	}

	const subscribeToEvents = () => {
		console.log(connector.connected)
		connector?.on("session_request", (error:any, payload) => {
			if (error) {
				throw error;
			}
			try{
				const { peerMeta } = payload.params[0];
				const description = peerMeta['description'];
				const name = peerMeta['name'];
				const url = peerMeta['url'];
				const icon = peerMeta['icons'][0];
				updateStatus({description, name, icon,url})
				console.log(peerMeta)
			} catch(ex){
				throw ex;
			}
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
 
	const approveSession =  () => {
		const address = currentAccount;
		console.log(connector)
		if (connector) {
			console.log('approve')
			connector.approveSession({chainId, accounts: [address] })
			// status.connector?.approveSession({chainId, accounts: [address] })
			
			
		}
	}
	const rejectSession = () => {

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
					<TouchableOpacity style={{...styles.settingcard, backgroundColor:Colors.DarkGrey, marginTop:10}} onPress={(e) => {reset()}}>
								<Text style={{color:Colors.Light}}>Capture</Text>
					</TouchableOpacity>
				</View>
				<View style={{padding: 10, marginTop: 30}}>
					<View style={{...styles.justify, justifyContent:'center'}}>
						<Image source={require('../../assets/icon.png')} style={{width:20, height: 20, borderRadius: 5, margin: 5}}/>
						<Image source={{uri:status.icon || 'https://ul1vl.csb.app/favicon.ico'}} style={{width:20, height: 20, borderRadius: 5, margin: 5}}/>
					</View>
					<Text style={{textAlign:'center', color:Colors.Light, ...gstyle.t}}>({currentAccount})</Text>
					{
						status.scanned &&
						<>
							{
								status.url !== '' ?
								<>
									<Text style={{textAlign:'center', margin:5, color:Colors.Light, ...gstyle.t}}>{status.name}</Text>
									<Text style={{textAlign:'center', margin:5, color:Colors.Light, ...gstyle.t}}>{status.url}</Text>
									<Text style={{textAlign:'center', margin:5, color:Colors.Light, ...gstyle.t}}>{status.description}</Text>
									<View style={{...styles.justify, justifyContent:'space-around'}}>
										<TouchableOpacity style={{...styles.settingcard, marginTop:10}} onPress={(e) => {rejectSession()}}>
											<Text style={{color:Colors.Light}} >Reject</Text>
										</TouchableOpacity>
										<TouchableOpacity style={{...styles.settingcard, backgroundColor:'green', marginTop:10}} onPress={(e) => {approveSession()}}>
											<Text style={{color:Colors.Light}}>Accept</Text>
										</TouchableOpacity>
									</View>
								</>
								:<>
									<Text>Could not get wallet information from QRCode.</Text>
								</>
							}
						</>
					}
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