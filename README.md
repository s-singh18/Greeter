# Greeter Smart Contract

## Introduction

This project contains a smart contract called **Greeter**, which serves as a classic introductory example in Ethereum development. The Greeter contract allows users to set and read a friendly greeting message stored on the Ethereum blockchain.

## Contract Specifications

The Greeter contract should adhere to the following specifications:

1. The contract should be named "Greeter" and defined as follows:

   ```solidity
   contract Greeter {
       // Contract code goes here
   }
   ```

2. It must store a greeting message as a string in a state variable on the blockchain. The default greeting message will be "Hello World".

3. Users should be able to read the greeting message from outside the smart contract.

4. Users should have the ability to update the greeting message from outside the smart contract.

## Implementation

The Greeter smart contract can be implemented using **Remix** or **Hardhat**. Below are the steps to create the contract in both environments:

### Using Remix

1. Go to [Remix](https://remix.ethereum.org) and create a new Solidity file named `Greeter.sol`.

2. Copy and paste the following code into `Greeter.sol`:

   ```solidity
   // SPDX-License-Identifier: MIT
   pragma solidity ^0.8.0;

   contract Greeter {
       string private greeting = "Hello World";

       function getGreeting() public view returns (string memory) {
           return greeting;
       }

       function setGreeting(string memory _newGreeting) public {
           greeting = _newGreeting;
       }
   }
   ```

3. Click the **Solidity Compiler** tab on the Remix IDE.

4. Select the compiler version (e.g., 0.8.0) from the dropdown.

5. Compile the contract by clicking the **Compile Greeter.sol** button.

6. Deploy the contract by switching to the **Deploy & Run Transactions** tab.

7. Choose the desired Ethereum environment (e.g., JavaScript VM, Injected Web3, etc.).

8. Click the **Deploy** button to deploy the Greeter contract.

9. Once deployed, you can use the contract functions to interact with the greeting message.

### Using Hardhat

1. Set up a new Hardhat project if you haven't already by following the [Hardhat documentation](https://hardhat.org/getting-started/).

2. In the project directory, create a new Solidity file named `Greeter.sol`.

3. Copy and paste the following code into `Greeter.sol`:

   ```solidity
   // SPDX-License-Identifier: MIT
   pragma solidity ^0.8.0;

   contract Greeter {
       string private greeting = "Hello World";

       function getGreeting() public view returns (string memory) {
           return greeting;
       }

       function setGreeting(string memory _newGreeting) public {
           greeting = _newGreeting;
       }
   }
   ```

4. In the same directory, locate the `hardhat.config.js` file, and ensure you have the necessary network settings to deploy the contract.

5. In the terminal, run the following command to compile the contract:

   ```
   npx hardhat compile
   ```

6. Deploy the contract by writing a deploy script using Hardhat's deployment functionality. For example:

   ```javascript
   // scripts/deploy_greeter.js
   async function main() {
     const Greeter = await ethers.getContractFactory("Greeter");
     const greeter = await Greeter.deploy();
     await greeter.deployed();
     console.log("Greeter deployed to:", greeter.address);
   }

   main()
     .then(() => process.exit(0))
     .catch((error) => {
       console.error(error);
       process.exit(1);
     });
   ```

7. In the terminal, run the following command to deploy the contract:

   ```
   npx hardhat run scripts/deploy_greeter.js --network <NETWORK_NAME>
   ```

   Replace `<NETWORK_NAME>` with the desired network (e.g., ropsten, rinkeby, mainnet).

8. Once deployed, you can use the contract functions to interact with the greeting message.

## Conclusion

Congratulations! You have successfully created the Greeter smart contract using both **Remix** and **Hardhat** environments. Now you can explore and expand upon this project or use it as a foundation for more complex Ethereum-based applications. Happy coding!
