const { expect } = require("chai");
const { ethers } = require("hardhat");
const utill = ethers.utils;

describe("Greeter", function () {
  it("It should return true", async function () {
   
    const TheoNFT = await hre.ethers.getContractFactory("TheoNFT");
    const theoNFT = await TheoNFT.deploy("TheoNFTV3","TNFTV3","https://jsonkeeper.com/b/GA7O", "https://gateway.pinata.cloud/ipfs/QmS3MfSzwLARMyDyQjbTy89jNGfYFTrRKzEbttmsiULLNP/");
    await theoNFT.deployed();

  
    expect(await theoNFT.verification().to.equal("true"));
  });
});
