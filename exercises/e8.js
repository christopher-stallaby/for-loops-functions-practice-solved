
// EXERCISE 8
// Return an array with a bank account object with the greatest balance value
// Array example: bankAccounts in /data/data.js
// getClientWithGreatestBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithGreatestBalance(array) {
  // Your code goes here...
  let accounts = [];
  let maxBalance = -Infinity;
  for (let key of array) {
    if (key.balance > 0 && key.balance > maxBalance) {
      maxBalance = key.balance;
    }
  }; // assigns maxBalance to highest non-zero balance

  for (let key of array) {
    if(key.balance === maxBalance) {
      accounts.push(key);
    };
  }; // pushes data into array where maxBalance is the account balance

  return accounts;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function