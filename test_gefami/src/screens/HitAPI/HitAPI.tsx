import {GefamiAPIs} from '@API/GefamiAPI';
import React, {FC, memo, useCallback, useEffect, useState} from 'react';
import {
  Button,
  Dimensions,
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const {height} = Dimensions.get('window');

interface IHitAPI {}

interface DataItem {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface IRenderItem {
  item: DataItem;
  onDelete: (id: number) => void;
}

const RenderItem: FC<IRenderItem> = memo(({item, onDelete}) => {
  return (
    <View style={styles.tableRow}>
      <Text style={styles.tableCell}>{item.userId}</Text>
      <Text style={styles.tableCell}>{item.id}</Text>
      <Text style={styles.tableCell}>{item.title}</Text>
      <Text style={styles.tableCell}>{item.body}</Text>
      <View style={{height: 'auto'}}>
        <Button title="Delete" onPress={() => onDelete(item.id)} />
      </View>
    </View>
  );
});

const HitAPI: FC<IHitAPI> = () => {
  const [dataAPI, setDataAPI] = useState<DataItem[]>([]);

  useEffect(() => {
    getAPI();
  }, []);

  const getAPI = async () => {
    try {
      const {data} = await GefamiAPIs.get('posts');
      console.log('response', JSON.stringify(data, null, 2));
      // console.log('LENGTH', data.length);
      let dataSlice = await data.slice(0, 10);
      setDataAPI(dataSlice);
    } catch (error) {
      console.log('fetch data error', error);
    }
  };

  const handleDeleteItem = useCallback((id: number) => {
    setDataAPI(prevData => prevData.filter(item => item.id !== id));
  }, []);

  const renderItem: ListRenderItem<DataItem> = ({item}) => (
    <RenderItem item={item} onDelete={handleDeleteItem} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.table}>
        <View style={styles.tableHeader}>
          <Text style={styles.tableHeaderText}>User ID</Text>
          <Text style={styles.tableHeaderText}>ID</Text>
          <Text style={styles.tableHeaderText}>Title</Text>
          <Text style={styles.tableHeaderText}>Body</Text>
          <Text style={styles.tableHeaderText}>Action</Text>
        </View>
        <FlatList
          data={dataAPI}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          initialNumToRender={dataAPI.length}
          maxToRenderPerBatch={10}
        />
      </View>
    </View>
  );
};

export default HitAPI;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 20,
    backgroundColor: '#fff',
  },
  table: {
    borderWidth: 1,
    borderColor: '#000',
    width: '100%',
    height: height - 100,
    // backgroundColor: 'red',
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#ddd',
  },
  tableHeaderText: {
    flex: 1,
    padding: 10,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: '#000',
    color: 'blue',
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  tableCell: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#000',
    color: 'blue',
    textAlign: 'center',
  },
});
