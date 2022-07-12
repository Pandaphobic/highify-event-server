var ethers = require("ethers");
var { config } = require("./config");
var dealerzAbi = require("./dealerz-abi.json");

const url = config.providers.fantom.rpc_url;
const ftmProvider = new ethers.providers.JsonRpcProvider(url);
const nftContract = new ethers.Contract(
  config.contracts["Dealerz-Testnet"].address,
  dealerzAbi,
  ftmProvider
);

nftContract.on("Highify", async (_from, _effects, _tokenId) => {
  console.log(_from, _effects, _tokenId);
});

console.log("Running ⚡");
