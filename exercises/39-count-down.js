function countdown(n) {
  let arrayCount = [];
  if(n < 1) {
    return [];
  }else {
    arrayCount = countdown(n - 1);
    arrayCount.unshift(n);
    return arrayCount;
  }
}
