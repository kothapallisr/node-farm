// countDown(10)  10, 9, ....1
function countDown(num) {
  
  let nextNum = num - 1;
  console.log(num);
  if(num > 0) {
    countDown(nextNum);
  }
  
}
countDown(10);


