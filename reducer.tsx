import { createSlice } from '@reduxjs/toolkit'; 
const appKey = 'neon-app';
const locales = {
    "en-US": require('./locales/en-US.json'),
    "zh-CN": require('./locales/zh-CN.json'),
}
const lang = 'en-US';
const initialState: StoreTypes = {
	lang,
    L: locales[lang],
	currentPage: '',
	updated: 0, 
	loading: false
} 

export default createSlice({
	name: 'neon-wallet-app',
	initialState,
	reducers: {
		update: (state:any, action) => {
			for (const k in action.payload) {
				if (state[k] === undefined) new Error('🦊 undefined account item')
				state[k] = action.payload[k]
			}
		}
	}
})
