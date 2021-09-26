import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import config from './config/config';
import sampleRouter from './routes/sample';
import indexRouter from './routes/index';

const app = express();
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/', indexRouter);
app.use('/sample', sampleRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    const err = new Error('Not Found');
    return res.status(404).json({
        message: err.message
    })
    
});
  
const httpServer = http.createServer(app);

//Lets start our server
httpServer.listen(config.server.port, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log(`Server listening on: http://${config.server.hostname}: ${config.server.port}`);
});
