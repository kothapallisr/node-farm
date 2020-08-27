// sum of digits  234 -> 2 + 3 + 4
function sumOfDigits(num) {
  if(num == 0) {
    return 0;
  }
  // 234/10 = 23.4 234%10 -> 4
  return num%10 + sumOfDigits(Math.floor(num/10));
}
console.log(sumOfDigits(1456456745234));

