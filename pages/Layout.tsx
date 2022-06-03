import React from "react";
import {View, StyleSheet, TouchableOpacity, Text, Touchable} from "react-native"; 
import Spinner from 'react-native-loading-spinner-overlay';
import Icons from '../components/Icon'
import {Colors,  w, gstyle} from './Theme'; 
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
		</View>
	)
}

const styles = StyleSheet.create({
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