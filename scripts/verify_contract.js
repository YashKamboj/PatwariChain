const { run } = require("hardhat");
 
async function main() {
//add the contract address that you deployed in the prev steps
  const contractAddress = "0xE8c6606b685fc890DAfA7BDc09e58Ac0202EAff6"; //line 5
 
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: [],
      contract: "contracts/LandNFT.sol:LandNFT",
    });
  } catch (error) {
    if (error.message.toLowerCase().includes("already verified")) {
      console.log("Already verified!");
    } else {
      console.log(error);
    }
  }
}
 
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });