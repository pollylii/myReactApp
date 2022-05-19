const CityReducer = (
    preState = {
        cityName: '北京'
    },
    action = {}
) => {

    let newState = { ...preState }
    switch (action.type) {
        case 'change-city':
            newState.cityName = action.payload
            return newState
        default:
            return preState
    }
}
export default CityReducer