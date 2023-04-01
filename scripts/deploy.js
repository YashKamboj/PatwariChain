const { ethers } = require("hardhat");

async function main() {
  
  const LandNFT = await ethers.getContractFactory("LandNFT");
 
  const land = await LandNFT.deploy(); 
  await land.deployed();
  console.log("Contract deployed to address:", land.address);
}

main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
