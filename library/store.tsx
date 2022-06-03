import AsyncStorage from '@react-native-async-storage/async-storage';
import Error from './error'

const setData = async (key: string, value: string) => {
	try {
		await AsyncStorage.setItem(key, value)
		return true;
	} catch (e:any) {	
		Error.writeErr("set store data", e)
		return false;
	}
}
const getData = async (key: string) => {
	try {
		const value = await AsyncStorage.getItem(key)
		return value || null;
	} catch(e: any) {
		Error.writeErr("get store data", e)
		return null;
	}
}
const setObjectData = async (key: string, value: JSON) => {
	try {
		const jsonValue = JSON.stringify(value)
		await AsyncStorage.setItem(key, jsonValue)
		return true;
	} catch (e:any) {	
		Error.writeErr("set store data", e)
		return false;
	}
}
const getObjectData = async (key: string) => {
	try {
		const jsonValue = await AsyncStorage.getItem(key)
		return jsonValue != null ? JSON.parse(jsonValue) : null
	} catch(e: any) {
		Error.writeErr("get store data", e)
		return false;
	}
}	
const removeData = async (key: string) => {
	try {
		await AsyncStorage.removeItem(key)
	} catch (e: any){
		Error.writeErr("remove store data", e)
		return false;
	}
}
const getAllKeys = async () => {
	try {
		const keys = await AsyncStorage.getAllKeys()
		return keys;
	} catch(e: any) {
		Error.writeErr("get all keys", e)
		return [];
	}
}
const getMultiData = async (keys: string[])	=> {
	try {
		const values = await AsyncStorage.multiGet(keys)
		return values;
	} catch(e: any) {
		Error.writeErr("get multi keys", e)
		return [];
	}
}
const removeMultiData = async (keys: string[])	=> {
	try {
		await AsyncStorage.multiRemove(keys)
		return true;
	} catch(e: any) {
		Error.writeErr("remove multi keys", e)
		return false;
	}
}
const clearAll = async () => {
	try {
		await AsyncStorage.clear();
		return true;
	} catch(e: any) {
		Error.writeErr("clear store", e)
		return [];
	}
}

export default {
	getData, setData, getObjectData, setObjectData, removeData, getAllKeys, getMultiData, removeMultiData, clearAll
}