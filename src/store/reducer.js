import { authReducer } from './slices/auth/slice';
import { contactsReducer } from './slices/contacts/slice';
import { filterReducer } from './slices/filter/slice';

import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistConfigAuth = {
  key: 'token',
  storage,
  blacklist: ['user'],
};

const persistedReducerAuth = persistReducer(persistConfigAuth, authReducer);

const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

export const reducer = {
  contacts: persistedContactsReducer,
  filter: filterReducer,
  auth: persistedReducerAuth,
};
