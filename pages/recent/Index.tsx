import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import Layout from '../Layout'
import {Colors, h, w, gstyle} from '../Theme'; 
import Icons from '../../components/Icon'


export default function ({navigation} : any) {
	return (
		<Layout navigation={navigation}>
			<View style={{padding: 20, display:'flex'}}>
			  	<Text style={{marginTop: 10, color:Colors.Light, ...gstyle.t2, textAlign:'center'}}>Recent Activity</Text>
			</View>
		</Layout>
	);
}

const styles = StyleSheet.create({
	
})