import { createStore, applyMiddleware } from 'redux';

import { composeWithDevTools } from '@redux-devtools/extension';
import monitorReducersEnhancer from './Components/Enhancers/monitorReducers';
import rootReducer from './Components/Common/RootReducers';
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from 'redux-persist';


const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore(preloadedState) {
  const middlewareEnhancer = applyMiddleware();

  const enhancers = [monitorReducersEnhancer
    , middlewareEnhancer
  ];

  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(
    persistedReducer,
    preloadedState, composedEnhancers);
    
  const persistor = persistStore(store);

  return { store
    , persistor 
  };
}