import { StyleSheet, TouchableOpacity, View, TextInput, Text } from 'react-native';
import {Colors, h, w, gstyle} from '../Theme'; 
import Icons from '../../components/Icon'

export default function ({navigation} : any) {
	return (
		<View style={{backgroundColor: Colors.Dark, minHeight:"100%"}}>
			<View style={{...styles.header}}>
				<TouchableOpacity onPress={() =>{navigation?.navigate('AuthHome	')}} style={{transform:[{rotate:'90deg'}]}}>
					<Icons.ArrowDown width={20} height={20} color={Colors.LightDark} />
				</TouchableOpacity>
			</View>
			<View style={{padding:10, height:h(90), display:'flex', flexDirection:'column', justifyContent:'center', flexWrap:'wrap', alignItems:'center', alignContent:'center'}}>
				<Text style={{...gstyle.t2, color:Colors.Light, textAlign:'center'}}>Confirm  Recovery Phrase</Text>
				<Text style={{...gstyle.t, color:Colors.LightDark, textAlign:'center', marginTop: 10}}>Import an existing wallet with your 12 or 24-word secret recovery phrase.</Text>
				<View style={{...styles.row, marginTop: 20}}>
					<TextInput style={styles.seedInput} placeholder="1." placeholderTextColor={Colors.LightDark}></TextInput>
					<TextInput style={styles.seedInput} placeholder="2." placeholderTextColor={Colors.LightDark}></TextInput>
					<TextInput style={styles.seedInput} placeholder="3." placeholderTextColor={Colors.LightDark}></TextInput>
					<TextInput style={styles.seedInput} placeholder="4." placeholderTextColor={Colors.LightDark}></TextInput>
					<TextInput style={styles.seedInput} placeholder="5." placeholderTextColor={Colors.LightDark}></TextInput>
					<TextInput style={styles.seedInput} placeholder="6." placeholderTextColor={Colors.LightDark}></TextInput>
					<TextInput style={styles.seedInput} placeholder="7." placeholderTextColor={Colors.LightDark}></TextInput>
					<TextInput style={styles.seedInput} placeholder="8." placeholderTextColor={Colors.LightDark}></TextInput>
					<TextInput style={styles.seedInput} placeholder="9." placeholderTextColor={Colors.LightDark}></TextInput>
					<TextInput style={styles.seedInput} placeholder="10." placeholderTextColor={Colors.LightDark}></TextInput>
					<TextInput style={styles.seedInput} placeholder="11." placeholderTextColor={Colors.LightDark}></TextInput>
					<TextInput style={styles.seedInput} placeholder="12." placeholderTextColor={Colors.LightDark}></TextInput>
				</View>
				<TouchableOpacity style = {styles.btn} accessible={false} onPress={()=>{navigation?.navigate('AuthDone')}}><Text style={{color: Colors.Light, textAlign: 'center'}}>Continue</Text></TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	row: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
		alignItems: 'center',
		alignContent: 'center'
	},
	seedInput: {
		padding: 5,
		margin: 5,
		borderRadius: 3,
		paddingLeft:10,
		backgroundColor: Colors.Third,
		borderColor: Colors.LightDark,
		borderWidth: 1,
		width: w(25),
		color: Colors.Light
	},
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