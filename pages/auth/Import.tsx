import React from 'react'
import { StyleSheet, TouchableOpacity, View, TextInput, Text } from 'react-native';
import {Colors, h, w, gstyle} from '../Theme'; 
import Icons from '../../components/Icon'
import useStore, { showToast} from '../../useStore';
import {checkMnemonic, fromMnemonic} from '../../library/wallet'
import Spinner from 'react-native-loading-spinner-overlay';

interface statusProps {
	seed1: string
	seed2: string
	seed3: string
	seed4: string
	seed5: string
	seed6: string
	seed7: string
	seed8: string
	seed9: string
	seed10: string
	seed11: string
	seed12: string
}

export default function ({navigation} : any) {
	const {update, loading,  currentAddress, wallets} = useStore();
	const [status, setStatus] = React.useState<statusProps>({ 
		seed1: '',
		seed2: '',
		seed3: '',
		seed4: '',
		seed5: '',
		seed6: '',
		seed7: '',
		seed8: '',
		seed9: '',
		seed10: '',
		seed11: '',
		seed12: ''
	});	
	const updateStatus = (params:Partial<statusProps>) => setStatus({...status, ...params});
 
	const refSeed1 = React.useRef<TextInput>(null);
	const refSeed2 = React.useRef<TextInput>(null);
	const refSeed3 = React.useRef<TextInput>(null);
	const refSeed4 = React.useRef<TextInput>(null);
	const refSeed5 = React.useRef<TextInput>(null);
	const refSeed6 = React.useRef<TextInput>(null);
	const refSeed7 = React.useRef<TextInput>(null);
	const refSeed8 = React.useRef<TextInput>(null);
	const refSeed9 = React.useRef<TextInput>(null);
	const refSeed10 = React.useRef<TextInput>(null);
	const refSeed11 = React.useRef<TextInput>(null);
	const refSeed12 = React.useRef<TextInput>(null);

	const checkPhrase = async () => {
		
		if(status.seed1 == null || status.seed1.trim() == '') {	showToast("Error",  'Invalid mnemonic word (1)');	return;	}
		if(status.seed2 == null || status.seed2.trim() == '') {	showToast("Error",  'Invalid mnemonic word (2)');	return;	}
		if(status.seed3 == null || status.seed3.trim() == '') {	showToast("Error",  'Invalid mnemonic word (3)');	return;	}
		if(status.seed4 == null || status.seed4.trim() == '') {	showToast("Error",  'Invalid mnemonic word (4)');	return;	}
		if(status.seed5 == null || status.seed5.trim() == '') {	showToast("Error",  'Invalid mnemonic word (5)');	return;	}
		if(status.seed6 == null || status.seed6.trim() == '') {	showToast("Error",  'Invalid mnemonic word (6)');	return;	}
		if(status.seed7 == null || status.seed7.trim() == '') {	showToast("Error",  'Invalid mnemonic word (7)');	return;	}
		if(status.seed8 == null || status.seed8.trim() == '') {	showToast("Error",  'Invalid mnemonic word (8)');	return;	}
		if(status.seed9 == null || status.seed9.trim() == '') {	showToast("Error",  'Invalid mnemonic word (9)');	return;	}
		if(status.seed10 == null || status.seed10.trim() == '') {	showToast("Error",  'Invalid mnemonic word (10)');	return;	}
		if(status.seed11 == null || status.seed11.trim() == '') {	showToast("Error",  'Invalid mnemonic word (11)');	return;	}
		if(status.seed12 == null || status.seed12.trim() == '') {	showToast("Error",  'Invalid mnemonic word (12)');	return;	}
		var mnemonic = status.seed1.concat(" ", status.seed2, " ", status.seed3, " ", status.seed4, " ", status.seed5, " ", status.seed6, " ", status.seed7, " ", status.seed8, " ", status.seed9, " ", status.seed10, " ", status.seed11, " ", status.seed12)

		// if(await checkMnemonic(mnemonic)){
		// 	const wallet = await fromMnemonic(mnemonic);
		// 	const data = {
		// 		name: "New Wallet",
		// 		address: wallet.address,
		// 		privatekey: wallet.privatekey,
		// 		publickey: wallet.publickey,
		// 		phrase: mnemonic,
		// 		balance: 0, 
		// 		created: new Date().getTime()
		// 	}
		// 	var new_wallets: any;
		// 	new_wallets = [data];
		// 	if(wallets) {
		// 		new_wallets = wallets.push(data)
		// 	}
		// 	console.log(new_wallets)
		// 	// navigation?.navigate('AuthDone')	
		// 	// update({wallets: new_wallets, loading: false});
		// 	update({loading: false})
		// } else {
		// 	showToast("Error", "Invalid mnemonic");
		// }
	}

	React.useEffect(()=> {
		// update({currentAddress: 'abcedf'})  
		console.log("current:" + currentAddress)
	}, []) 
	return (
		<View style={{backgroundColor: Colors.Dark, minHeight:"100%"}}>
			<Text style={{color:'white'}}>currentAddress</Text>
			<Spinner visible = {loading} /> 
			<View style={{...styles.header}}>
				<TouchableOpacity onPress={() =>{navigation?.navigate('AuthHome')}} style={{transform:[{rotate:'90deg'}]}}>
					<Icons.ArrowDown width={20} height={20} color={Colors.LightDark} />
				</TouchableOpacity>
			</View>
			<View style={{padding:10, height:h(90), display:'flex', flexDirection:'column', justifyContent:'center', flexWrap:'wrap', alignItems:'center', alignContent:'center'}}>
				<Text style={{...gstyle.t2, color:Colors.Light, textAlign:'center'}}>Confirm  Recovery Phrase</Text>
				<Text style={{...gstyle.t, color:Colors.LightDark, textAlign:'center', marginTop: 10}}>Import an existing wallet with your 12 or 24-word secret recovery phrase.</Text>
				<View style={{...styles.row, marginTop: 20}}>
					<TextInput style={styles.seedInput} placeholder="1." placeholderTextColor={Colors.LightDark} ref={refSeed1} onChangeText={(value)=>{updateStatus({seed1: value})}} value={status.seed1}></TextInput>
					<TextInput style={styles.seedInput} placeholder="2." placeholderTextColor={Colors.LightDark} ref={refSeed2} onChangeText={(value)=>{updateStatus({seed2: value})}} value={status.seed2}></TextInput>
					<TextInput style={styles.seedInput} placeholder="3." placeholderTextColor={Colors.LightDark} ref={refSeed3} onChangeText={(value)=>{updateStatus({seed3: value})}} value={status.seed3}></TextInput>
					<TextInput style={styles.seedInput} placeholder="4." placeholderTextColor={Colors.LightDark} ref={refSeed4} onChangeText={(value)=>{updateStatus({seed4: value})}} value={status.seed4}></TextInput>
					<TextInput style={styles.seedInput} placeholder="5." placeholderTextColor={Colors.LightDark} ref={refSeed5} onChangeText={(value)=>{updateStatus({seed5: value})}} value={status.seed5}></TextInput>
					<TextInput style={styles.seedInput} placeholder="6." placeholderTextColor={Colors.LightDark} ref={refSeed6} onChangeText={(value)=>{updateStatus({seed6: value})}} value={status.seed6}></TextInput>
					<TextInput style={styles.seedInput} placeholder="7." placeholderTextColor={Colors.LightDark} ref={refSeed7} onChangeText={(value)=>{updateStatus({seed7: value})}} value={status.seed7}></TextInput>
					<TextInput style={styles.seedInput} placeholder="8." placeholderTextColor={Colors.LightDark} ref={refSeed8} onChangeText={(value)=>{updateStatus({seed8: value})}} value={status.seed8}></TextInput>
					<TextInput style={styles.seedInput} placeholder="9." placeholderTextColor={Colors.LightDark} ref={refSeed9} onChangeText={(value)=>{updateStatus({seed9: value})}} value={status.seed9}></TextInput>
					<TextInput style={styles.seedInput} placeholder="10." placeholderTextColor={Colors.LightDark} ref={refSeed10} onChangeText={(value)=>{updateStatus({seed10: value})}} value={status.seed10}></TextInput>
					<TextInput style={styles.seedInput} placeholder="11." placeholderTextColor={Colors.LightDark} ref={refSeed11} onChangeText={(value)=>{updateStatus({seed11: value})}} value={status.seed11}></TextInput>
					<TextInput style={styles.seedInput} placeholder="12." placeholderTextColor={Colors.LightDark} ref={refSeed12} onChangeText={(value)=>{updateStatus({seed12: value})}} value={status.seed12}></TextInput>
				</View>
				<TouchableOpacity style = {styles.btn} accessible={false} onPress={()=>{checkPhrase()}}><Text style={{color: Colors.Light, textAlign: 'center'}}>Continue</Text></TouchableOpacity>
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