import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import login from './login';
import messages from './messages';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['login', 'messages'],
};

const rootReducer = combineReducers({ login, messages });

export default persistReducer(persistConfig, rootReducer);
