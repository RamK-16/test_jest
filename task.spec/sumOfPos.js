const positiveSum = (arr) => {
  let sumOfPos = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sumOfPos += arr[i];
    }
  }
  return sumOfPos;
}
module.exports = positiveSum;
