import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Animated, NativeModules} from 'react-native';
import Layout from '../Layout'
import {Colors, h, w, gstyle} from '../Theme'; 
import Icons from '../../components/Icon'
import "react-native-get-random-values"
import "@ethersproject/shims"
import { ethers } from "ethers";
import useStore from '../../useStore'
var bip39 = require('bip39') 
var crypto = require('crypto')
export default function ({navigation} : any) {
	const { currentAccount, chainId, update} = useStore(); 
	
	const connect = async () => {
		update({currentAccount: 'hsr934'})
		
		// const wallet = ethers.Wallet.createRandom()
		// alert(wallet.address + "\t "+ wallet.mnemonic)
		// var  randomBytes = crypto.randomBytes(16) 
		// var mnemonic = bip39.entropyToMnemonic(randomBytes.toString('hex')) 
		// console.log(mnemonic)
		// const wallet = ethers.Wallet.fromMnemonic(mnemonic)
		// console.log(wallet.address, wallet.privateKey)
		// update({currentAccount:new Date().getTime()+" ."})
	}	
	return (
		<Layout navigation={navigation}>
			<View style={{padding: 10, display:'flex'}}>
			<TouchableOpacity style={{...styles.coincard,  ...styles.justify}} onPress={(event)=>{connect()}}><Text>Wallet</Text></TouchableOpacity>
				<Text style={{marginTop: 25, color:Colors.Light, ...gstyle.t2, textAlign:'center'}}>Wallet 1</Text>
				<View style={{...styles.justify, justifyContent:'space-around', marginTop: 20}}>
					<TouchableOpacity style={styles.btn}><Text style={{color:Colors.Light, textAlign:'center'}}>Deposit</Text></TouchableOpacity>
					<TouchableOpacity style={styles.btn}><Text style={{color:Colors.Light, textAlign:'center'}}>Send</Text></TouchableOpacity>
				</View>
				<TouchableOpacity style={{...styles.coincard, marginTop:30, ...styles.justify}}>
					<Icons.ETH width={25} height={25} color={Colors.LightDark}/>
					<View>
						<Text style={{color:Colors.Light, textAlign:'right', fontSize:20}}>ETH</Text>
						<Text style={{color:Colors.LightDark, textAlign:'right'}}>1000000 ETH</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={{...styles.coincard,  ...styles.justify}}>
					<Icons.BNB width={25} height={25} color={Colors.LightDark}/>
					<View>
						<Text style={{color:Colors.Light, textAlign:'right', fontSize:20}}>BNB</Text>
						<Text style={{color:Colors.LightDark, textAlign:'right'}}>1000000 BNB</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={{...styles.coincard,  ...styles.justify}}>
					<Icons.LTC width={25} height={25} color={Colors.LightDark}/>
					<View>
						<Text style={{color:Colors.Light, textAlign:'right', fontSize:20}}>LTC</Text>
						<Text style={{color:Colors.LightDark, textAlign:'right'}}>1000000 LTC</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={{...styles.coincard,  ...styles.justify}}>
					<Icons.USDT width={25} height={25} color={Colors.LightDark}/>
					<View>
						<Text style={{color:Colors.Light, textAlign:'right', fontSize:20}}>USDT</Text>
						<Text style={{color:Colors.LightDark, textAlign:'right'}}>1000000 USDT</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={{...styles.coincard,  ...styles.justify}}>
					<Icons.BTC width={25} height={25} color={Colors.LightDark}/>
					<View>
						<Text style={{color:Colors.Light, textAlign:'right', fontSize:20}}>BTC</Text>
						<Text style={{color:Colors.LightDark, textAlign:'right'}}>1000000 BTC</Text>
					</View>
				</TouchableOpacity>
			</View>
		</Layout>
	);
}

const styles = StyleSheet.create({
	btn: {
		borderRadius: 5,
		backgroundColor: Colors.Secondary,
		shadowColor: 'rgba(0, 0,0,0.5)',
		shadowOffset: {width:10, height:3},
		shadowRadius: 5,
		padding: 10,
		margin: 10,
		width: w(30)
	},
	justify: {
		display: 'flex',
		alignContent: 'center',
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems:	'center',
		justifyContent: 'space-between'
	},
	coincard: {
		backgroundColor: Colors.Third,
		padding: 10,
		borderRadius: 5,
		margin: 5,
		display: 'flex'
	}
})