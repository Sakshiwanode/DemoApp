
import React from 'react';
import DemoApp from './src/DemoApp';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <DemoApp />
    </Provider>
  );
};

export default App;
