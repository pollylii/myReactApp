import { applyMiddleware, combineReducers,createStore,compose } from "redux";
import reduxThunk from 'redux-thunk'
import reduxPromise from 'redux-promise'
import TabbarReducer from './reducers/TabbarReducer'
import CityReducer from './reducers/CityReducer'
import CinemasReducer from "./reducers/CinemasReducer";

const reducer = combineReducers({
    TabbarReducer,
    CityReducer,
    CinemasReducer,
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
// const store = createMyStore(reducer)


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,composeEnhancers(applyMiddleware(reduxThunk,reduxPromise)));

export default store