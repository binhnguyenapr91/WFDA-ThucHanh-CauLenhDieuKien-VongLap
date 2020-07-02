import './scss/styles.scss';

interface IUser {
  name: string;
  age: number
}

let customer: IUser = {
  name: "Binhnguyen",
  age: 30

};

console.log(customer);

// extends vs implements

interface IArea {
  area(): number
}

class Shape {
  public x: number;
  public y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  toString(): String {
    return `x=${this.x};y=${this.y}`;
  }
}

class Rect extends Shape implements IArea{
  constructor(x:number,y:number,public width :number, public height : number ){
    super(x,y);
  }
  area():number{
    return this.width*this.height;
  }
}

const newRect = new Rect(2,2,20,30);

console.log(newRect.toString);
console.log(newRect.area());


