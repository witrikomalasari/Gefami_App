import {JSONdata} from '@assets/dummy_data';
import {Spacer} from '@components/atoms';
import React, {FC, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

interface IJsonData {
  id: number;
  judulBuku?: string;
  category?: string;
}

interface IHome {}

const Home: FC<IHome> = () => {
  const {data} = JSONdata;
  const [title, setTitle] = useState<IJsonData>(data[0]);

  const handleChangeTitle = () => {
    const randomIdx = Math.floor(Math.random() * data.length);
    setTitle(data[randomIdx]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Judul Buku</Text>
      <Spacer height={10} />
      <Text style={styles.txt}>{title?.judulBuku}</Text>
      <Spacer height={20} />
      <Button title="Ganti Judul Buku" onPress={handleChangeTitle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  txt: {color: '#2F89FC', fontSize: 18, textAlign: 'center'},
});

export default Home;
