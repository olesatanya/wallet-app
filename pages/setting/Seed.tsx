import React from 'react';
import { StyleSheet, TouchableOpacity, View, TextInput, Text } from 'react-native';
import Layout from '../Layout'
import {Colors, gstyle, w} from '../Theme'; 
import Icons from '../../components/Icon'
import useStore from '../../useStore'

export default function ({navigation} : any) {
	const { update, currentAccountSeed} = useStore();  
	const setNetwork = (type: string) => {
		update({network: type})
	}
	const [status, setStatus] = React.useState({
		authchecked : false
	});
	const updateStatus = (params : {[key : string] : string|number|boolean}) => setStatus({...status, ...params});
	

	const password = '123456';

	return (
		<Layout>
			<View style={styles.justify}>
				<TouchableOpacity style={{transform:[{rotate:'90deg'}],  width:30, height:20}} onPress={(e) => {navigation?.navigate('Setting_Home')}}>
					<Icons.ArrowDown width={25} height={25} color={Colors.LightDark} />
				</TouchableOpacity>
				<Text style={{color:Colors.Light, ...gstyle.t3}}>Show secret recovery phrase</Text>
				<View></View>
			</View>
			<View style={{padding: 10, marginTop: 30}}>
				{
					!status.authchecked ? (
						<>
							<Text style={{textAlign:'center', color:'rgb(255, 220, 98)', ...gstyle.t3}}>Do not share your private key!</Text>
							<Text style={{textAlign:'center', margin:20, color:'rgb(255, 220, 98)', ...gstyle.t}}>If someone has your private key they will have full control of your wallet.</Text>
							<TextInput style={styles.input} textContentType='password' placeholder='Password' placeholderTextColor={Colors.LightDark} secureTextEntry></TextInput>
						
							<View style={{...styles.justify, justifyContent:'space-around'}}>
								<TouchableOpacity style={{...styles.settingcard, marginTop:10}} onPress={(e) => {navigation?.navigate('Setting_Home')}}>
									<Text style={{color:Colors.Light, textAlign:'center'}}>Cancel</Text>
								</TouchableOpacity>
								<TouchableOpacity style={{...styles.settingcard, backgroundColor:'#338834', marginTop:10}} onPress={(e) => {updateStatus({authchecked: true})}}>
										<Text style={{color:Colors.Light, textAlign:'center'}} >Next</Text>
								</TouchableOpacity>
							</View>
						</>
					) :
					(
						<>
							<Text style={{textAlign:'center', color:'rgb(255, 220, 98)', ...gstyle.t3}}>Your secret recovery phrase</Text>
							<Text style={{textAlign:'center', margin:20, color:'rgb(255, 220, 98)', ...gstyle.t}}>If someone has your private key they will have full control of your wallet.</Text>
							<TextInput style={{...styles.input, padding: 20}} multiline>
								{
									currentAccountSeed + "apple matter father mother sister brother grandfather grandmother ancle "
								}
							</TextInput>
						
							<View style={{...styles.justify}}>
								<TouchableOpacity style={{...styles.settingcard, marginTop:100, width: w(90), marginLeft:'auto', marginRight:'auto'}} onPress={(e) => {navigation?.navigate('Setting_Home')}}>
									<Text style={{color:Colors.Light, textAlign:'center'}}>Done</Text>
								</TouchableOpacity>
							</View>
						</>
					)
				}
			
			</View>
		</Layout>
	);
}

const styles = StyleSheet.create({
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