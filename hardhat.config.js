require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL || "";
const POLYGON_RPC_URL = process.env.POLYGON_RPC_URL || "https://polygon-rpc.com";
const PRIVATE_KEY     = process.env.PRIVATE_KEY     || "0x0000000000000000000000000000000000000000000000000000000000000001";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    // Local Hardhat node (npx hardhat node)
    localhost: {
      url: "http://127.0.0.1:8545",
    },
    // Sepolia testnet
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: PRIVATE_KEY !== "0x0000000000000000000000000000000000000000000000000000000000000001"
        ? [PRIVATE_KEY]
        : [],
      chainId: 11155111,
    },
    // Polygon PoS Mainnet
    polygon: {
      url: POLYGON_RPC_URL,
      accounts: PRIVATE_KEY !== "0x0000000000000000000000000000000000000000000000000000000000000001"
        ? [PRIVATE_KEY]
        : [],
      chainId: 137,
    },
  },
};

