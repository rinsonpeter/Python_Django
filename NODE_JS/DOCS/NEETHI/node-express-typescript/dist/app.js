"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __importDefault(require("http"));
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var config_1 = __importDefault(require("./config/config"));
var sample_1 = __importDefault(require("./routes/sample"));
var index_1 = __importDefault(require("./routes/index"));
var app = express_1.default();
app.use(body_parser_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
// Routes
app.use('/', index_1.default);
app.use('/sample', sample_1.default);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    return res.status(404).json({
        message: err.message
    });
});
var httpServer = http_1.default.createServer(app);
//Lets start our server
httpServer.listen(config_1.default.server.port, function () {
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://" + config_1.default.server.hostname + ": " + config_1.default.server.port);
});
