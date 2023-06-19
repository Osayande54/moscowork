const ID = "Akongbowa Osayande Bramwell";
const person = {
  ID,
  complexion: "Lightskinned",
};
console.log(person.ID);
const array = ["Edo", "Delta", "Bayelsa"];
const logs = (array.length = 5);
console.log(array);
const numbers = [1, 2, 3, 4, 5, 5, 6, 6, 6, 7, 8, 9];
function filterValue(gol) {
  return gol > 3;
}
const figures = numbers.filter(filterValue);
console.log(figures);
function isTrue(pill) {}
const num = 20;
isTrue(num);
{
  var Id = " Osayande";
}
console.log(Id);
console.log(country);
country = "Nigeria";
var country;
console.log(country);
//Write a function that converts the temperature from fanrenheit to celsius
function myFunction(F) {
  return (F - 32) * (5 / 9);
}
console.log(myFunction(977));
//Local variables are variables that are
//declared inside a function and can only
//be accessed within that function
function returnValue() {
  const value = "Akongbowa ";
  console.log(value);
}
returnValue();

const product = {
  productName: "Hisense",
  YearOfProduction: 2012,
};

console.log(product["productName"]);
const size = product.nonexistentProperty;
console.log(size);
const propsNames = Object.getOwnPropertyNames(product);
console.log(propsNames);
//The object.getOwnPropertyNames returns an array containing
//  all the own string names in the object product,
//   regardless of if they are enumerable or not
for (key in product) {
  console.log(key);
}
function logProperty(propertyName) {
    console.log(person[propertyName]);
  }
  

  logProperty("product")