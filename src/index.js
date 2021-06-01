import './styles.css'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { applyMiddleware, createStore } from 'redux'
import { rootReducer } from './Redux/rootReducer'
import {
  increment,
  decrement,
  async_increment,
  changeTheme
} from './Redux/actions'

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')

// создадим функцию createStore в отдельном файле.
//создадим store

const store = createStore(rootReducer, applyMiddleware(thunk, logger)) //внесены все middleware

addBtn.addEventListener('click', () => {
  store.dispatch(increment())
})
subBtn.addEventListener('click', () => {
  store.dispatch(decrement())
})
asyncBtn.addEventListener('click', () => {
  store.dispatch(async_increment())
})
themeBtn.addEventListener('click', () => {
  const newTheme = document.body.classList.contains('light') ? 'dark' : 'light'
  store.dispatch(changeTheme(newTheme))
  // document.body.classList.toggle('dark')
})

//подписываемся на изменения. Отрисовывается все, кроме изначального 0.
store.subscribe(() => {
  const state = store.getState()
  counter.textContent = state.counter
  //состояние темы
  document.body.className = state.theme.value
  ;[addBtn, subBtn, themeBtn, asyncBtn].forEach(
    btn => (btn.disabled = state.theme.disabled)
  )
})
// чтобы отрисовался изналчальное значение 0, передадим в диспатч
//объект action с несуществующим типом (по умолчанию вернется стейт)
store.dispatch({ type: 'INIT_APPLICATION' })
