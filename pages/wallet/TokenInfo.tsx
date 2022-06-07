import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, TextInput, Switch} from 'react-native';
import Layout from '../Layout'
import {Colors, h, w, gstyle} from '../Theme'; 
import Icons from '../../components/Icon'

export default function ({navigation} : any) {
	const [status, setStatus] = React.useState({
		isEnabled : false
	});
	const updateStatus = (params : {[key : string] : string|number|boolean}) => setStatus({...status, ...params});
	return (
		<Layout navigation={navigation}>
			<View style={styles.justify}>
				<TouchableOpacity style={{transform:[{rotate:'90deg'}],  width:30, height:20}} onPress={(e) => {navigation?.navigate('Wallet_Home')}}>
					<Icons.ArrowDown width={25} height={25} color={Colors.LightDark} />
				</TouchableOpacity>
				<Text style={{color:Colors.Light, ...gstyle.t3}}>Account / ETH</Text>
				<View></View>
			</View>
			<View style={{marginTop: 20}}>
				<Text style={{...gstyle.t2, color: Colors.Light, textAlign: 'center'}}> 1.456 ETH</Text>
				<Text style={{...gstyle.t, color: Colors.LightDark, textAlign: 'center'}}> $545454454</Text>
			</View>
			<View style={{...styles.justify, justifyContent:'space-around', marginTop: 30}}>
				<TouchableOpacity style={styles.btn} onPress={()=>{navigation?.navigate('Wallet_Deposit')}}>
					<Text style={{color: Colors.Light, textAlign:'center'}} >Deposit</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.btn} onPress={()=>{navigation?.navigate('Wallet_Send')}}>
					<Text style={{color: Colors.Light, textAlign:'center'}}>Send</Text>
				</TouchableOpacity>
			</View>
			<View style={{padding: 10}}>
				<TouchableOpacity style={{...styles.coincard,  ...styles.justify}} onPress={()=>{navigation?.navigate('Wallet_Send')}}>
					<View style={{...styles.justify}}>
						<Icons.ArrowBottom width={25} height={25} color={Colors.LightDark}/>
						<View style={{marginLeft: 10}}>
							<Text style={{color:Colors.Light, textAlign:'left', ...gstyle.t3}}>Receive</Text>
							<Text style={{color:Colors.LightDark, textAlign:'left', ...gstyle.t0}}>From 0x39349349</Text>
						</View>
					</View>
					<View>
						<Text style={{color:Colors.Light, textAlign:'right', ...gstyle.t3}}>BNB</Text>
						<Text style={{color:Colors.LightDark, textAlign:'right'}}>1000000 BNB</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={{...styles.coincard,  ...styles.justify}} onPress={()=>{navigation?.navigate('Wallet_Send')}}>
						<View style={styles.justify}>
							<Icons.ArrowBottom width={25} height={25} color={Colors.LightDark}/>
							<View style={{marginLeft: 10}}>
								<Text style={{color:Colors.Light, textAlign:'left', ...gstyle.t3}}>Send</Text>
								<Text style={{color:Colors.LightDark, textAlign:'left', ...gstyle.t0}}>From 0x39349349</Text>
							</View>
						</View>
						<View>
							<Text style={{color:Colors.Light, textAlign:'right', ...gstyle.t3}}>BNB</Text>
							<Text style={{color:Colors.LightDark, textAlign:'right'}}>1000000 BNB</Text>
						</View>
				</TouchableOpacity>
			</View>
		</Layout>
	);
}

const styles = StyleSheet.create({
	btn: {
		borderRadius: 5,
		backgroundColor: '#1098fc',
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