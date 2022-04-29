import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import login from './login';
import messages from './messages';
import modals from './modals';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['login', 'messages', 'modals'],
};

const rootReducer = combineReducers({ login, messages, modals });

export default persistReducer(persistConfig, rootReducer);
