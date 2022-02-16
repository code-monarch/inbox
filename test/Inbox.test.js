// contract test code will go here
const assert = require("assert");
const ganache = require("ganache-cli");
const { describe } = require("mocha");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require("../compile");

let accounts;
let inbox;

beforeEach(async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts();
  // Use one of those accounts to deploy the contract
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hi there!'] })
    .send({ from: accounts[0], gas: '1000000' });
});

describe('Inbox', () => {
  it('deploys a contract', () => {
    console.log(inbox);
  });
});

// class Car {
//     park() {
//         return 'stopped';
//     }

//     drive() {
//         return 'vroom';
//     }
// }

// let car;

// beforeEach(() => {
//     const car = new Car();
// });

// describe('car', () => {
//     it('can park', () => {
//         assert.equal(car.park(), 'stopped');
//     });

//     it("can drive", () => {
//         assert.equal(car.drive(), 'vroom')
//     });
// });
