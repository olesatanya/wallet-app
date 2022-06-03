import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, ScrollView } from 'react-native';
import Layout from '../Layout'
import {Colors, gstyle} from '../Theme'; 
import Icons from '../../components/Icon'
import useStore from '../../useStore'

export default function ({navigation} : any) {
	const { update, lang} = useStore();  
	const setLanguage = (type: string) => {
		update({lang: type})
	}
	const languages = ['English', 'Chinese', 'Russia', 'Japan', 'Arabic']
	return (
		<Layout>
			<View style={styles.justify}>
				<TouchableOpacity style={{transform:[{rotate:'90deg'}],  width:30, height:20}} onPress={(e) => {navigation?.navigate('Setting_Home')}}>
					<Icons.ArrowDown width={25} height={25} color={Colors.LightDark} />
				</TouchableOpacity>
				<Text style={{color:Colors.Light, ...gstyle.t3}}>Display Language</Text>
				<View></View>
			</View>
			<View style={{padding: 10}}>
				{
					languages.map((data, key) => (
						<TouchableOpacity key={key} style={{...styles.settingcard, marginTop:10}}>
							<Text style={{color:Colors.Light, textAlign:'center'}} onPress={(e) => {setLanguage(data)}}>{data}</Text>
							{
								lang === data && <View style={styles.check}></View>
							}
						</TouchableOpacity>
					))
				}
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
	settingcard: {
		backgroundColor: Colors.Third,
		padding: 10,
		paddingLeft:20,
		borderRadius: 5,
		margin: 3,
		display: 'flex',
		position: 'relative'
	},
	check: {
		position: 'absolute',
		top: 15, 
		right: 10,
		width: 10, 
		height: 10,
		borderRadius:5,
		backgroundColor: Colors.Light
	}
})