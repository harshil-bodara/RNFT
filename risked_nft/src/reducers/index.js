import { combineReducers } from 'redux'
import auth from './auth'
import coupon from './coupon'

export default combineReducers({
    auth,
    coupon
})