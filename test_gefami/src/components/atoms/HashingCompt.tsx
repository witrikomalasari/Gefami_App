import {formatDate} from '@utils/date';
import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
// import QuickCrypto from 'react-native-quick-crypto';

interface IHashingname {
  namaSaya?: string;
  time?: Date;
  gender?: 'pria' | 'wanita';
  ifabula?: string;
}

// const SHA256Hash = (str: string) => {
// const hashed = QuickCrypto.createHash('sha256').update(str).digest('hex');
// return hashed;
// };

export const HashingCompt: FC<IHashingname> = ({
  namaSaya,
  time,
  gender,
  ifabula,
}) => {
  let todayTime = time;
  const tanggalHariIni = formatDate(todayTime!);
  // console.log('today', tanggalHariIni);
  // console.log('todaytypeof', typeof tanggalHariIni);
  const jenisKelamin = gender;
  const ifabulas = ifabula;
  const namaDepan = namaSaya;

  const penggabunganKata: string = `${tanggalHariIni}${namaDepan}${jenisKelamin}${ifabulas}`;
  // console.log('penggabungan', penggabunganKata); // penggabungan 22052024witriwanitaifabula

  // const hashedString = SHA256Hash(penggabunganKata);

  // console.log('hashedString', penggabunganKata);

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>{penggabunganKata}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {justifyContent: 'center', alignItems: 'center'},
  txt: {color: 'black', fontSize: 20},
});

export default HashingCompt;
