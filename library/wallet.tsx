
import "react-native-get-random-values"
import "@ethersproject/shims"
import { Provider } from "ethers/providers";
import { Contract } from "ethers";
const ethers = require('ethers');
var bip39 = require('bip39');
var crypto = require('crypto');
import ABI from '../config/abi.json'

export const createMnemonic = async () => {
	var  randomBytes = crypto.randomBytes(16) 
	var mnemonic = await bip39.entropyToMnemonic(randomBytes.toString('hex'))
	console.log(mnemonic) 
	return mnemonic;
}

export const fromMnemonic = async (mnemonic: string) => {
	const wallet = ethers.Wallet.fromMnemonic(mnemonic);
	console.log(wallet.address)
	console.log(wallet)
	return {address: wallet.address, privatekey: wallet.privateKey, publickey:wallet.publicKey}
}

export const createWallet = async () => {	
	return await ethers.createRandom();
}

export const getProvider = async (rpc: string) => {
	return await new ethers.providers.JsonRpcProvider(rpc);
}

export const getContract = async (provider: Provider, abiType: boolean, address: string) => {
	let abi = ABI.ERC20;
	if(abiType === false) {
		abi = ABI.ERC721;
	}
	return await new ethers.Contract(address, abi, provider)
}

export const sendTransaction = async (contract: Contract, amount: string, nativeToken: boolean) => {
	if(nativeToken)	{

	} else {
		
	}
}