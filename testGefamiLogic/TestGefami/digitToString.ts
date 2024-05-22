// 4. Buatlah tampilan terbilang dari variable x yang berupa 4 digit angka ( lebih besar dari 2000 ) :
// Contoh : 2234 = Dua Ribu Dua Ratus Tiga Puluh Empat
// 8500 = Delapan Ribu Lima Ratus
// 7001 = Tujuh Ribu Satu

const digitToString = (digitNum: number): string => {
  let digitString = {
    1: "Satu",
    2: "Dua",
    3: "Tiga",
    4: "Empat",
    5: "Lima",
    6: "Enam",
    7: "Tujuh",
    8: "Delapan",
    9: "Sembilan",
    10: "Sepuluh",
  };

  let satuan = {
    1: "Ribu",
    2: "Ratus",
    3: "Puluh",
  };

  let numToArr: number[] = Array.from(String(digitNum), Number);

  let Terbilang: string[] = [];

  for (let i: number = 0; i < numToArr.length; i++) {
    // console.log("ffd", i);
    // console.log("numleng", numToArr[i]);
    if (numToArr[i] !== 0) {
      Terbilang.push(digitString[numToArr[i]]);
      // resultTerbilang.push(satuan[i]);
      Terbilang.push(satuan[i + 1]);
    }
  }

  let resultTerbilang: string = Terbilang.join(" ");
  //   console.log("gajgda", resultTerbilang.join(" "));
  return resultTerbilang;
};

const resultDigitToString1 = digitToString(2234);
const resultDigitToString2 = digitToString(8500);
const resultDigitToString3 = digitToString(7001);

console.log("resultTerbilang", resultDigitToString1);
console.log("resultTerbilang2", resultDigitToString2);
console.log("resultTerbilang3", resultDigitToString3);
