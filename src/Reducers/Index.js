import {
  SAVE_GAME_SETTINGS
} from '../Actions/Index'

const initialState = {
  settings: null
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case SAVE_GAME_SETTINGS:
      return {
        ...state,
        settings: action.settings
      }
    default:
      return {
        ...state
      }
  }
}