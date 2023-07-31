// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity >=0.4.22 <=0.8.7;

contract Mortal {
    address owner;

    constructor() {
        owner = msg.sender;
    }

    function kill() public {
        if (msg.sender == owner) selfdestruct(payable(msg.sender));
    }
}

contract Greeter is Mortal {
    string greeting;

    constructor(string memory _greeting) {
        greeting = _greeting;
    }

    function read() public view returns (string memory) {
        return greeting;
    }

    function update(string memory _greeting) public {
        greeting = _greeting;
    }
}
