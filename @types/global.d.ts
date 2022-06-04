
declare interface ServerResponse {
	result?: any
	error?: number
}
declare interface ResultType {
    err: string,
    result: string
}

interface StoreTypes {
	lang: string
    L: {[lang:string]:any}
	updated:number
	loading?:boolean
    currentAccount: string
    currentName: string
    currentAccountSeed: string
    currentAccountKey: string
    network: string
    chainId: number
}
interface UseStoreTypes extends StoreTypes {
    T(key:string, args?:{[key:string]:string|number}|string|number):string
    update(payload:{[key:string]:any})
}

declare module '@env' {
    export const REACT_APP_PROXY: string
}