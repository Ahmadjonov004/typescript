"use strict";
// !! 1-misol
class BankAccaunt {
    constructor(accountNumber, ownerName, initialBalance) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = initialBalance;
    }
    get getBalance() {
        return this.balance;
    }
    // Pul qoyish 
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`${amount}$ qo'shildi. Yangi balans: ${this.balance}$`);
        }
        else {
            console.log("Summani natog'ri kiritdingiz");
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`${amount}$ yechildi. Qolgan balans ${this.balance}`);
        }
        else {
            console.log("Yetarli mablag' mavjud emas");
        }
    }
}
const myAccaunt = new BankAccaunt("123456", "asilbek", 600);
console.log(myAccaunt.getBalance);
myAccaunt.deposit(200);
// !! 2-misol
class Car {
}
//# sourceMappingURL=script.js.map