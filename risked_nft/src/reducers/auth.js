import {
    SHOW_SIGNIN_MODAL,
    HIDE_SIGNIN_MODAL,
    SHOW_SIGNUP_MODAL,
    HIDE_SIGNUP_MODAL,
    SHOW_MOBILE_MENU,
    HIDE_MOBILE_MENU
} from '../actions/types'

const initialState = {
    isAuthenticated: null,
    showSigninModal: false,
    showSignupModal: false,
    showMobileMenu: false
}

function authReducer(state = initialState, action){
    const {type} = action
    switch (type) {
        case SHOW_SIGNIN_MODAL:
            return {
                ...state,
                showSigninModal: true
            }
            case HIDE_SIGNIN_MODAL:
                return {
                    ...state,
                    showSigninModal: false,
                }
    
            case SHOW_SIGNUP_MODAL:
                return {
                    ...state,
                    showSignupModal: true,
                }
    
            case HIDE_SIGNUP_MODAL:
                return {
                    ...state,
                    showSignupModal: false,
                }
    
            case SHOW_MOBILE_MENU:
                return {
                    ...state,
                    showMobileMenu: true,
                }
    
            case HIDE_MOBILE_MENU:
                return {
                    ...state,
                    showMobileMenu: false,
                }
            
            default:
                return state
        }
    }
    
    export default authReducer