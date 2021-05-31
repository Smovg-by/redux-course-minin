import './styles.css'
//---START___исходное приложение на JS состояние JS хранится внутри компонента
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
