import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import { ethereumTestnet, ethereumMainnet } from '../lib/Networks';
import { openSea } from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: ethereumTestnet,
  mainnet: ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'Pawsome',
  tokenName: 'The Pawsome Club',
  tokenSymbol: 'Pawsome',
  hiddenMetadataUri: 'ipfs://QmRtJdEPEJmdVkSznarGaReN5KKeWniPRpRE4DRMykNnRs/hidden.json',
  maxSupply: 10101,
  whitelistSale: {
    price: 0.15,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.15,
    maxMintAmountPerTx: 5,
  },
  publicSale: {
    price: 0.15,
    maxMintAmountPerTx: 10,
  },
  contractAddress: null,
  marketplaceIdentifier: 'The Pawsome Club',
  marketplaceConfig: openSea,
  whitelistAddresses: whitelistAddresses,
};

export default CollectionConfig;
