import dotenv from 'dotenv';
dotenv.config();
const SERVER_PORT = process.env.SERVER_PORT || 3000;
const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const server = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
}
const config = {
    server: server
}
export default config;