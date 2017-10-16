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

    },
    {
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

    },
    {
        method: 'POST',
        path: '/api/_search',
        config: {
            // Include this API in swagger documentation
            tags: ['api'],
            description: 'search vehical',
            notes: 'search vehical',
            handler: bikesHandler.bikes.search,
            validate: {
                payload: {
                    brand: Joi.string(),
                    model: Joi.string()
                }
            }
        },

    },
    {
        method: 'POST',
        path: '/api/_create',
        config: {
            // Include this API in swagger documentation
            tags: ['api'],
            description: 'create vehical',
            notes: 'create vehical',
            handler: bikesHandler.bikes.create,
            validate: {
                payload: {
                    makeId: Joi.number(),
                    makeName: Joi.string(),
                    makesList: Joi.array().optional()
                }
            }
        },

    },
    {
        method: 'PUT',
        path: '/api/_update/{vid}',
        config: {
            // Include this API in swagger documentation
            tags: ['api'],
            description: 'update vehical',
            notes: 'update vehical',
            handler: bikesHandler.bikes.update,
            validate: {
                payload: {
                    makeName: Joi.string(),
                    makesList: Joi.array().optional()
                },
                params: {
                    vid: Joi.string().required()
                }

            }
        },

    },
    {
        method: 'PATCH',
        path: '/api/_patch/{vid}',
        config: {
            // Include this API in swagger documentation
            tags: ['api'],
            description: 'update vehical',
            notes: 'update vehical',
            handler: bikesHandler.bikes.updateMakesList,
            validate: {
                payload: {
                    makesList: Joi.array().optional()
                },
                params: {
                    vid: Joi.string().required()
                }

            }
        },

    }, {
        method: 'PATCH',
        path: '/api/_patch/{vid}/{bid}',
        config: {
            // Include this API in swagger documentation
            tags: ['api'],
            description: 'update source list',
            notes: 'update source list',
            handler: bikesHandler.bikes.updateSrcList,
            validate: {
                payload: {
                    makesList: Joi.array().optional(),
                },
                params: {
                    vid: Joi.string().required(),
                    bid: Joi.string().required()
                }

            }
        },

    },
    {
        method: 'DELETE',
        path: '/api/_delete/{vid}',
        config: {
            // Include this API in swagger documentation
            tags: ['api'],
            description: 'delete vehical',
            notes: 'delete vehical',
            handler: bikesHandler.bikes.delete,
            validate: {
                params: {
                    vid: Joi.string().required()
                }

            }
        },

    }
];

module.exports.routes = routes;