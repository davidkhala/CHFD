# Network Configuration – 8%

- Create and use connection profiles

```shell script
connection.yaml
```
- Instantiate and connect to a gateway
```shell script
export mspId=Org1MSP;
export label=User1@org1.example.com; 
export walletPath="./"
export certPath="../crypto-config/peerOrganizations/org1.example.com/users/User1@org1.example.com/msp/signcerts/User1@org1.example.com-cert.pem"
export keyPath="../crypto-config/peerOrganizations/org1.example.com/users/User1@org1.example.com/msp/keystore/740efb1655d71c3984062726b31361c151463b13979271b86e41d5a3dc3594de_sk" 
connectionProfile=connection.yaml action=connectGateway node index.js
```
- Access networks and contracts
```shell script
export mspId=Org1MSP;
export label=User1@org1.example.com; 
export walletPath="./"
export certPath="../crypto-config/peerOrganizations/org1.example.com/users/User1@org1.example.com/msp/signcerts/User1@org1.example.com-cert.pem"
export keyPath="../crypto-config/peerOrganizations/org1.example.com/users/User1@org1.example.com/msp/keystore/740efb1655d71c3984062726b31361c151463b13979271b86e41d5a3dc3594de_sk"
export connectionProfile=connection.yaml
channelName=mychannel action=getNetworks node index.js
```