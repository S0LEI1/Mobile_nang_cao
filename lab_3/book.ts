//Mã sách, ngày nhập, đơn giá, số lượng, nhà xuất bản
export class Book {
  private _id: string;
  public get id(): string {
    return this._id;
  }
  public set id(value: string) {
    this._id = value;
  }
  private _date: Date;
  public get date(): Date {
    return this._date;
  }
  public set date(value: Date) {
    this._date = value;
  }
  private _price: number;
  public get price(): number {
    return this._price;
  }
  public set price(value: number) {
    this._price = value;
  }
  private _quantity: number;
  public get quantity(): number {
    return this._quantity;
  }
  public set quantity(value: number) {
    this._quantity = value;
  }
  private _author: string;
  public get author(): string {
    return this._author;
  }
  public set author(value: string) {
    this._author = value;
  }
  constructor(
    id: string,
    date: Date,
    price: number,
    quantity: number,
    author: string
  ) {
    this._id = id;
    this._date = date;
    this._price = price;
    this._quantity = quantity;
    this._author = author;
  }
}

