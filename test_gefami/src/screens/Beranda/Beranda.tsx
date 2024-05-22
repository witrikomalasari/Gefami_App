import {View, Text, Button, StyleSheet} from 'react-native';
import React, {FC} from 'react';
import {useBaseNavigation} from '@hooks/useBaseNavigation';
import {Spacer} from '@components/atoms';

interface IBeranda {}

const Beranda: FC<IBeranda> = () => {
  const navigation = useBaseNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Beranda</Text>
      <Spacer height={20} />

      <Button
        title="SOAL NO.1 & SOAL NO.2"
        onPress={() => navigation.navigate('Home')}
      />
      <Spacer height={20} />
      <Button
        title="SOAL NO.3 & SOAL NO.4 & SOAL NO.5 & SOAL NO.6"
        onPress={() => navigation.navigate('HitAPI')}
      />
      <Spacer height={20} />
      <Button
        title="SOAL NO.7"
        onPress={() => navigation.navigate('Hashing')}
      />
      <Spacer height={20} />
      <Button title="SOAL NO.9" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default Beranda;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
  txt: {fontSize: 20, color: 'black', textAlign: 'center'},
});
