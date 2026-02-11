function countup(number) {
  return number < 1 ? [] : [...countup(number - 1), number];
}
