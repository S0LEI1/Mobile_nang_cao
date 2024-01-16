export default class Account {
    private _accountNumber: number
    public get accountNumber(): number {
        return this._accountNumber
    }
    public set accountNumber(value: number) {
        if(value <= 0)
            this._accountNumber = 999999
        else
            this._accountNumber = value;
    }
    private _name: string
    public get name(): string {
        return this._name
    }
    public set name(value: string) {
            this._name = value
    }
    private _balance: number
    public get balance(): number {
        return this._balance
    }
    public set balance(value: number) {
        if(value <= 0)
            this._balance =5000;
        else
            this._balance = value
    }
    private _RATE: number = 0.035
    public get RATE(): number {
        return this._RATE
    }
    public set RATE(value: number) {
        this._RATE = value
    }

    constructor(accountNumber: number, name: string, balance: number) {
        this._accountNumber = accountNumber
        this._name = name
        this._balance = balance
    }

    deposit(amount: number): boolean {
        if(amount >0){
            return true;
        }
        else return false;
    }

    withdraw(amount: number, fee: number): boolean {
        if(amount >0 && amount + fee <= this.balance)
            return true
        else return false;
    }
    addInterest() : number{
        return this.balance = this.balance + this.balance*this.RATE;
    }

    toStringAccount(): string{
        return `Ho ten : ${this._name}, So tien: ${this._balance}, STK: ${this._accountNumber}`
    }

}

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
    
}