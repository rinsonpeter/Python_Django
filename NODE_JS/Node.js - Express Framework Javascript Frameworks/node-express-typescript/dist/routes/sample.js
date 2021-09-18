"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var sample = function (req, res, next) {
    console.log("Sample Route Called");
    return res.status(200).json({
        message: 'Hello World'
    });
};
router.get('/hello', sample);
module.exports = router;
