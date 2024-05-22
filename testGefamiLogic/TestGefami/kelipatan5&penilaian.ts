// 1. Tampilkan deret angka berkelipatan 5 mulai dari 50 sampai dengan 100

const cekAngkaKelipatan5 = (numForCheck: number) => {
  if (numForCheck < 50) return false;

  for (let i: number = numForCheck; i <= 100; i++) {
    // console.log("der", i);
    if (i % 5 === 0) {
      return true;
    }
    return false;
  }
};

const penilaianAngka = (num: number): string => {
  let result: string = "";

  let isKelipatan5 = cekAngkaKelipatan5(num);

  if (isKelipatan5) {
    if (num > 70 && num <= 80) {
      result = `${num} BAIK`;
    } else if (num > 60 && num <= 70) {
      result = `${num} CUKUP`;
    } else if (num > 80) {
      result = `${num} LUAR BIASA`;
    } else {
      result = `${num} KURANG`;
    }
  }
  return result;
};

const hasilpenilaianAngka3 = penilaianAngka(50); // kurang
const hasilpenilaianAngka5 = penilaianAngka(65); // cukup
const hasilpenilaianAngka6 = penilaianAngka(75); // baik
const hasilpenilaianAngka9 = penilaianAngka(90); // luar biasa
const hasilpenilaianAngka12 = penilaianAngka(100); // luar biasa

console.log("hasilpenilaianAngka3", hasilpenilaianAngka3);
console.log("hasilpenilaianAngka5", hasilpenilaianAngka5);
console.log("hasilpenilaianAngka6", hasilpenilaianAngka6);
console.log("hasilpenilaianAngka9", hasilpenilaianAngka9);
console.log("hasilpenilaianAngka12", hasilpenilaianAngka12);
