const { ethers, upgrades } = require("hardhat");

// TO DO: Place the address of your proxy here!
const proxyAddress = "0xE677623E0A35255BC81765c7DECcCFF1F684112c";

async function main() {
  const BoxV2 = await ethers.getContractFactory("BoxV2");
  const upgraded = await upgrades.upgradeProxy(proxyAddress, BoxV2);
  console.log((await upgraded.area()).toString());
  console.log((await upgraded.perimeter()).toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
