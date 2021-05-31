import './styles.css'
import thunk from 'redux-thunk'
import { createStore } from 'redux'
import { rootReducer } from './Redux/rootReducer'
import { increment, decrement, async_increment } from './Redux/actions'

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const theme = document.getElementById('theme')

// создадим функцию createStore в отдельном файле.
//создадим store

const store = createStore(rootReducer, 0)

addBtn.addEventListener('click', () => {
  store.dispatch(increment())
})
subBtn.addEventListener('click', () => {
  store.dispatch(decrement())
})
asyncBtn.addEventListener('click', () => {
  store.dispatch(async_increment())
})
theme.addEventListener('click', () => {
  // document.body.classList.toggle('dark')
})

//подписываемся на изменения. Отрисовывается все, кроме изначального 0.
store.subscribe(() => {
  const state = store.getState()
  counter.textContent = state
})
// чтобы отрисовался изналчальное значение 0, передадим в диспатч
//объект action с несуществующим типом (по умолчанию вернется стейт)
store.dispatch({ type: 'INIT_APPLICATION' })
