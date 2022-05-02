import {
    SHOW_COUPON_MENU,
    HIDE_COUPON_MENU
} from '../actions/types'

const initialState = {
    showCouponMenu: false
}

function couponReducer(state = initialState, action) {
    const { type } = action

    switch (type) {
        case SHOW_COUPON_MENU:
            return {
                ...state,
                showCouponMenu: true
            }

        case HIDE_COUPON_MENU:
            return {
                ...state,
                showCouponMenu: false
            }

        default:
            return state
    }
}

export default couponReducer