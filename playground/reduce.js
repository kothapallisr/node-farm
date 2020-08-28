const numbers = [1,2,3,4,5,6,7,8,9];
const fruitBasket = ['apple', 'orange', 'orange', 'apple', 'apple','banana','papaya'];

const reducer = function(accumulator, currentValue) {
  return accumulator + currentValue;
}
//10+ 1+2+3+...9
const sum = numbers.reduce(reducer,10);

console.log(sum);

const basket = fruitBasket.reduce(function(obj, fruit){
  if(!obj[fruit]){
    obj[fruit] = 1;
  } else {
    obj[fruit]++;
  }
  return obj;
},{});

console.log(basket);





