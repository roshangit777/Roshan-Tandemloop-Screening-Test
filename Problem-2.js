function oddSeries(n) {
  const oddSeriesArr = [];
  for (let i = 1; oddSeriesArr.length < n; i++) {
    let val = i % 2;
    if (val !== 0) {
      oddSeriesArr.push(i);
    }
  }
  return oddSeriesArr;
}
let value = "";
process.stdout.write("Enter a Numer: ");
process.stdin.on("data", (data) => {
  value = data.toString().trim();
  if (isNaN(value)) {
    console.log("Enter valid a value");
    process.exit();
    return;
  }
  console.log("You entered:", value);
  let result = oddSeries(Number(value));
  console.log("Result:", result);
  process.exit();
});
