import { SIGN_IN_FIREBASE, SIGN_UP_FAILED, SIGN_UP_SUCCESS, SAVE_PROFILE_FIREBASE } from '../types'
import { USER_SIGNED_UP } from '../../services/message'

export const INITIAL_STATE = {
  userData: {},
  profile: {},
  alert: {
    showAlert: false,
    message: ''
  }
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN_FIREBASE:
      return { ...INITIAL_STATE, userData: action.payload.user, profile: action.payload.profile }
    case SIGN_UP_FAILED:
      return { ...state, alert: {showAlert: true, message: action.payload} }
    case SIGN_UP_SUCCESS:
      return { ...state, alert: {showAlert: true, message: USER_SIGNED_UP} }
    case SAVE_PROFILE_FIREBASE:
      return { ...state, profile: action.payload }
    default:
      return state
  }
}
