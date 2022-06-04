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
				<Text style={{color:Colors.Light, ...gstyle.t3}}>Send ETH</Text>
				<View></View>
			</View>
			<View style={{marginTop: 30, padding:10}}>
				<Image source = {require('../../assets/icon.png')} style={{width:30, height: 30, marginLeft:'auto', marginRight:'auto'}}/>	
				<Text style={{color: Colors.Light, textAlign:'center', marginTop: 20}}>Account 1</Text>
				<View style={{...styles.justify,  margin:5, padding:15, borderBottomColor: Colors.LightDark, borderBottomWidth: 1}}>
					<Text style={{color: Colors.Light, ...gstyle.t}}>Amount:</Text>
					<View style={styles.justify}>
						<Text style={{color: Colors.Light, ...gstyle.t}}>0.3 ETH</Text>
						<Text style={{color: Colors.LightDark, ...gstyle.t0, marginLeft: 10}}>($585)</Text>
					</View>
				</View>
				<View style={{...styles.justify,  margin:5, padding:15, borderBottomColor: Colors.LightDark, borderBottomWidth: 1}}>
					<Text style={{color: Colors.Light, ...gstyle.t}}>Gas fee:</Text>
					<TouchableOpacity style={styles.editbtn}><Text style={{color:'orange', ...gstyle.t0}}>Edit</Text></TouchableOpacity>
					<View style={styles.justify}>
						<Text style={{color: Colors.Light, ...gstyle.t}}>4343 ETH</Text>
						<Text style={{color: Colors.LightDark, ...gstyle.t0, marginLeft: 10}}>($585)</Text>
					</View>
				</View>
				<View style={{...styles.justify,  margin:5, padding:15, borderBottomColor: Colors.LightDark, borderBottomWidth: 1}}>
					<Text style={{color: Colors.Light, ...gstyle.t}}>Total:</Text>
					<View style={styles.justify}>
						<Text style={{color: Colors.Light, ...gstyle.t}}>5893 ETH</Text>
						<Text style={{color: Colors.LightDark, ...gstyle.t0, marginLeft: 10}}>($585)</Text>
					</View>
				</View>
				<View style={{...styles.justify, justifyContent:'space-around', marginTop: 30}}>
					<TouchableOpacity style={styles.btn} onPress={(e) => {navigation?.navigate('Wallet_Send')}}><Text style= {{color:Colors.Light, textAlign:'center'}} >Cancel</Text></TouchableOpacity>
					<TouchableOpacity style={{...styles.btn, backgroundColor:'rgb(66, 58, 169)'}} onPress={(e) => {}}><Text style= {{color:Colors.Light, textAlign:'center'}}>Confirm</Text></TouchableOpacity>
				</View>
			</View>
		</Layout>
	);
}

const styles = StyleSheet.create({
	editbtn: {
		position: 'absolute',
		right: 0,
		top: 0,
		borderRadius:3,
		padding: 1,
		paddingLeft: 5,
		paddingRight: 5,
		borderColor: 'orange',
		borderWidth: 1
	},
	justify: {
		display: 'flex',
		alignContent: 'center',
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems:	'center',
		justifyContent: 'space-between'
	},

	btn: {
		borderRadius: 5,
		backgroundColor: Colors.Third,
		shadowColor: 'rgba(0, 0,0,0.5)',
		shadowOffset: {width:10, height:3},
		shadowRadius: 5,
		padding: 10,
		margin: 10,
		width: w(30)
	},
})