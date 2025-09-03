
// EXERCISE 12
// Return an array of all deposits greater than 100
// Array example: bankAccounts in /data/data.js
// getAllDepositsGreaterThanOneHundred(bankAccounts) => [3432, 43242.34, 23432]

export function getAllDepositsGreaterThanOneHundred(array) {
  // Your code goes here...
  let result = [];
  for (let key of array) {
    if (key.deposits) {
      for (let each of key.deposits) {
        if (each > 100) {
          result.push(each);
        }
      }
    }
  }
  return result;
};

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function