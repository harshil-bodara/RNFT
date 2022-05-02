import {
    SHOW_COUPON_MENU,
    HIDE_COUPON_MENU
} from './types'

export const couponMenuSet = (flag) => async dispatch => {
    try {
        if(flag) {
            dispatch ({
                type: SHOW_COUPON_MENU
            })
        }
        else {
            dispatch ({
                type: HIDE_COUPON_MENU
            })
        }
    }
    catch(err) {
        console.log(err)
    }
}