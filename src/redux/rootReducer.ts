import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import authReducer from './reducers/authReducer';
import cartReducer from './cartSlice';

const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
  cart: cartReducer
});

export default rootReducer;
