require('dotenv').config();
require("@nomiclabs/hardhat-waffle");

const {ROPSTEN_PVT_KEY} = process.env;

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    ropsten: {
      url: "https://ropsten.infura.io/v3/5a16e7aafa04408d82a4f0b82a5bd5d9",
      accounts: [`0x${ROPSTEN_PVT_KEY}`]
    },
    hardhat: {
      chainId: 1337
    }
  },
  defaultNetwork: "hardhat"
};
