function gcd(a: number, b: number): number { // наибольший общий делитель
  return b ? gcd(b, a % b) : a;
}

function lcd(a: number, b: number): number { // наименее общее кратное
  return (a / gcd(a, b)) * b;
}
