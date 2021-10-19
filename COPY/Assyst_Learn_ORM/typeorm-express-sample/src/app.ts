import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import {Request, Response} from "express";
import {User} from "./entity/User";
import createError from "http-errors";
import * as session from "express-session";
import * as path from "path";
import cookieParser from "cookie-parser";
import indexRouter from "./routes/index";

createConnection().then(async connection => {

  // create express app
  const app = express();
  app.use(bodyParser.json());
    // register express routes from defined application routes
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));


    app.use(
      session({
        secret: "Auniquerandomtext",
        saveUninitialized: true,
        resave: true,
      })
    );

    // view engine setup
    app.set("views", path.join(__dirname, "views"));
    app.set("view engine", "ejs");

   
    app.use(express.static(path.join(__dirname, "public")));

    app.use("/", indexRouter);

    // catch 404 and forward to error handler
    app.use(function (req, res, next) {
      next(createError(404));
    });

 

    // error handler
    app.use(function (err, req, res, next) {
      // set locals, only providing error in development
      res.locals.message = err.message;
      res.locals.error = req.app.get("env") === "development" ? err : {};

      // render the error page
      res.status(err.status || 500);
      res.render("pages/error", { message: err.message, error: err });
    });
    app.listen(3000);

  
    console.log("Express server has started on port 3000. Open http://localhost:3000/ to see results");

}).catch(error => console.log(error));
