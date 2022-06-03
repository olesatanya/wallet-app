import { QRCode } from 'react-native-custom-qr-codes-expo';

interface Props{
	code: string
}
const createQRCode = ({ code }:Props) => {
	return (
        <QRCode content={code} codeStyle='square' outerEyeStyle='square' innerEyeStyle='square' size={100} color="white" backgroundColor="black" />	
	)
}
export default {
	createQRCode
}