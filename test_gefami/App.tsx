import {MainNavigator} from '@navigators/MainNavigator';
import React, {FC, Fragment} from 'react';

interface IAppProps {}

const App: FC<IAppProps> = () => {
  return (
    <Fragment>
      <MainNavigator />
    </Fragment>
  );
};

export default App;
