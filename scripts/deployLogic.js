const { ethers } = require("hardhat");

async function main() {
  // Deploy Implementation Contract
  const Box = await ethers.getContractFactory("BoxV1");
  const box = await Box.deploy();
  await box.deployed();

  console.log("Contract deployed to:", box.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
});
