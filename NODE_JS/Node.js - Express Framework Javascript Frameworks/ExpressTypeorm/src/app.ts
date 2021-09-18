import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as path from 'path';
import router from './routes/index';

createConnection().then(async connection => {

    // create express app
    const app = express();
    app.use(bodyParser.json());

    // setting up view engine
    app.set('views',path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');

    // Routing
    app.use('/',router)

    // start express server
    app.listen(3000);
    
    console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results");

}).catch(error => console.log(error));
