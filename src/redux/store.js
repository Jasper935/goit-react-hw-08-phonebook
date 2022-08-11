import rootReducer from './contacts/contacts-reducers'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import authReducer from './auth/auth-slice'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfigAuth = {
    key: 'auth',
    storage,
    // whitelist: ['token']
    blacklist: ['user']

};


const store = configureStore({
    reducer: {
       contacts: rootReducer,
        auth: persistReducer(persistConfigAuth, authReducer)
    },
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
});


const persistor = persistStore(store);
export { store, persistor }


