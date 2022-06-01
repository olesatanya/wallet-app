import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import { Colors, w } from './Theme';
import Icons from '../components/Icon'
import Wallet from './wallet/Index'
import Collection from './collection/Index'
import Recent from './recent/Index'
import Setting from './setting/Index'

const Tab = createMaterialBottomTabNavigator();
const WalletStack = createStackNavigator();
const CollectionStack = createStackNavigator();
const RecentStack = createStackNavigator();
const SettingStack = createStackNavigator();

const WalletStackNavigator = () => {
	return (
			<WalletStack.Navigator  screenOptions={{headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}} initialRouteName={'Wallet_Home'}>
				<WalletStack.Screen name="Wallet_Home" component={Wallet} />
			</WalletStack.Navigator>
	)
}
const CollectionStackNavigator = () => {
	return (
			<CollectionStack.Navigator  screenOptions={{headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}} initialRouteName={'Collection_Home'}>
				<CollectionStack.Screen name="Collection_Home" component={Collection} />
			</CollectionStack.Navigator>
	)
}
const RecentStackNavigator = () => {
	return (
			<RecentStack.Navigator  screenOptions={{headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}} initialRouteName={'Recent_Home'}>
				<RecentStack.Screen name="Recent_Home" component={Recent} />
			</RecentStack.Navigator>
	)
}
const SettingStackNavigator = () => {
	return (
			<SettingStack.Navigator  screenOptions={{headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}} initialRouteName={'Setting_Home'}>
				<SettingStack.Screen name="Setting_Home" component={Setting} />
			</SettingStack.Navigator>
	)
}
function Index() {
	return (
		<Tab.Navigator initialRouteName='Wallet' labeled={false}   activeColor= {Colors.Light} inactiveColor= {Colors.Primary} barStyle={{ backgroundColor: "rgba(0, 0, 0, 0.9)"}} > 
			 <Tab.Screen
				name="Wallet"
				options={{   
					tabBarIcon: ({color}) => (
						<Icons.Wallet color={color} width={w(6)} height={w(6)} />  
					) 
				}}
				component={WalletStackNavigator}
			/>
			 <Tab.Screen
				name="Collection"
				options={{   
					tabBarIcon: ({color}) => (
						<Icons.List color={color} width={w(6)} height={w(6)} />  
					) 
				}}
				component={CollectionStackNavigator}
			/>
			<Tab.Screen
			   name="Recent"
			   options={{   
				   tabBarIcon: ({color}) => (
					   <Icons.Recent color={color} width={w(6)} height={w(6)} />  
				   ) 
			   }}
			   component={RecentStackNavigator}
		   />
		   <Tab.Screen
			  name="Setting"
			  options={{   
				  tabBarIcon: ({color}) => (
					  <Icons.Setting color={color} width={w(6)} height={w(6)} />  
				  ) 
			  }}
			  component={SettingStackNavigator}
		  />
		</Tab.Navigator>
	);
}

export default Index