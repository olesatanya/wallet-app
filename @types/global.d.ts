
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
	locked?:boolean
	currentAddress: string
	currentName: string
	currentPhrase: string
	currentPrivateKey: string
	currentPublicKey: string
	network: string
	chainId: number
	addressBook?: 
	[
		{
			address: string
			name?: string
			created?: number
		}
	]
	walletconnectHistory?: [
		{
			name: string
			url: string
			icon: string
			description?: string
			created?: number
		}
	]
	wallets?: Array<
		{
			name: string
			address: string
			privatekey: string
			publickey: string
			phrase: string
			balance?: number
			created?: number
		}
	>
	networks?: [
		{
			chainId: number
			name: string
			rpc: string
			symbol: string
			decimals?: number
			explorer?: string
		}
	]
	tokens?: [
		{
			chainId: number
			address: string
			name: string
			symbol: string
			decimals?: number
			balance?: number
			tokenIds?: [
				{
					tokenId: string
					uri: string
					name: string
					image: string
					description?: string
					external_url?: string
					attributes?: [
						{
							type: string
							value: string | number
						}
					]
					balance?: number
				}
			]
		}
	]
}
interface UseStoreTypes extends StoreTypes {
	T(key:string, args?:{[key:string]:string|number}|string|number):string
	update(payload:{[key:string]:any})
	call(url:string, params?:any):Promise<ServerResponse|null> 
}

declare module '@env' {
	export const REACT_APP_PROXY: string
}