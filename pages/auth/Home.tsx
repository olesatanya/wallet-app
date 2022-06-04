import { StyleSheet, TouchableOpacity, View, Image, Text } from 'react-native';
import Layout from '../Layout'
import {Colors, h, w, gstyle} from '../Theme'; 

export default function ({navigation} : any) {
	return (
		<View style={{backgroundColor: Colors.Dark, minHeight:"100%"}}>
			<View style={{padding:10, height:h(60), display:'flex', flexDirection:'column', justifyContent:'center', flexWrap:'wrap', alignItems:'center', alignContent:'center'}}>
				<View style={{marginLeft:'auto', marginRight:'auto', marginBottom:10}}>
					<Image source={require('../../assets/icon.png')} style={{width: 50, height: 50}}/>
				</View>
				<Text style={{...gstyle.t2, color:Colors.Light, textAlign:'center'}}>Neon Wallet</Text>
				<Text style={{...gstyle.t, marginTop:20, color:Colors.LightDark, textAlign:'center'}}>A crypto wallet reimagined for DeFi & NFTs</Text>
			</View>
			<View style={{padding:10}}>
				<TouchableOpacity style = {styles.btn1} onPress={()=>{navigation?.navigate('AuthNew')}}><Text style={{color: Colors.Light, textAlign: 'center'}}>Create a new wallet</Text></TouchableOpacity>
				<TouchableOpacity style = {styles.btn2} onPress={()=>{navigation?.navigate('AuthImport')}}><Text style={{color: Colors.Light, textAlign: 'center'}}>I already have a wallet</Text></TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	btn1: {
		bottom: 0,
		backgroundColor: 'rgb(78, 68, 206)',
		borderRadius: 5,
		padding: 10,
		marginLeft: 'auto',
		marginRight: 'auto',
		width: w(90),
		margin: 10
	},
	btn2: {
		bottom: 0,
		backgroundColor: Colors.Primary,
		borderRadius: 5,
		padding: 10,
		marginLeft: 'auto',
		marginRight: 'auto',
		width: w(90),
		margin: 10
	}
})