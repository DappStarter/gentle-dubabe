require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock other sugar fan rate stereo equip give civil army genuine'; 
let testAccounts = [
"0xe30309385088ccea5889d5b04176b4f14275fc1a7e37cee71831d47120d45019",
"0x5e088556da4258c310d782ecc6cc83f91edec2cb7f6b8a3cb232cdb9bcd5f50e",
"0x0135d4181d917cd7353319a324f179aff1b613ae924e6e06e72dc4cd0b88156e",
"0xc7fc3759d8baca594e2f7d0e08049305850c489a9387921eb008feee48361841",
"0xa19a82fa9eeba626eddc7cf020b30f3551d212256c41208ddf9cf5cf3f57b28a",
"0x6a615e2cfb53b81050c1d1ed7f8af6abe3b257b1134a406d3232d6385838940d",
"0xb6f0c2a3b88e3d1311f4f30e7257cf41a2360f4fc7460e869695b40485f6ab28",
"0x7680de097475dbef69bfb9be64072dce0a14800a1268ea863fd91b7edfb47c09",
"0x967afd1273d204686564cdd711e0481db94476f5531a9e931562e78ebd7e6ee1",
"0xf361f2d02bf43299f36eb91e1405d1b82e1b140687ba5c9985e9c58fdd444d5d"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

