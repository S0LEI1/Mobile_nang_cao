import { TextBook } from "./textbook";
import { ReferenceBook } from './referenceBook';

const date = new Date();
const textbooxnew = new TextBook('1',date,12,1,'ngoc', true);
const textbooxold = new TextBook('2',date,12,1,'ngoc', false);
const referenceBook = new ReferenceBook('3',date,12,1,'ngoc', 12);
console.log(textbooxnew);
console.log(textbooxnew.totalPrice());
console.log('//////////////////////');

console.log(textbooxold);
console.log(textbooxold.totalPrice());
console.log('//////////////////////');

console.log(referenceBook);
console.log(referenceBook.totalPrice());


