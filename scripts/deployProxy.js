const { ethers } = require("hardhat");
const { upgrades } = require("hardhat");

async function main() {
      const boxAddress = "0xdfc66ee2eeE42123e401E6B27d61769E412c9744"; // replace with the address of your Box contract
      const Box = await ethers.getContractFactory("BoxV1");
      const box = await Box.attach(boxAddress);
    
      console.log("Deploying Box proxy...");
      const boxProxy = await upgrades.deployProxy(Box, [42], { initializer: "store" });
      console.log("Contract proxy deployed at:", boxProxy.address);

      // Retrieve the ProxyAdmin contract address
      const adminAddress = await upgrades.admin.getInstance();
      console.log("ProxyAdmin deployed at:", adminAddress.address);


    }
    
    main().catch((error) => {
      console.error(error);
      process.exitCode = 1;
    });
