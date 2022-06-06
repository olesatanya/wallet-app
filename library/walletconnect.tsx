import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import WalletConnect from "@walletconnect/client";
import { BarCodeScanner } from 'expo-barcode-scanner';
export default function () {
  var connector:WalletConnect;
	const [scaned, setScaned] = React.useState(false);
  const [uri, setUri] = React.useState("");
  const connectWallet = async () => {
    console.log(uri)
   connector = new WalletConnect({uri:uri, bridge:'https://bridge.walletconnect.org'});
     if (!connector.connected) {
		  await connector.createSession();
		} 
    subscribeToEvents();
  };


  const approveRequest = ()=> {
    console.log('approve request')
    connector.approveRequest({
      id: 1,
      result: "0x41791102999c339c844880b23950704cc43aa840f3739e365323cda4dfa89e7a"
    });
  }
  const rejectRequest = ()=> {
    connector.rejectRequest({
      id: 1,                                 
      error: {
        code: 3,
        message: "OPTIONAL_ERROR_MESSAGE"    
      }
    });
  }

  const approveSession = () => {
    console.log("ACTION", "approveSession");
    const address = '0x139F23D801939123A4eBA0d1E9791AA3Fc495eb3'
    const chainId = 4;
    if (connector) {
      connector.approveSession({ chainId, accounts: [address] });
    }
  };

	const subscribeToEvents = () => {
			connector?.on("session_request", (error, payload) => {
          if (error) {
            throw error;
          }
          const { peerMeta } = payload.params[0];
          console.log(peerMeta)
          approveSession()
        });
        
        connector?.on("session_update", error => {
          console.log("EVENT", "session_update");
          if (error) {
            throw error;
          }
        });
        connector?.on("call_request", async (error, payload) => {
          console.log('call_request')
          console.log(payload);
          approveRequest()
        })
        connector?.on("connect", (error, payload) => {
          console.log('connect', payload)
        });
        connector?.on("disconnect", (error, payload) => {
          console.log('disconnect', payload)
        })
	}
	
  
  React.useEffect(() => {
		(async () => {
		  const { status } = await BarCodeScanner.requestPermissionsAsync();
		//   updateStatus({hasPermission:status==='granted'})
		  console.log(status)
		})();
	  }, []);


	  const handleBarCodeScanned = ( data:any) => {
       var data = data['data']
       setScaned(true)
      
       setUri(data)
      };

    
  return (
    <View style={styles.container}>
     
        {/* {scaned ?
          <>
           <Text style={styles.title}>Tab One</Text>
              <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
              {!connector.connected && (
                <TouchableOpacity onPress={connectWallet} style={styles.buttonStyle}>
                  <Text style={styles.buttonTextStyle}>Connect a Wallet</Text>
                </TouchableOpacity>
              )}
              {!!connector.connected && (
                <>
                  <Text>{shortenAddress(connector.accounts[0])}</Text>
                  <TouchableOpacity onPress={killSession} style={styles.buttonStyle}>
                    <Text style={styles.buttonTextStyle}>Log out</Text>
                  </TouchableOpacity>
                </>
              )}
          </>: */}
            {!scaned&&
              (<BarCodeScanner
                onBarCodeScanned={scaned ? undefined : handleBarCodeScanned} 
                style={{borderColor:'white', width:100, height:100, position:'absolute', top:0, left:0}} 
              />)
            }
            {
              scaned && (
                <TouchableOpacity onPress={connectWallet} style={styles.buttonStyle}>
                  <Text style={styles.buttonTextStyle}>connectWallet</Text>
              </TouchableOpacity>
              )
            }
            {/* <TouchableOpacity onPress={()=>{createWallet()}}><Text>new Wallet</Text></TouchableOpacity> */}
          {/* } */}
            {/* <Wallet size={100} color={''}/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  buttonStyle: {
    backgroundColor: "#3399FF",
    borderWidth: 0,
    color: "#FFFFFF",
    borderColor: "#3399FF",
    height: 40,
    alignItems: "center",
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    fontWeight: "600",
  },
});