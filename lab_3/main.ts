import { TextBook } from "./textbook";

const date = new Date();
const textboox = new TextBook('1',date,12,1,'ngoc', true);
console.log(textboox.totalPrice());
