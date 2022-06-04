import React from "react";
import {View, StyleSheet, TouchableOpacity, Text, Touchable} from "react-native"; 
import Spinner from 'react-native-loading-spinner-overlay';
import Icons from '../components/Icon'
import {Colors,  w, gstyle, h} from './Theme'; 
import useStore from '../useStore';
import { ScrollView } from "react-native-gesture-handler";

const Layout = (props:any) => {
	const {loading} = useStore();
	const updateStatus = (params : {[key : string] : string|number|boolean}) => setStatus({...status, ...params});
	const [status, setStatus] = React.useState({
		showMenu :  false
	})
	return (
		<View style={{backgroundColor: Colors.Dark, minHeight:"100%"}}>
			<View style={styles.header}>
				<TouchableOpacity onPress={() => updateStatus({showMenu : true})}>
					<Icons.Menu width={10} height={10} color={Colors.LightDark} />
				</TouchableOpacity>
				<Text style={{color:'white'}}>Wallet (DSDF...ER34)</Text>
			</View>
			<ScrollView style={{marginTop:60}}>
				{props.children}
			</ScrollView>
			<Spinner visible = {loading} />
			{
				status.showMenu && (
					<View style={styles.sidemenu}>
						<View style={styles.menubar}>
							<View style={{...styles.justify}}>
								<TouchableOpacity style={{...styles.closebtn}} onPress={(e) => {updateStatus({showMenu: false})}}>
									<Text style={{color:Colors.Light, fontSize:20}} >&times;</Text>
								</TouchableOpacity>
							</View>
							<TouchableOpacity style={{...styles.menu, marginTop:50}} onPress = {(e) => {}}>
								<Text style={{color:Colors.Light, fontSize:12}}>Wallet 1 (0xDF...DFD)</Text> 
							</TouchableOpacity>
							<TouchableOpacity style={{...styles.menu}} onPress = {(e) => {}}>
								<Text style={{color:Colors.Light, fontSize:12}}>Wallet 1 (0xDF...DFD)</Text> 
							</TouchableOpacity>
							<TouchableOpacity style={{...styles.menu}} onPress = {(e) => {}}>
								<Text style={{color:Colors.Light, fontSize:12}}>Wallet 1 (0xDF...DFD)</Text> 
							</TouchableOpacity>
							<TouchableOpacity style={{...styles.menu}} onPress = {(e) => {}}>
								<Text style={{color:Colors.Light, fontSize:12}}>Wallet 1 (0xDF...DFD)</Text> 
							</TouchableOpacity>
							<View style={{borderTopColor:Colors.LightDark, borderTopWidth:1}}></View>
							<TouchableOpacity style={{...styles.menu}} onPress = {(e) => {}}>
								<Text style={{color:Colors.Light, fontSize:12}}>Add / Connect Wallet</Text> 
							</TouchableOpacity>
							<TouchableOpacity style={styles.menu} onPress = {(e) => {updateStatus({showMenu: false}); props.navigation?.navigate('AuthLogin')}}>
								<Text style={{color:Colors.Light, fontSize:12}}>Lock Wallet</Text> 
							</TouchableOpacity>
						</View>
					</View>
				)
			}
		</View>
	)
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
	menu: {
		padding: 10
	},
	closebtn: {
		padding: 5,
		margin: 3,
		fontSize: 30,
		position: 'absolute',
		top: 5,
		right: 3
	},
	sidemenu: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: w(100),
		height: h(100),
		backgroundColor: 'rgba(0,0,0, 0.8)',
		zIndex: 1000
	},
	menubar: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: w(50),
		height: h(100),
		backgroundColor: 'rgba(0,0,0, 1)',
		zIndex: 1001,
		padding: 10,
		borderColor: Colors.LightDark,
		borderRightWidth: 1
	},
	lighttext: {
		...gstyle.t,
		color: Colors.Light
	},
	darktext: {
		...gstyle.t,
		color: Colors.LightDark,
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
		padding: 10,
		paddingTop: 20,
		backgroundColor: Colors.Dark,
		borderColor: Colors.LightDark,
		borderBottomWidth: 0.7
	}
});

export default Layout;