import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import login from 'Redux/reducers/login';
import message from 'Redux/reducers/message';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['login', 'message'],
};

const rootReducer = combineReducers({ login, message });

export default persistReducer(persistConfig, rootReducer);