# Identity Management – 7%

- Instantiate a wallet

```shell script
action=instantiateWallet walletPath=./ node index.js
```

- Import identities to a wallet
```shell script
mspId=Org1MSP label=User1 walletPath="./" certPath="../crypto-config/peerOrganizations/org1.example.com/users/User1@org1.example.com/msp/signcerts/User1@org1.example.com-cert.pem" keyPath="../crypto-config/peerOrganizations/org1.example.com/users/User1@org1.example.com/msp/keystore/740efb1655d71c3984062726b31361c151463b13979271b86e41d5a3dc3594de_sk" action=importIdentities node index.js 
```
- Select and manage identity from a wallet

```shell script
mspId=Org1MSP label=User1 walletPath="./" certPath="../crypto-config/peerOrganizations/org1.example.com/users/User1@org1.example.com/msp/signcerts/User1@org1.example.com-cert.pem" keyPath="../crypto-config/peerOrganizations/org1.example.com/users/User1@org1.example.com/msp/keystore/740efb1655d71c3984062726b31361c151463b13979271b86e41d5a3dc3594de_sk" action=manageIdentity node index.js
```