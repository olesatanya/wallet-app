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
				<Text style={{color:Colors.Light, ...gstyle.t3}}>Import Token</Text>
				<View></View>
			</View>
			<View style={{marginTop: 20}}>
				<TextInput placeholder='Search...' style={{...styles.input, textAlign:'left'}} secureTextEntry={true} placeholderTextColor={Colors.LightDark} ></TextInput>
			</View>
			
			<View>
				<Text style={styles.tokentext}>Name: BeamStarter Token</Text>
				<Text style={styles.tokentext}>Symbol:	BSTR</Text>
				<Text style={styles.tokentext}>Decimal: 18</Text>
				<TouchableOpacity style={styles.addbtn}><Text style={{color: Colors.Light, ...gstyle.t3, textAlign: 'center'}}>Add</Text></TouchableOpacity>	
			</View>
			<View style= {{padding: 10}}>
				<TouchableOpacity style={{...styles.coincard, marginTop:30, ...styles.justify}}>
						<View>
							<Text style={{color:Colors.Light, textAlign:'left', fontSize:20}}>ETH</Text>
							<Text style={{color:Colors.LightDark, textAlign:'left'}}>1000000 ETH</Text>
						</View>
						<Switch
							trackColor={{ false: "#767577", true: "rgb(58, 58, 155)" }}
							thumbColor={status.isEnabled ? "rgb(66, 58, 169)" : "#f4f3f4"}
							ios_backgroundColor="#3e3e3e"
							onValueChange={() => {updateStatus({isEnabled: !status.isEnabled})}}
							value={status.isEnabled}
						/>
				</TouchableOpacity>
				<TouchableOpacity style={{...styles.coincard, ...styles.justify}}>
						<View>
							<Text style={{color:Colors.Light, textAlign:'left', fontSize:20}}>ETH</Text>
							<Text style={{color:Colors.LightDark, textAlign:'left'}}>1000000 ETH</Text>
						</View>
						<Switch
							trackColor={{ false: "#767577", true: "rgb(58, 58, 155)" }}
							thumbColor={status.isEnabled ? "rgb(66, 58, 169)" : "#f4f3f4"}
							ios_backgroundColor="#3e3e3e"
							onValueChange={() => {updateStatus({isEnabled: !status.isEnabled})}}
							value={status.isEnabled}
						/>
				</TouchableOpacity>
				<TouchableOpacity style={{...styles.coincard,  ...styles.justify}}>
						<View>
							<Text style={{color:Colors.Light, textAlign:'left', fontSize:20}}>ETH</Text>
							<Text style={{color:Colors.LightDark, textAlign:'left'}}>1000000 ETH</Text>
						</View>
						<Switch
							trackColor={{ false: "#767577", true: "rgb(58, 58, 155)" }}
							thumbColor={status.isEnabled ? "rgb(66, 58, 169)" : "#f4f3f4"}
							ios_backgroundColor="#3e3e3e"
							onValueChange={() => {updateStatus({isEnabled: !status.isEnabled})}}
							value={status.isEnabled}
						/>
				</TouchableOpacity>
			</View>
		</Layout>
	);
}

const styles = StyleSheet.create({
	tokentext: {
		textAlign:'center',
		color:Colors.Light,
		padding: 10
	},
	addbtn: {
		bottom: 0,
		backgroundColor: 'rgb(66, 58, 169)',
		borderRadius: 5,
		padding: 10,
		margin: 10,
		marginLeft: 'auto',
		marginRight: 'auto',
		width: w(90)
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