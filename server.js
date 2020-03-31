// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
const port = 7823;
server.listen(port, () => {
    console.log('Server is running on Port ' + port);
});