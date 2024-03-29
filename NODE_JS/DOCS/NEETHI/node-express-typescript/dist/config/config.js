"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var SERVER_PORT = process.env.SERVER_PORT || 3000;
var SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
var server = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};
var config = {
    server: server
};
exports.default = config;
