import { rootReducer } from './Redux/rootReducer'
export function createStore (rootReducer, initialState) {
  // переменные внутри этой функции будут инкапсулированы
  // любой стейт надо прогонять черз reducer, даже исходный. Это сделано ниже:
  let state = rootReducer(initialState, { type: '__INIT__' })
  const subscribers = []
  return {
    // dispatch - нужно что-то изменить
    // в качестве аргумента должен использоваться action. Это объект с бязательным полем type
    dispatch (action) {
      //прогоняем стейт через reducer и получаем новый стейт
      state = rootReducer(state, action)
      //после обновления стейта надо сообщить всем слушателям, что обновился стейт
      subscribers.forEach(sub => sub())
    },
    // subscribe _ все, кто слушают этот объект, должны что-то поменять в себе

    subscribe (callback) {
      subscribers.push(callback)
    },
    // getState - получить данные из стейта
    getState () {
      return state
    }
  }
}
