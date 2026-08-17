const { ethers } = require("hardhat");

async function main() {
    const [owner] = await ethers.getSigners();

    console.log("Deploying TestUSDC...");
    console.log("Owner:", owner.address);

    const TestUSDC = await ethers.getContractFactory("TestUSDC");

    const token = await TestUSDC.deploy();

    await token.waitForDeployment();

    const address = await token.getAddress();

    console.log("TestUSDC deployed to:", address);

    const balance = await token.balanceOf(owner.address);

    console.log(
        "Owner TestUSDC balance:",
        ethers.formatUnits(balance, 6)
    );
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });