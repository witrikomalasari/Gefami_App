// 3. Buatlah tampilan berikut sesuai variable x :
// - Jika variable x=1 maka tampil :
// *
// - Jika variable x=2 maka tampil :
// *
// * *
// - Jika variable x=3 maka tampil :
// *
// * *
// * * *
// - … dan seterusnya

const createPatern = (num: number): string => {
  let pattern: string = "";

  for (let i: number = 0; i <= num; i++) {
    for (let j: number = 0; j < i; j++) {
      pattern += "*";
      //   pattern += i;
    }
    pattern += "\n";
  }
  //   console.log("dfa", pattern);
  return pattern;
};

const resultPatern1 = createPatern(1);
const resultPatern2 = createPatern(2);
const resultPatern3 = createPatern(3);

console.log("pattern1", resultPatern1);
console.log("pattern2", resultPatern2);
console.log("pattern3", resultPatern3);
