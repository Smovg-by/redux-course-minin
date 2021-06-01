import './styles.css'
//---START___исходное приложение на JS состояние JS хранится внутри компонента
//
// состояние - это модель, описывающая то, как ведет себя приложение. Состояние State можно
// выразить в модели, а модель в  JS это объект. Значит, все наше состояние можно сформировать в объект.
// здесь состояние описывается в перменной state, который хранится в самой компоненте. Это ПЛОХО!

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const theme = document.getElementById('theme')

let state = 0

function render () {
  counter.textContent = state.toString()
}
addBtn.addEventListener('click', () => {
  state++
  render()
})
subBtn.addEventListener('click', () => {
  state--
  render()
})
asyncBtn.addEventListener('click', () => {
  setTimeout(() => {
    state++
    render()
  }, 2000)
})
theme.addEventListener('click', () => {
  document.body.classList.toggle('dark')
})
render()
//---START___исходное приложение на JS состояние JS хранится внутри компонента
