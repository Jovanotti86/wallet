import { initializeEnviroments } from './config/config';
initializeEnviroments();
import express from 'express';
import {createMongoConenction} from "./../db/mongoose";
import {apiRoutes} from "./routes/routes";
import bodyParser = require('body-parser');


const app: express.Application = express();
createMongoConenction();
app.use(bodyParser.json());
app.listen(process.env.PORT, function() {
    console.log(`Server started on ${process.env.PORT}`);
});

apiRoutes(app);