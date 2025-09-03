
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  let result = [];
  for (let key of array) {
    let totalDeposits = 0;
    let totalWithdrawals = 0;
    if (key.deposits) {
      totalDeposits += key.deposits.reduce((acc, curr) => acc + curr, 0);
    };
    if (key.withdrawals) {
      totalWithdrawals += key.withdrawals.reduce((acc, curr) => acc + curr, 0);
    };
    if (totalDeposits - totalWithdrawals !== key.balance) {
      result.push(key);
    }
  }
  return result;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function