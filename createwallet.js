// dependencias 
const bip32 = require('bip32')
const bip39 = require('bip39');
const { bitcoin } = require('bitcoinjs-lib/src/networks');

// definir a rede
// bitcoin - rede princiapl - mainet
//testnet - rede de teste - testnet
const netwrok = bitcoin.networks.testnet

// derivacao de carteiras HD
const path = 'm/49\'/1\'/0\'/0';

// criando o mnemonic para a seed (palavras da senha)
let mnemonic = bip39.generateMnemonic()
const seed = bip39.mnemonicToSeedSync(mnemonic)

// criando a raiz da carteira HD
let root = bip32.fromSeed(seed, network)

// criando uma conta - par pvt-pub keys
let account = root.derivePath(path)
let node = account.derive(0).derive(0)

let btcAddress = bitcoin.payments.p2pkh ({
    pubkey: Node.publickey,
    network: netwrok,
}). address 

console.log("carteira gerada")
console.log("endereco: ", btcAddress)
console.log("Chave privada:", node.toWIF())
console.log("Seed", mnemonic)
