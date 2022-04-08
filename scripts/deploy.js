async function main() {
    const MyNFT = await ethers.getContractFactory("MyNFT");
  
    // Start deployment, returning a promise that resolves to a contract object
    const myNFT = await MyNFT.deploy();
    console.log("Contract deployed to address:", myNFT.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
/*PS E:\Blockchain\project\NFT> npx hardhat run scripts/deploy.js
Contract deployed to address: 0x7578745DcC530d4F16D797E4a9f8bda3215ed3Be
PS E:\Blockchain\project\NFT> node .\scripts\mint-nft.js
The hash of your transaction is:  0xaf2e25472af63004816249a0a1b634935184a64994eb73b58f449b244f9e6570 
Check Alchemy's Mempool to view the status of your transaction!
PS E:\Blockchain\project\NFT> */