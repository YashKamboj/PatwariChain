const { run } = require("hardhat");
 
async function main() {
//add the contract address that you deployed in the prev steps
  const contractAddress = "0x483d1C2184C78f93D48906Aa603cA3A3Eed8B43E"; //line 5
 
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