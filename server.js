'use strict';
// ================ Base Setup ========================
const Hapi = require('hapi'),
    server = new Hapi.Server(),
    Db = require('./api/commons/app.db_connect'),
    routes = require('./api/routes/app.routes'),
    config = require('./api/config/app.config'),
    bikesHandler = require('./api/handlers/bikes'),
    Path = require('path');

server.connection({
    port: config.server.port,
    host: config.server.host
});

// Register Swagger Plugin ( Use for documentation and testing purpose )
server.register({
    register: require('hapi-swagger'),
    options: {
        apiVersion: "0.0.1"
    }
}, function (err) {
    if (err) {
        server.log(['error'], 'hapi-swagger load error: ' + err)
    } else {
        server.log(['start'], 'hapi-swagger interface loaded')
    }
});

// =============== Routes for our API =======================
server.route(routes.routes);
// ===============Start Server =======================
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});