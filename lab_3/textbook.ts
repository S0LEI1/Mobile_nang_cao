class TextBook extends Book {
  private _isNew: boolean = true;
  public get isNew(): boolean {
    return this._isNew;
  }
  public set isNew(value: boolean) {
    this._isNew = value;
  }
  constructor(
    id: string,
    date: Date,
    price: number,
    quantity: number,
    author: string,
    isNew: boolean
  ) {
    super(id, date, price, quantity, author);
    this._isNew = isNew;
  }
  totalPrice() {
    if (this.isNew) {
      return this.quantity * this.price;
    } else return this.quantity * this.price * 0.5;
  }
}
