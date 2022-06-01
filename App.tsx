import React from 'react'
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator,  } from '@react-navigation/native-stack';
import {configureStore} from '@reduxjs/toolkit';
import 'react-native-gesture-handler';	
import Slice from './reducer'

import Page from './pages/home'

const store = configureStore({reducer: Slice.reducer});
const Stack = createNativeStackNavigator();


const AppContainer = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator  initialRouteName={'Index'}  screenOptions={{headerShown: false, animation:'slide_from_right'}}>
				<Stack.Screen name="Index" component={Index} />	
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default function App() {
  return <Page></Page>
}
