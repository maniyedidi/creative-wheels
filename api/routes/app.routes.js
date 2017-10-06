const bikesHandler = require('../handlers/bikes');
const Joi = require('joi');

const routes = [{
    method: 'GET',
    path: '/api/makesList',
    config: {
        // Include this API in swagger documentation
        tags: ['api'],
        description: 'Get All Makes List',
        notes: 'Get All Makes List',
        handler: bikesHandler.bikes.getMakesList
    },
   
},{
    method: 'GET',
    path: '/api/list',
    config: {
        // Include this API in swagger documentation
        tags: ['api'],
        description: 'Get All vehical details',
        notes: 'Get All vehical details',
        handler: bikesHandler.bikes.getList
    },
   
},
{
    method: 'GET',
    path: '/api/{vid}',
    config: {
        // Include this API in swagger documentation
        tags: ['api'],
        description: 'Get All vehical details by id',
        notes: 'Get All vehical details by id',
        handler: bikesHandler.bikes.getById,
        validate: {
            params: {
                vid: Joi.string()
            }
        }
    },
   
}];

module.exports.routes = routes;