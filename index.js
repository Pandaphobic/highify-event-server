var ethers = require("ethers");
var { config } = require("./config");
var dealerzAbi = require("./dealerz-abi.json");

const rpc_url = config.networks.fantom.rpc_url;
const ftmProvider = new ethers.providers.JsonRpcProvider(rpc_url);
const nftContract = new ethers.Contract(
  config.contracts["Dealerz-Testnet"].address,
  dealerzAbi,
  ftmProvider
);

// const filter = {
//   address: "0x196165FCE5b8acb582AF17E8d11887953c4a182c",
//   topics: [ethers.utils.id("highify(uint256,uint256[])")],
// };
// ftmProvider.on(filter, (from, _effects, _tokenId, event) => {
//   console.log(from);
//   console.log(_effects);
//   console.log(_tokenId);
//   console.log(event.block);
// });

nftContract.on("Highify", (from, effects, tokenId, event) => {
  console.log(from);
  console.log(effects.toString());
  console.log(tokenId.toString());
  console.log(event.blockNumber);
});

console.log("Server Running ⚡");
