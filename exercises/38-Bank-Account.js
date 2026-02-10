class BankAccount {
  constructor () {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    if (amount > 0) {
      this.transactions.push({
        type: "deposit",
        amount: amount
      })
      this.balance += amount;
      return `Successfully deposited $${amount}. New balance: $${this.balance}`;
    }
    return `Deposit amount must be greater than zero.`;
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.transactions.push({
        type: "withdraw",
        amount: amount
      })
      this.balance -= amount;
      return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
    }
    return `Insufficient balance or invalid amount.`;
  } 

  checkBalance() {
    return `Current balance: $${this.balance}`
  }

 listAllDeposits() {
    const deposits = this.transactions
      .filter(transaction => transaction.type === "deposit")
      .map(transaction => transaction.amount);
    
    return `Deposits: ${deposits.join(",")}`;
  }

  listAllWithdrawals() {
    const withdrawals = this.transactions
      .filter(transaction => transaction.type === "withdraw")
      .map(transaction => transaction.amount);
    
    return `Withdrawals: ${withdrawals.join(",")}`;
  }
}

let myAccount = new BankAccount;
myAccount.deposit(60);
myAccount.withdraw(10);
myAccount.deposit(80);
myAccount.deposit(20);
myAccount.withdraw(15);
