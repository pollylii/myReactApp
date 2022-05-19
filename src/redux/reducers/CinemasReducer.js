const CinemasReducer = (
    preState = {
        list: []
    },
    action = {}
) => {

    let newState = { ...preState }
    switch (action.type) {
        case 'change-list':
            newState.list = action.payload
            return newState
        default:
            return preState
    }
}
export default CinemasReducer