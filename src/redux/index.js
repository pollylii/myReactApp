import { combineReducers,createStore } from "redux";
import TabbarReducer from './reducers/TabbarReducer'
import CityReducer from './reducers/CityReducer'

const reducer = combineReducers({
    TabbarReducer,
    CityReducer,
})
//  redux 原理,封装简易redux
// function createMyStore(reducer) {
//     var list = []
//     var state = reducer() // 初始状态
//     function subscribe(callback) {
//         list.push(callback)

//     }
//     function dispatch(action) {
//         state = reducer(state, action)
//         for (var i in list) {
//             list[i] && list[i]()
//         }
//     }
//     function getState() {
//         return state
//     }

//     return {
//         subscribe,
//         dispatch,
//         getState
//     }
// }
const store = createStore(reducer)
// const store = createMyStore(reducer)
export default store