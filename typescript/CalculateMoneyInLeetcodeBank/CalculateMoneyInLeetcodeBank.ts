function totalMoney(n: number): number {
  var total: number = 0;
  var day: number = 1;
  var week: number = 0;
  for (var i = 1; i <= n; i++) {
    total = total + (week + day);
    day++;

    if (i % 7 === 0) {
      week++;
      day = 1;
    }
  }

  return total;
}

console.log(totalMoney(10));
