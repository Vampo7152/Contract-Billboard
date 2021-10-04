const main = async () => {
  const nftContractFactory = await hre.ethers.getContractFactory("BillBoard");
  const nftContract = await nftContractFactory.deploy();
  await nftContract.deployed();
  console.log("Contract deployed to:", nftContract.address);

  let txn = await nftContract.updateBillboard(
    "This will be",
    "here forever until",
    "you pay more",
    { value: "300000000000000" }
  );
  await txn.wait();
  let uri = await nftContract.tokenURI(1);
  console.log("Minted NFT#1", uri);
};
const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

runMain();
