import { useSelector, useDispatch}	from 'react-redux';
import Slice from './reducer';
import errors from './config/errors.json' ;
import * as Clipboard from 'expo-clipboard';
import { JSHmac,  CONSTANTS } from "react-native-hash";

export const now = () => Math.round(new Date().getTime()/1000) 
export const N = (val:string|number, p:number=6) => isNaN(Number(val)) ? 0 : Math.round(Number(val) * 10 ** p) / (10 ** p)
export const NF = (num:number,p:number=2) => num.toLocaleString('en', {maximumFractionDigits:p});

export const getError = (code:number) => errors[code] || 'Unknown error';
export const validateEmail = (email:string):boolean =>email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)!==null;
export const validateUsername = (username:string):boolean => /^[a-zA-Z0-9]{3,20}$/.test(username);
export const copyToClipboard =  (text:string) => {
	Clipboard.setString(text)
}

const REACT_APP_SECRET = "neon-wallet-secret";

export const hmac = async (plain:string):Promise<string> => {
	try {
		return await JSHmac(plain, REACT_APP_SECRET, CONSTANTS.HmacAlgorithms.HmacMD5)
	} catch (error) {
		console.log(error)
	}
	return ""
}

export const showToast = async (msg:string, msg2:string, type="error") => {
	if(msg.length > 30 ) msg = msg.substring(0, 25)+"...";
	if(msg2.length > 45 ) msg2 = msg2.substring(0, 40)+"...";

}
const useStore = ():UseStoreTypes => {
	const G = useSelector((state:StoreTypes)=>state)
	const L = G.L
	const dispatch = useDispatch()
	const update = (payload:{[key:string]:any}) => dispatch(Slice.actions.update(payload))
	const T = (key:string, args?:{[key:string]:string|number}|string|number):string => {
		let text = L[key]
		if (text===undefined) throw new Error('Undefined lang key[' + key + ']')
		if (typeof args==='string' || typeof args==='number') {
			text = text.replace(/\{\w+\}/, String(args))
		} else {
			for(let k in args) text = text.replace(new RegExp('{'+k+'}', 'g'), String(args[k]))
		}
		return text
	}
	const call = async (url:string, params?:any):Promise<ServerResponse|null> => { 
		try { 
			const result = await fetch( url, { method: 'POST', headers:{'content-type':'application/json'}, body:(params? JSON.stringify(params): null)});
			return await result.json();
		} catch (error) {
			console.log(error)
		}
		return null
	} 
	return {...G, T, call, update};
}

export default useStore
