import { combineReducers } from 'redux'
import { DECREMENT, INCREMENT, CHANGE_THEME } from './types'

function counterReducer (state = 0, action) {
  if (action.type === INCREMENT) {
    return state + 1
  } else if (action.type === DECREMENT) {
    return state - 1
  }

  return state
}

//добавим еще один  редьюсер для изменения темы theme

const initialThemeState = {
  value: 'light'
}

function themeReducer (state = initialThemeState, action) {
  switch (action.type) {
    case CHANGE_THEME:
      return { ...state, value: action.payload } //нельзя мутировать объект, создаем новый
    default:
      return state
  }
}

// для того, чтобы работать с несколькими редьюсерами, будем использовать метод combineReduxers из Redux.
export const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer
})
