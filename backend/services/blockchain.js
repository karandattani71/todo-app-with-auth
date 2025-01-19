const Web3 = require("web3");
const TaskHashABI =
  require("../../contracts/artifacts/contracts/TaskHash.sol/TaskHash.json").abi;
require("dotenv").config();

class BlockchainService {
  constructor() {
    this.web3 = new Web3(process.env.MUMBAI_RPC_URL);
    this.contract = new this.web3.eth.Contract(
      TaskHashABI,
      process.env.CONTRACT_ADDRESS
    );
    this.account = this.web3.eth.accounts.privateKeyToAccount(
      process.env.PRIVATE_KEY
    );
    this.web3.eth.accounts.wallet.add(this.account);
  }

  async storeTaskHash(taskHash) {
    try {
      const tx = await this.contract.methods.storeTaskHash(taskHash).send({
        from: this.account.address,
        gas: 200000,
      });
      return tx;
    } catch (error) {
      console.error("Error storing task hash:", error);
      throw error;
    }
  }

  async verifyTaskHash(taskHash) {
    try {
      const exists = await this.contract.methods.verifyTaskHash(taskHash).call({
        from: this.account.address,
      });
      return exists;
    } catch (error) {
      console.error("Error verifying task hash:", error);
      throw error;
    }
  }

  async batchStoreTaskHashes(taskHashes) {
    try {
      const tx = await this.contract.methods
        .batchStoreTaskHashes(taskHashes)
        .send({
          from: this.account.address,
          gas: 500000,
        });
      return tx;
    } catch (error) {
      console.error("Error batch storing task hashes:", error);
      throw error;
    }
  }
}

module.exports = new BlockchainService();
