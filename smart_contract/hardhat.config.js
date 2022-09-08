require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/{ALCHEMY_API_KEY}',
      accounts: ['de09ea52190f26eb442eb51d0d42da070e34f24a4187a4b572db72b4599cad80']
    }
  }
};
