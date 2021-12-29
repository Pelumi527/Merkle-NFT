// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const TheoNFT = await hre.ethers.getContractFactory("TheoNFT");
  const theoNFT = await TheoNFT.deploy("TheoNFTV4","TNFTV4","https://jsonkeeper.com/b/GA7O", "https://gateway.pinata.cloud/ipfs/QmS3MfSzwLARMyDyQjbTy89jNGfYFTrRKzEbttmsiULLNP/");

  await theoNFT.deployed();

  console.log("TheoNFT deployed to:", theoNFT.address);
  const setPresale =await theoNFT.startPresale();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
