// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TaskHash {
    mapping(address => mapping(bytes32 => bool)) private taskHashes;
    
    event TaskHashStored(address indexed user, bytes32 taskHash);
    event TaskHashVerified(address indexed user, bytes32 taskHash, bool exists);
    
    function storeTaskHash(bytes32 _taskHash) public {
        require(_taskHash != bytes32(0), "Invalid task hash");
        taskHashes[msg.sender][_taskHash] = true;
        emit TaskHashStored(msg.sender, _taskHash);
    }
    
    function verifyTaskHash(bytes32 _taskHash) public view returns (bool) {
        return taskHashes[msg.sender][_taskHash];
    }
    
    function batchStoreTaskHashes(bytes32[] memory _taskHashes) public {
        for (uint i = 0; i < _taskHashes.length; i++) {
            require(_taskHashes[i] != bytes32(0), "Invalid task hash");
            taskHashes[msg.sender][_taskHashes[i]] = true;
            emit TaskHashStored(msg.sender, _taskHashes[i]);
        }
    }
} 