// https://eth-goerli.g.alchemy.com/v2/AOi6FGts01_KuNtNtNsXYX55E3WpegCR

require("@nomicfoundation/hardhat-toolbox");
require('@nomiclabs/hardhat-waffle');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
      goerli: {
          url: 'https://eth-goerli.g.alchemy.com/v2/AOi6FGts01_KuNtNtNsXYX55E3WpegCR',
          accounts: ['e1f4856662f331496d14e425d06492868f7d4ab5353d5bd6e349d0fbcd93f8c9']
      }
  }
};
