import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from 'Redux/store';
import { persistor } from 'Redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
