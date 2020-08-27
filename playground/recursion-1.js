function countdown(fromNumber) {
  let num = fromNumber - 1;
  console.log(fromNumber);
  if (num > 0) {
    countdown(num);
  }
}

countdown(10);
