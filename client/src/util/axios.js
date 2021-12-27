import {appConfig} from "../configs/app";
import axios from "axios";

// setup axios for external calls to Github api by default
axios.defaults.baseURL = appConfig.github.url;
// axios.defaults.headers.common['Authorization'] = process.env.GIT_TOKEN; // note needed for our current usecase
axios.defaults.headers.post['Accept'] = appConfig.github.accept;
axios.defaults.headers.post['Content-Type'] = appConfig.github.content_type;
// do not throw 400 errors, return them for now
axios.defaults.validateStatus = function () {
    return true;
};
axios.interceptors.response.use(
    res => res,
    err => {
        // log errors to some reporting service
        if (err.response.status === 404) {
            throw new Error(`${err.config.url} not found`);
        }
        throw err;
    }
);
export default axios;
