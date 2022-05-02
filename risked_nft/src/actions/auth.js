import {
    HIDE_SIGNUP_MODAL,
    HIDE_SIGNIN_MODAL,
    SHOW_SIGNIN_MODAL,
    SHOW_SIGNUP_MODAL,
    HIDE_MOBILE_MENU,
    SHOW_MOBILE_MENU
} from './types'

export const signinModalSet = (flag) => async dispatch => {
    try {
        console.log("ShowSignInModal true", flag)
        if(flag) {
            dispatch({
                type: SHOW_SIGNIN_MODAL
            })
        }
        else {
            dispatch({
                type: HIDE_SIGNIN_MODAL
            })
        }
    }
    catch(err) {
        console.log(err)
    }
}

export const signupModalSet = (flag) => async dispatch => {
    try {
        if(flag) {
            dispatch({
                type: SHOW_SIGNUP_MODAL
            })
        }
        else {
            dispatch({
                type: HIDE_SIGNUP_MODAL
            })
        }
    }
    catch(err) {
        console.log(err)
    }
}

export const mobileMenuSet = (flag) => async dispatch => {
    try {
        if(flag) {
            dispatch({
                type: SHOW_MOBILE_MENU
            })
        }
        else {
            dispatch({
                type: HIDE_MOBILE_MENU
            })
        }
    }
    catch(err) {
        console.log(err)
    }
}