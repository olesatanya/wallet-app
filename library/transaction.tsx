import fs from 'fs'


const writeErr = async (type: string, msg: string) => {
    const path = "../errror.log";
    await fs.appendFileSync(path, type + "  :   " + msg);
}

export default {
    writeErr
}