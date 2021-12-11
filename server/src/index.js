import express from 'express';
import router from './routes/github.routes';

const port = process.env.PORT || 5000;
const app = express();

// register routes
app.use(router);

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );

