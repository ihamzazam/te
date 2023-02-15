const { ethers, upgrades } = require("hardhat");
const fs = require('fs');

async function main() {
  const BoxV1 = await ethers.getContractFactory("BoxV1");
  const proxy = await upgrades.deployProxy(BoxV1, [12, 12]);
  await proxy.deployed();

  console.log('proxy address: ' + proxy.address);
  fs.writeFileSync('proxy_address.txt', proxy.address);
}

main();
