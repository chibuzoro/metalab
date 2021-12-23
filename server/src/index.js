import express from 'express';
import router from './routes/github.routes';
import axios from "axios";
import {appConfig} from './configs/app'

const port = process.env.PORT || 5000;
const app = express();

// setup axios for external calls to Github api by default
axios.defaults.baseURL = appConfig.github.url;
// axios.defaults.headers.common['Authorization'] = process.env.GIT_TOKEN; // note needed for our current usecase
axios.defaults.headers.post['Accept'] = appConfig.github.accept;
axios.defaults.headers.post['Content-Type'] = appConfig.github.content_type;
// do not throw 400 errors, return them for now
axios.defaults.validateStatus = function () {
    return true;
};

// register routes
app.use(router);

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );

