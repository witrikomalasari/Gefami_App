// 2. Buatlah deret bilangan Fibonacci sebanyak 20
// 0 1 1 2 3 5 8 … dan seterusnya

const fbci = (num: number) => {
  let deretFibonanci: number[] = [];

  for (let i: number = 0; i < num; i++) {
    if (i <= 1) {
      deretFibonanci.push(i);
      continue;
    }
    deretFibonanci[i] = deretFibonanci[i - 2] + deretFibonanci[i - 1];
  }

  return deretFibonanci;
};

const resultFbci: number[] = fbci(20);
console.log("fibonanci", resultFbci);
// [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181,];
console.log("length", resultFbci.length); // 20
