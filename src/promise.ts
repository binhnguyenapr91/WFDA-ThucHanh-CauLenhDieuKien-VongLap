import './scss/styles.scss';

// Call back

const foo = () => console.log('FOO');

const bar = () => foo();

const baz = () => bar()

baz();


// Async Technique

console.log('First line');
setTimeout(function(){
  console.log('Second line');
},2000);

setTimeout(function (){
console.log('Third line')
},1000)

console.log('Last line');