const TabbarReducer = (
    preState = {
        show: true,
    },
    action = {}
) => {

    let newState = { ...preState }
    switch (action.type) {
        case 'hide-tabbar':
            newState.show = false
            return newState
        case 'show-tabbar':
            newState.show = true
            return newState
        default:
            return preState
    }
}
export default TabbarReducer