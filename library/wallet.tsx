
import Web3 from 'web3'

// import bip39 from 'react-native-bip39'
// import { randomBytes } from 'react-native-randombytes'

const createWallet = async () => {
	const web3 = new Web3();
	// const newWallet = web3.eth.accounts.wallet.create(2);
	// return await bip39.generateMnemonic(256) 
	// const newAccount = newWallet[0];
	// return mnemonic
	try {
		// const { mnemonic, seed } = await TrustWalletCore.createWallet(128, "");
		// return await bip39.generateMnemonic(256)

		// const rand = randomBytes(4)
		// randomBytes(4, (err, bytes) => {
		// console.log(bytes.toString('hex'))
		return 'hello'
		// })
	  } catch(e) {
		  console.log(e)
		return false
	  }
}

export default {
	createWallet
}