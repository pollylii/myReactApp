import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import reduxThunk from 'redux-thunk'
import reduxPromise from 'redux-promise'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'



import TabbarReducer from './reducers/TabbarReducer'
import CityReducer from './reducers/CityReducer'
import CinemasReducer from "./reducers/CinemasReducer";

const persistConfig = {
    key: 'myKey',
    storage,
    whitelist: ['CityReducer'],
}

const reducer = combineReducers({
    TabbarReducer,
    CityReducer,
    CinemasReducer,
})

// 将普通的reducer生成持久化的reducer（persistedReducer）
const persistedReducer = persistReducer(persistConfig, reducer)

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

// 将持久化的reducer（persistedReducer）生成store
const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(reduxThunk, reduxPromise)));
let persistor = persistStore(store)

export { store, persistor }