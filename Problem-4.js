const arr = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];
function countDivisible() {
  let obj = {};
  for (let i = 1; i <= 9; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] % i === 0) {
        count++;
      }
    }
    obj[i] = count;
  }
  return obj;
}
console.log(countDivisible());
