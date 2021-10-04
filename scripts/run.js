const main = async () => {
  const nftContractFactory = await hre.ethers.getContractFactory("BillBoard");
  const nftContract = await nftContractFactory.deploy();
  await nftContract.deployed();
  console.log("Contract deployed to:", nftContract.address);

  // first minting
  let txn = await nftContract.updateBillboard(
    "first line",
    "second line",
    "third line",
    { value: "300000000000000" }
  );
  await txn.wait();
  let uri = await nftContract.tokenURI(1);
  console.log("Minted NFT#1", uri);
  // second minting
  //   txn = await nftContract.updateBillboard(
  //     "should not",
  //     "be updated",
  //     "third line",
  //     { value: "200000000000000" }
  //   );
  //   await txn.wait();
  //   uri = await nftContract.tokenURI(1);
  //   console.log("Minted NFT#2", uri);
  // third minting
  txn = await nftContract.updateBillboard(
    "new line",
    "second line",
    "updated line",
    { value: "400000000000000" }
  );
  await txn.wait();
  uri = await nftContract.tokenURI(1);
  console.log("Minted NFT#3", uri);
  // txn = await nftContract.makeAnEpicNFT();
  // await txn.wait();
  // console.log("Minted NFT#2");
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
