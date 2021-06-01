import { DECREMENT, INCREMENT, CHANGE_THEME } from './types'

export function increment () {
  return {
    type: INCREMENT
  }
}
export function decrement () {
  return {
    type: DECREMENT
  }
}

export function changeTheme (newTheme) {
  return {
    type: CHANGE_THEME,
    // это свойство обычно называется payload
    payload: newTheme
  }
}

export function async_increment () {
  return function (dispatch) {
    setTimeout(() => {
      dispatch(increment())
    }, 1500)
  }
}
