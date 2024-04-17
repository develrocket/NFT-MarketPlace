import { combineReducers } from 'redux'

import authReducer from './authReducer';
import productReducer from './productReducer'
import productAuctionReducer from './productAuctionReducer'

export default combineReducers({
  auth: authReducer,
  product: productReducer,
  product1: productAuctionReducer,
});