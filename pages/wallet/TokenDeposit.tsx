import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, TextInput, Image} from 'react-native';
import Layout from '../Layout'
import {Colors, h, w, gstyle} from '../Theme'; 
import Icons from '../../components/Icon'
import QRcode from '../../components/qrcode'


export default function ({navigation} : any) {
	const [status, setStatus] = React.useState({
		isEnabled : false
	});
	const updateStatus = (params : {[key : string] : string|number|boolean}) => setStatus({...status, ...params});
	return (
		<Layout navigation={navigation}>
			<View style={styles.justify}>
				<TouchableOpacity style={{transform:[{rotate:'90deg'}],  width:30, height:20}} onPress={(e) => {navigation?.navigate('Wallet_Info')}}>
					<Icons.ArrowDown width={25} height={25} color={Colors.LightDark} />
				</TouchableOpacity>
				<Text style={{color:Colors.Light, ...gstyle.t3}}>Deposit ETH</Text>
				<View></View>
			</View>
			<View style={{marginTop: 30}}>
				<Image source = {require('../../assets/icon.png')} style={{width:30, height: 30, marginLeft:'auto', marginRight:'auto'}}/>	
				<Text style={{color: Colors.Light, textAlign:'center', marginTop: 20}}>Account 1</Text>
				<View style={{marginLeft:'auto', marginRight:'auto', marginTop: 20}}>
					<QRcode.createQRCode code= {'dsfsdsdf'} />
				</View>
				<Text style={styles.address} onPress={()=>{}}>0xE71E33e78C5d4764549123Ec4B770eF66FbD2398</Text>
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
	address: {
		color: Colors.Light,
		...gstyle.t,
		backgroundColor: Colors.DarkGrey,
		padding: 10,
		borderRadius: 5,
		textAlign: 'center',
		width: w(80),
		marginTop: 30,
		marginRight: 'auto',
		marginLeft: 'auto'
	}
})