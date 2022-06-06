import fs from 'fs'

export const setLog = async (type: string, msg: string) => {
	const path = "../errror.log";
	await fs.appendFileSync(path, type + "  :   " + msg);
}