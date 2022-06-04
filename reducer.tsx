import { createSlice } from '@reduxjs/toolkit'; 
import AsyncStorage from '@react-native-async-storage/async-storage';

const locales = {
    "en-US": require('./locales/en-US.json'),
    "zh-CN": require('./locales/zh-CN.json'),
}
const lang = 'en-US';
const appKey = 'neon-store';

var initialState: StoreTypes = {
	lang,
    L: locales[lang],
	currentAccount: '',
	currentAccountSeed: '',
	currentAccountKey: '',
	currentName: '',
	updated: 0, 
	loading: false,
	network: '',
	chainId: 1
} 

export const storeData = async (value:any) => {
	console.log(value)
	return AsyncStorage.setItem(appKey, JSON.stringify(value)) 
}

const getData = async () => {
	try {
		const buf = await AsyncStorage.getItem(appKey)
		const init:any = {};
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
	initialState = v;
})()

export default createSlice({
	name: 'neon-wallet-app',
	initialState,
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
