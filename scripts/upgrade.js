const { ethers } = require("hardhat");
const { upgrades } = require("hardhat");
require('@openzeppelin/hardhat-upgrades');

async function main() {
  const proxyAddress = '0x811f33b3DD0de05A5e0f575C087Bd3E5f673Cbe7';
  console.log(`Original proxy address: ${proxyAddress}`);

  const BoxV2 = await ethers.getContractFactory("BoxV2");
  console.log("Upgrading to BoxV2...");

  const boxV2 = await upgrades.upgradeProxy(proxyAddress, BoxV2);
  console.log(`BoxV2 Proxy address: ${boxV2.address}`);

  const implementationAddress = await upgrades.erc1967.getImplementationAddress(proxyAddress);
  console.log(`Implementation address: ${implementationAddress}`);

  const adminAddress = await upgrades.admin.getInstance();
  console.log("ProxyAdmin :", adminAddress.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
