import Account from "./account";

try {
    let name = "Ngoc";
    let accountNumber = 999999
    let balance = 500000;
    let user = new Account(accountNumber,name,balance);
    console.log(user.deposit(5000));
    console.log(user.withdraw(5000,0.1));
    console.log(user.addInterest());
    console.log(user.toStringAccount());
    
} catch (error) {
    console.log(error);
    
}