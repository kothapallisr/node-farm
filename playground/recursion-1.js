function countdown(fromNumber) {
  let nextNum = fromNumber - 1;
  console.log(fromNumber);
  if (nextNum > 0) {
    countdown(nextNum);
  }
}

countdown(10);
