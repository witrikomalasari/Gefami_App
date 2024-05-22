import {HashingCompt} from '@components/atoms';
import React, {FC} from 'react';
import {View} from 'react-native';

interface IHashingnameScreen {}

const HashingnameScreen: FC<IHashingnameScreen> = () => {
  let timeToday = new Date();

  return (
    <View style={{backgroundColor: 'lightblue', flex: 1}}>
      <HashingCompt
        gender="wanita"
        ifabula="ifabula"
        namaSaya="witri"
        time={timeToday}
      />
      {/* <Text style={{color: 'red'}}>dede</Text> */}
    </View>
  );
};

export default HashingnameScreen;
