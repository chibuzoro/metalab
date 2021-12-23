const axios =  require('axios');
const MockAdapter = require("axios-mock-adapter");

const axiosInstance =  axios.create({
    baseURL: 'http://localhost:5000/api/v1',
    timeout: 1000,
});

const mock = new MockAdapter(axiosInstance);
const gitApiUrl = 'repos/{owner}/{repo}/stats/commit_activity'

// mock the repo statistics
// mock.onGet(/\/repos\/\w+\/\w+\/stats\/commit_activity/).reply(() => {
//     return [200, [
//         {
//             "days": [
//                 0,
//                 3,
//                 26,
//                 20,
//                 39,
//                 1,
//                 0
//             ],
//             "total": 89,
//             "week": 1336280400
//         }
//     ]]
// });

// mock the repo search
// mock.onGet(/\/repos\/\w+\/\w+\/stats\/commit_activity/).reply(() => {
//     return [200, [
//         {
//             "days": [
//                 0,
//                 3,
//                 26,
//                 20,
//                 39,
//                 1,
//                 0
//             ],
//             "total": 89,
//             "week": 1336280400
//         }
//     ]]
// });






