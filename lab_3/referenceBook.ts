import { Book } from "./book";

export class ReferenceBook extends Book{
    private _tax: number;
    public get tax(): number {
        return this._tax;
    }
    public set tax(value: number) {
        this._tax = value;
    }
    constructor(
        id: string,
        date: Date,
        price: number,
        quantity: number,
        author: string,
        tax: number
      ) {
        super(id, date, price, quantity, author);
        this._tax = tax;
      }
      totalPrice(){
        return this.price* this.quantity + this._tax;
      }
}