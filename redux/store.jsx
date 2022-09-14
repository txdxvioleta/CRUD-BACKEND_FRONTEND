import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rootReducers from './rootReducer';

const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
  //! DESCOMENTAR.concat(logger),
});

export default store;
