import './scss/styles.scss';
import { filter } from 'lodash';
/**
 * Array
 */

// declare an array
const list: number[] = [1, 2, 3];

const cars: Array<string> = [
  'Volvo',
  'BMW',
  'Toyota'
];
console.log('list');
for (const item of list) {
  console.log(item.toFixed(2));
};
console.log('cars');
for (const item of cars) {
  console.log(item.includes('o'));
};

// convert mảng từ dạng này sang dạng khác.
// using normal function
let inputNumber;
let converter = function (inputNumber: number) {
  return inputNumber * inputNumber;
}
let convertList1: Array<number> = [];
for (let item of list) {
  convertList1.push(converter(item));
}
console.log(convertList1);
// Output: [1, 4, 9]

// using arrow function
const convertList2 = list.map(number => number * number);
console.log(convertList2);
// Output: [1, 4, 9]

// lọc các phần tử thỏa mãn
const filteredCar = cars.filter(string => string.length > 3);
console.log(filteredCar);
// Output: ['Sport', 'Car']


/**
 * Tuple
 */

// Declare a tuple type
let my_tuple: [number,string],string;
// Initialize it
my_tuple = [10,'hello world'];
// OK
// Initialize it incorrectly
//my_tuple = ['hi',999];


// OK
console.log(my_tuple[1].substr);
// Error, Property 'substr' does not exist on type 'number'.
//console.log(my_tuple[0].substr)



