import { StyleSheet, TouchableOpacity, View, TextInput, Text } from 'react-native';
import {Colors, h, w, gstyle} from '../Theme'; 
import Icons from '../../components/Icon'

export default function ({navigation} : any) {
	return (
		<View style={{backgroundColor: Colors.Dark, minHeight:"100%"}}>
			<View style={{...styles.header}}>
				<TouchableOpacity onPress={() =>{navigation?.navigate('AuthNew')}} style={{transform:[{rotate:'90deg'}]}}>
					<Icons.ArrowDown width={20} height={20} color={Colors.LightDark} />
				</TouchableOpacity>
			</View>
			<View style={{padding:10, height:h(90), display:'flex', flexDirection:'column', justifyContent:'center', flexWrap:'wrap', alignItems:'center', alignContent:'center'}}>
				<Text style={{...gstyle.t2, color:Colors.Light, textAlign:'center'}}>Secret Recovery Phrase</Text>
				<Text style={{...gstyle.t, marginTop:20, color:'#FFDC62', width:w(90), textAlign:'center'}}>This phrase is the ONLY way to recover your wallet. Do NOT share it with anyone!</Text>
				<TextInput style={{...styles.input, padding: 20}} multiline editable = {false}>
					This phrase is the ONLY way to recover your wallet. Do NOT share it with anyone!
				</TextInput>
				<TouchableOpacity style = {styles.btn} onPress={()=>{navigation?.navigate('AuthConfirmphrase')}}><Text style={{color: Colors.Light, textAlign: 'center'}}>Continue</Text></TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({

	header: {
		position: 'absolute',
		display: 'flex',
		justifyContent: 'space-between',
		flexWrap: 'wrap',
		flexDirection: 'row',
		alignItems: 'center',
		top: 0,
		left: 0,
		width: w(100),
		padding:5,
		paddingTop: 20,
		backgroundColor: Colors.Dark,
		borderColor: Colors.LightDark,
		borderBottomWidth: 0.7
	},
	btn: {
		bottom: 0,
		backgroundColor: 'rgb(78, 68, 206)',
		borderRadius: 5,
		padding: 10,
		marginLeft: 'auto',
		marginRight: 'auto',
		width: w(90),
		margin: 10
	},
	input: {
		borderRadius: 5,
    	padding: 5,
		paddingLeft: 20,
		margin:5,
		marginLeft: 'auto',
		marginRight:'auto',
    	backgroundColor: 'rgb(24, 24, 24)',
		borderWidth: 1,
		borderColor: 'rgb(47, 47, 47)',
		color:	Colors.Light,
		...gstyle.t3,
		width: w(90)
	},
})