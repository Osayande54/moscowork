// const promise = (a, b) => {
//   return new Promise((resolve, reject) => {
//     if (a > b) {
//       resolve("Ok");
//     } else {
//       reject("Nope!");
//     }
//   });
// };

// promise(10, 20)
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((err) => {
//     console.log(err.name);
//   });
// function subtract(a, b) {
//   console.log(a - b);
// }
// function sum(x, y) {
//   console.log(x + y);
// }

// exports.default = { sum, subtract };

// let fullName = "Akongbowa";

// function profile() {
//   function justName() {
//     function surame() {
//       return fullName;
//     }

//     return surame();
//   }
//   return justName();
// }

// console.log(profile());


function asynchronousJavascript(a,b){
  return new Promise((res,rej)=>{
    if(a>b){
    res('I am single Threaded and non blocking')}
    else{
      rej('This isnt nice')
    }


 } )
}


asynchronousJavascript(1,13).then((result)=>{
  console.log(result);
 }).catch((err)=>{
  console.log(err);
 });
