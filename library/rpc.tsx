import axios from 'axios'
import {setLog} from './error'

export const callRpc = async(rpc: string, params?:any)=> {
	const response = await axios.post(rpc, params, {headers: {'Content-Type': 'application/json'}})
	if (response && response.data) return response.data
	return null
}

const checkNativeTokenBalances = async (as: string[]) => {
	try {
		const count = as.length
		let params = [] as RpcRequestType[]
		let accounts = [] as Array<{address:string, value:string}>
		let k = 0
		for (let i of as) {
			params.push({jsonrpc: "2.0", method: "eth_getBalance", params: [i, "latest"], id: ++k})
		}
		const rows = await callRpc(params)
		if (rows && Array.isArray(rows) && rows.length===count) {
			for(let k = 0; k < count; k++) {
				if (rows[k]?.result) {
					let value = B(rows[k].result).toHexString()
					if (value==="0x0") value = "0"
					accounts.push({address:as[k], value})
				}
			}
		}
		return accounts
	} catch (error) {
		setLog("checkNativeTokenBalances", `\tchecking account occurred error`, true)
	}
}

const checkTokenBalances = async (as: Array<[address: string, token: string]>, ts: {[token: string]:ContractType}) => {
	const limit = 1000
	// const secondLimit = 100
	const tokens = [] as Array<{address: string, token: string, value: string}>

	const contracts = {} as {[token:string]: Contract}
	for (const token in ts) {
		if (ts[token]==="ERC20") {
			contracts[token] = new Contract(token, abiErc20)
		} else if (ts[token]==="ERC721") {
			contracts[token] = new Contract(token, abiErc721)
		} else if (ts[token]==="ERC1155") {
			contracts[token] = new Contract(token, abiErc1155)
		}
	}

	const count = as.length
	let start = 0, end = 0

	while (start < count) {
		end = start + limit
		if (end > count) end = count
		const params = [] as RpcRequestType[]
		for(let k = start; k < end; k++) {
			const [address, token] = as[k]
			params.push({jsonrpc: "2.0", method: "eth_call", params: [{to: token, data: `0x70a08231000000000000000000000000${address.slice(2)}`}, "latest"],"id": k++});
		}
		try {
			const rows = await callRpc(params)
			if (rows && Array.isArray(rows) && rows.length===params.length) {
				for(let k = start; k < end; k++) {
					if (rows[k - start]?.result) {
						const [address, token] = as[k]
						let value = B(rows[k - start].result).toHexString()
						if (value==="0x00") value = "0"
						tokens.push({address, token, value})
					}
				}
			}
		} catch (error) {
			console.log("checkTokenBalances")
		}
		start = end
	}
	return tokens
}