import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, TextInput, Image} from 'react-native';
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
				<TouchableOpacity style={{transform:[{rotate:'90deg'}],  width:30, height:20}} onPress={(e) => {navigation?.navigate('Wallet_Info')}}>
					<Icons.ArrowDown width={25} height={25} color={Colors.LightDark} />
				</TouchableOpacity>
				<Text style={{color:Colors.Light, ...gstyle.t3}}>Send ETH</Text>
				<View></View>
			</View>
			<View style={{marginTop: 20, padding: 10}}>
				<Image source = {require('../../assets/icon.png')} style={{width:50, height: 50, marginLeft:'auto', marginRight:'auto'}}/>	
				<TextInput placeholder='Receipients ETH address' placeholderTextColor={Colors.LightDark} style={{...styles.input}}></TextInput>
				<TextInput placeholder='Amount' keyboardType = 'numeric' maxLength={10}   placeholderTextColor={Colors.LightDark} style={{...styles.input}}></TextInput>
				<Text style={{color:'red', textAlign:'center'}}>Exceed Balance</Text>
				<View style={{...styles.justify, justifyContent:'space-around', marginTop: 30}}>
					<TouchableOpacity style={styles.btn} onPress={(e) => {navigation?.navigate('Wallet_Info')}}><Text style= {{color:Colors.Light, textAlign:'center'}} >Cancel</Text></TouchableOpacity>
					<TouchableOpacity style={{...styles.btn, backgroundColor:'rgb(66, 58, 169)'}} onPress={(e) => {navigation?.navigate('Wallet_Confirm')}}><Text style= {{color:Colors.Light, textAlign:'center'}}>Next</Text></TouchableOpacity>
				</View>
			</View>
		</Layout>
	);
}

const styles = StyleSheet.create({
	input: {
		borderRadius: 5,
    	padding: 5,
		paddingLeft: 20,
		margin: 10,
		marginTop: 20,
    	backgroundColor: Colors.DarkGrey,
		borderWidth: 1,
		borderColor: 'rgb(47, 47, 47)',
		color:	Colors.Light,
		...gstyle.t,
		width: w(90)
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