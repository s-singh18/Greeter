const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Reentrancy", () => {
  let greeter;
  let defaultGreeting = "Hello World!";

  beforeEach(async () => {
    accounts = await ethers.getSigners();
    const Greeter = await ethers.getContractFactory("Greeter");
    greeter = await Greeter.deploy(defaultGreeting);
  });

  describe("Read and update greeter", async () => {
    it("reads default greeting", async () => {
      const greeting = await greeter.read();
      expect(greeting).to.eq(defaultGreeting);
    });

    it("updates and reads new greeting", async () => {
      let newGreeting = "Hey Everyone!";
      await greeter.update(newGreeting);
      const greeting = await greeter.read();
      expect(greeting).to.eq(newGreeting);
    });
  });
});
