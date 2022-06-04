import React from 'react'
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator,  } from '@react-navigation/native-stack';
import {configureStore} from '@reduxjs/toolkit';
import 'react-native-gesture-handler';	
import './global'
import Slice from './reducer'
import Index from './pages/Index'
import AuthHome from './pages/auth/Home'
import AuthNew from './pages/auth/New'
import AuthShowphrase from './pages/auth/ShowPhrase'
import AuthConfirmPhrase from './pages/auth/ConfirmPhrase'
import AuthImport from './pages/auth/Import'
import AuthDone from './pages/auth/Done'
import AuthLogin from './pages/auth/Login'

const store = configureStore({reducer: Slice.reducer});
const Stack = createNativeStackNavigator();

const AppContainer = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator  initialRouteName={'AuthHome'}  screenOptions={{headerShown: false, animation:'slide_from_right'}}>
				<Stack.Screen name="Index" component={Index} />	
				<Stack.Screen name="AuthHome" component={AuthHome} />
				<Stack.Screen name="AuthNew" component={AuthNew} />
				<Stack.Screen name="AuthShowphrase" component={AuthShowphrase} />
				<Stack.Screen name="AuthConfirmphrase" component={AuthConfirmPhrase} />
				<Stack.Screen name="AuthImport" component={AuthImport} />
				<Stack.Screen name="AuthDone" component={AuthDone} />
				<Stack.Screen name="AuthLogin" component={AuthLogin} />
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
