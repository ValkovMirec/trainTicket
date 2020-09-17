export default function timeInterval() {
  let halfHourInterval = [];
  for (let i = 0; i <= 47; i++) {
    let n = i % 2 === 0 ? i / 2 + ":00" : (i + 1) / 2 - 1 + ":30";
    if (n < 10) {
      n = "0" + n;
    }
    halfHourInterval.push(n);
  }
  return halfHourInterval;
}
