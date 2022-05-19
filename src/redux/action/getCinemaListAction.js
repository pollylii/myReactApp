import axios from "axios";

// redux-thunk
// function getCinemaListAction() {
//     return (dispatch) => {
//         axios({
//             url: 'https://m.maizuo.com/gateway?cityId=440300&ticketFlag=1&k=4689459',
//             method: 'get',
//             headers: {
//                 'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1651907533991630639235073"}',
//                 'X-Host': 'mall.film-ticket.cinema.list',
//             }
//         }).then(res => {
//             console.log('getCinemaListAction cinemas', res.data.data.cinemas);
//             dispatch({
//                 type: 'change-list',
//                 payload: res.data.data.cinemas
//             })
//         })
//     }

// }
//redux-promise
// function getCinemaListAction() {
//     return axios({
//         url: 'https://m.maizuo.com/gateway?cityId=440300&ticketFlag=1&k=4689459',
//         method: 'get',
//         headers: {
//             'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1651907533991630639235073"}',
//             'X-Host': 'mall.film-ticket.cinema.list',
//         }
//     }).then(res => {
//         return {
//             type: 'change-list',
//             payload: res.data.data.cinemas
//         }
//     })
// }

// async
async function getCinemaListAction() {
    var list = await axios({
        url: 'https://m.maizuo.com/gateway?cityId=440300&ticketFlag=1&k=4689459',
        method: 'get',
        headers: {
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1651907533991630639235073"}',
            'X-Host': 'mall.film-ticket.cinema.list',
        }
    }).then(res => { 
        return {
            type: 'change-list',
            payload: res.data.data.cinemas
        }
    })
    return list
}
export default getCinemaListAction