
import "react-native-get-random-values"
import "@ethersproject/shims"
import { Provider } from "ethers/providers";
import { Contract, Wallet } from "ethers";
const ethers = require('ethers');
var bip39 = require('bip39');
var crypto = require('crypto');

import ABI from '../config/abi.json'
import {NF} from '../useStore'

export const createMnemonic = async () => {
	var randomBytes = crypto.randomBytes(16) 
	var mnemonic = await bip39.entropyToMnemonic(randomBytes.toString('hex'))
	return mnemonic;
}

export const fromMnemonic = async (mnemonic: string) => {
	const wallet = await ethers.Wallet.fromMnemonic(mnemonic);
	return {address: wallet.address, privatekey: wallet.privateKey, publickey:wallet.publicKey}
}

export const createWallet = async () => {	
	return await ethers.createRandom();
}

export const getWalletFromPrivatekey = async (privateKey: string) => {
	let wallet = new ethers.Wallet(privateKey);
	return wallet;
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

export const getNativeBalance = async (provider: Provider) => {
	return await provider.getBalance("ethers.eth");
}

export const getTokenInfo = async (contract: Contract) => {
	const name = await contract.name();
	const symbol = await contract.symbol();
	return {name, symbol}
}

export const sendTransaction = async (nativeToken: boolean, wallet: Wallet, to: string,  amount: string,  contract: Contract) => {
	const value = ethers.utils.parseEther(amount);
	if(nativeToken){
		const tx = await wallet.sendTransaction({to, value});
		return tx;
	} else {
		const tx = await contract.transfer(to, value);
		return tx;
	}
}

export const toBigNum = (value: string,  d:number) => {
	return ethers.utils.parseUnits(Number(value).toFixed(d), d);
}

export const fromBigNum = (value: string, d: number) => {
	return parseFloat(ethers.utils.formatUnits(value, d));
}

export const toBalance = (value: string) => {
	var f = parseFloat(ethers.utils.formatEther(value));
	if(f<0) { f= 0; }
	return NF(f, 4);
}