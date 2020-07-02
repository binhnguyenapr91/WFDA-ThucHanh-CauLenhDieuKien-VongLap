import './scss/styles.scss';

function addNumber (num:number): number{
  return num*num;
}

console.log(addNumber(5));

const addNumber1 = function (number: number): number{
  return number+number;
}

console.log(addNumber1(7));

//Higher order function
let wrapperFunction = function (a:number) : Function{
    return function (b: number) : number{
      return a+b;
    }
}

const addWith5 = wrapperFunction(5);
console.log(addWith5(3));
//Arrow function

let getResult = (number1 : number, number2 : number):number => {
  return number1+number2;
}


console.log(getResult(1,2));
