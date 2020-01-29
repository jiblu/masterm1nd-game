
export const SAVE_GAME_SETTINGS = 'SAVE_GAME_SETTINGS'

export const getGameSettings = settings => {
  return (dispatch) => {
    return dispatch({ type: SAVE_GAME_SETTINGS, settings: settings })
  }
}