import React from 'react'
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator,  } from '@react-navigation/native-stack';
import {configureStore} from '@reduxjs/toolkit';
import 'react-native-gesture-handler';	
import Slice from './reducer'

import Index from './pages/Index'
import Auth from './pages/auth/Index'

const store = configureStore({reducer: Slice.reducer});
const Stack = createNativeStackNavigator();

const AppContainer = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator  initialRouteName={'Index'}  screenOptions={{headerShown: false, animation:'slide_from_right'}}>
				<Stack.Screen name="Index" component={Index} />	
				<Stack.Screen name="Auth" component={Auth} />			
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default function App() {
	return (
		<Provider store={store}>
			<AppContainer />
		</Provider>
	)
}
