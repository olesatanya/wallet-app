
const createWallet = async () => {
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