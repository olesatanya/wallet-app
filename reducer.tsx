import { createSlice } from '@reduxjs/toolkit'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import DefaultNetworks from './config/networks.json'
const locales = {
    "en-US": require('./locales/en-US.json'),
    "zh-CN": require('./locales/zh-CN.json'),
}
const lang = 'en-US';
const appKey = 'neon-store-1.0';

var initialState: StoreTypes = {
	lang,
    L: locales[lang],
	currentAddress: '',
	currentName: '',
	currentPhrase: '',
	currentPublicKey: '',
	currentPrivateKey: '',
	updated: 0, 
	loading: false,
	locked: false,
	network: '',
	chainId: 1
} 

export const storeData = async (value:any) => {
	console.log(value)
	return AsyncStorage.setItem(appKey, JSON.stringify(value)) 
}

const getData = async () => {
	// try {
	// 	const buf = await AsyncStorage.getItem(appKey);
	// 	if (buf) {
	// 		const json = JSON.parse(buf)
	// 		for(let k in json) {
	// 			if (initialState[k] !== undefined) {
	// 				initialState[k] = json[k]
	// 			}
	// 		}
	// 	}
	// } catch (err) {
	// 	console.log(err)
	// }
	// console.log(initialState)
	// return initialState
	try {
		const buf = await AsyncStorage.getItem(appKey)
		console.log(buf)
		if (buf) {
			const json = JSON.parse(buf)
			return json;
		}
	} catch (err) { 
		console.log(err) 
	}
	return initialState;
}

(async  function (){
	const v = await getData()
	initialState = {...DefaultNetworks, ...v};
	return v;
})()

export default createSlice({
	name: 'neon-wallet-app',
	initialState: async () => {return {"a":"b"}},
	reducers: {
		update: (state:any, action:any) => {
			for (const k in action.payload) {
				if (state[k] === undefined) new Error('🦊 undefined account item') 
				state[k] = action.payload[k]
			}
			storeData(state)
		}
	}
})
