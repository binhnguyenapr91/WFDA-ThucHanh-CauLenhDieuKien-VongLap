import './scss/styles.scss';
import { resolve } from 'url';
import { reject } from 'lodash';
//===== Print to console 5 after 5 second
const wait5secs = new Promise ((resolve,reject) => {
  setTimeout(()=>{
    resolve(5);
  },5000);
});

// wait5secs.then(data => console.log(data))
// .catch(err => console.log(err));

// //=====
// const promise = new Promise((resolve,reject) => {
//   resolve('done');
//   reject(new Error('...'));
//   setTimeout(()=>{resolve('...')},5000);
// });

// promise.then(data => console.log(data));

