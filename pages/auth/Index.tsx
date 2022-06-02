import React from 'react';
import { StyleSheet, TouchableOpacity, View, TextInput, Text } from 'react-native';
import Layout from '../Layout'
import {Colors, h, w, gstyle} from '../Theme'; 
import Icons from '../../components/Icon'
import { loadPlugin } from 'immer/dist/internal';

export default function ({navigation} : any) {
	const login = () => {
		navigation.navigate('Index', { name : 'Index' })
	}
	return (
		<Layout>
			<View style={{padding:10, height:h(80), display:'flex', flexDirection:'column', justifyContent:'center', flexWrap:'wrap', alignItems:'center', alignContent:'center'}}>
				<View style={{marginLeft:'auto', marginRight:'auto', marginBottom:10}}>
					<Icons.ETH width={50} height={50} color={Colors.LightDark}/>
				</View>
				<Text style={{...gstyle.t2, color:Colors.Light, textAlign:'center'}}>Enter your password</Text>
				<TextInput placeholder='' style={styles.input}></TextInput>
			</View>
			<View style={{padding:10}}>
				<TouchableOpacity style = {styles.btn} onPress={()=>{login()}}><Text style={{color: Colors.Light, textAlign: 'center'}}>Unlock</Text></TouchableOpacity>
			</View>
		</Layout>
	);
}

const styles = StyleSheet.create({
	input: {
		borderRadius: 5,
    	padding: 10,
		margin: 10,
		marginTop: 20,
    	backgroundColor: 'rgb(24, 24, 24)',
		borderWidth: 1,
		borderColor: 'rgb(47, 47, 47)',
		color:	Colors.Light,
		...gstyle.t3,
		width: w(90)
	},
	btn: {
		bottom: 0,
		backgroundColor: 'rgb(66, 58, 169)',
		borderRadius: 5,
		padding: 10,
		marginLeft: 'auto',
		marginRight: 'auto',
		width: w(90)
	}
})