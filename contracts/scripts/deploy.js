async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const TaskHash = await ethers.getContractFactory("TaskHash");
  const taskHash = await TaskHash.deploy();
  await taskHash.deployed();

  console.log("TaskHash contract deployed to:", taskHash.address);
  return taskHash;
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
