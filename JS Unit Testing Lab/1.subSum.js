function subSum(input, startI, endI) {
  if (!Array.isArray(input)) {
    return NaN;
  }
  let startIndex = Math.max(0, startI);
  let endIndex = Math.min(endI, input.length-1);

  return input
    .slice(startIndex,endIndex + 1)
    .map(Number)
    .reduce((acc, val) => acc + val, 0);
}
console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300));
