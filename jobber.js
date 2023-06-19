// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   greet() {
//     console.log(`Hello ${this.name}`);
//   }
// }
// class Persons extends Person {}
// let student = new Persons("Walters Princess");
// console.log(student);

// class fan {
//   constructor(model, year) {
//     this.model = model;
//     this.year = year;
//   }
//   yearOfPurchase() {
//     const date = new Date();
//     console.log(
//       ` i bought a ${this.model} product ${
//         date.getFullYear() - this.year
//       } ago   `
//     );
//   }
// }
// let drugs = new fan("Hyundai", 2012);
// console.log(drugs.yearOfPurchase());

// const fairGirl = {
//   name1: "Amanda Cerny",
//   complexion: "Fair",
//   height: "120cm",
// };
// const blackGirl = {
//   name2: "Lupita Nyongo",
//   complexion: "Dark",
// };

// // const promise = new Promise((resolve, reject) => {
// //   resolve(10)
// // });
// // console.log(promise);

// const a = "Some awesome string";
// const b = a.toUpperCase().replace("ST", "B").toLowerCase();

// console.log(b);

// function Values(a,b){
//   return new Promise((response,reject)=>{
//     if(a>b ){
//       response('Ok')
//     }
//     else{
//     reject(`The value of ${b} is greater than the value of ${a}`)
//     }

//   }).then((result)=>{
//     console.log(result);
//   }).catch((err)=>{
//     console.log(err);

//   })

// }
// Values(10,2)

// const promise = new Promise((rez,res)=>{

// })

// console.log(promise);

// ``````````````````
// var add = function(x, y) {
//   return new Promise((resolve,reject) => {
//     var sum = x + y;
//     if (sum) {
//       resolve(sum);
//     }
//     else {
//       reject(Error("Could not add the two values!"));
//     }
//   });
// };
// console.log(add(12,0));``````````````````

// var subtract = function(x, y) {
//   return new Promise((resolve, reject) => {
//     var sum = x - y;
//     if (sum) {
//       resolve(sum);
//     }
//     else {
//       reject(Error("Could not subtract the two values!"));
//     }
//   });
// };

// // Starting promise chain
// add(2,2)
//   .then((added) => {
//     // added = 4
//     return subtract(added, 3);
//   })
//   .then((subtracted) => {
//     // subtracted = 1
//     return add(subtracted, 5);
//   })
//   .then((added) => {
//     // added = 6
//     return added * 2;
//   })
//   .then((result) => {
//     // result = 12
//     console.log("My result is ", result);
//   })
//   .catch((err) => {
//     // If any part of the chain is rejected, print the error message.
//     console.log(err);
//   });

const object = this;
console.log(object);

// Create an object calculator with three methods:

// read() prompts for two values and saves them as object properties with names a and b respectively.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.

const calculator = {
    read(){

    },
    sum(){},
    mul(){}
};
