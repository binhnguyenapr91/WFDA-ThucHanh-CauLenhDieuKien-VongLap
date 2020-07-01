import "./scss/styles.scss";

/**
 * if/else
 */
console.log('IF/ELSE');
let count = 50;
if (count > 0) {
  count--;
} else {
  count = 0;
}
console.log(count);

/**
 * for loops
 */

console.log('FOR LOOP');
const keys = 'BINHNGUYEN';
let index = 0;
for (index; index < keys.length; index++) {
  console.log(keys[index]);
}

/**
 * while loops
 */

console.log('WHILE LOOP');
index = 0;

while(index<keys.length){
  console.log(keys[index]);
  ++index;
}

/**
 * do-while loops
 */

 console.log('DO WHILE LOOP');

 index = 0;
 do{
   console.log(keys[index]);
   index++;
 }while(index<keys.length);

 /**
  * for of loops
  */

  console.log('FOR OF LOOP');
  for(let item of keys){
    console.log(item);
  }

  /**
   * for in loop
   */

   console.log('FOR IN LOOP');

   const user = {
     name: 'BINHNGUYEN',
     age:'30'
   };

   for(const key in user){
      console.log(`${key}:${user[key]}`);
   }
