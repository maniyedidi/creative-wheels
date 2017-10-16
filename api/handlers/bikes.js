const Makes = require('../commons/makes.model').Makes;
const Boom = require('boom');

module.exports.bikes = {
    create: (request, reply) => {
        let createMake = request.payload

        console.log("request pay load is >>> " + JSON.stringify(createMake));
        // Response JSON object
        Makes.create(createMake, (err, makes) => {
            if (!err) {
                reply("created record successfully");
            } else {
                reply(Boom.badImplementation(err)); // 500 error
            }
        })
    },
    update: (request, reply) => {
        let updateMake = request.payload;
        let vid = request.params.vid;

        Makes.findOne({
            makeId: vid
        }, (err, make) => {
            if (!err) {
                make.makeName = updateMake.makeName;
                make.makeList = updateMake.makeList;
                make.save(updateMake, (err, updateMake) => {
                    if (!err) {
                        reply({
                            message: `updated  record successfully ${vid}`,
                            make: updateMake
                        });
                    } else {
                        reply(Boom.badImplementation(err)); // 500 error
                    }
                })
            } else {
                reply(Boom.badImplementation(err)); // 500 error
            }


        })


    },
    delete: (request, reply) => {
        let vid = request.params.vid

        // Response JSON object
        Makes.remove({
            makeId: vid
        }, (err, make) => {
            if (!err) {
                reply(`delete  record successfully ${vid}`);
            } else {
                reply(Boom.badImplementation(err)); // 500 error
            }
        })
    },
    search: (request, reply) => {
        let search = request.payload
        // Response JSON object
        Makes.find({
            makeName: search.brand
        }, (err, makes) => {
            if (!err) {
                reply(makes);
            } else {
                reply(Boom.badImplementation(err)); // 500 error
            }
        })
    },
    getMakesList: (request, reply) => {
        let makeList = [];
        // Response JSON object
        Makes.find({}, (err, makes) => {
            if (!err) {
                makes.forEach(function (make) {
                    makeList.push(make.makeName);
                }, this);
                reply(makeList);
            } else {
                reply(Boom.badImplementation(err)); // 500 error
            }
        })
    },
    getList: function (request, reply) {
        // Response JSON object
        Makes.find({}, (err, user) => {
            if (!err) {
                reply(user);
            } else {
                reply(Boom.badImplementation(err)); // 500 error
            }
        })
    },
    getById: (request, reply) => {
        const vid = request.params.vid ? encodeURIComponent(request.params.vid) : 'stranger';
        // Response JSON object
        let data = {};
        Makes.find({
            makeId: vid
        }, (err, response) => {
            if (!err) {
                reply({
                    statusCode: 200,
                    message: 'details for ' + vid,
                    data: response

                });
            } else {
                reply(Boom.badImplementation(err)); // 500 error
            }
        })
    },
    updateMakesList: (request, reply) => {
        let makeList = request.payload;
        let vid = request.params.vid;
        console.log("Input Data is " + JSON.stringify(makeList));
        Makes.update({
            makeId: vid
        }, { "$pushAll":makeList}, (err, make) => {
            if (!err) {
                reply({
                    message: `updated  makes list record successfully ${vid}`,
                    make: make
                });
            } else {
                reply(Boom.badImplementation(err)); // 500 error
            }
        })
    },
    updateSrcList: (request, reply) => {
        let makeList = request.payload;
        let bid = request.params.bid;

        Makes.findOne({
            "makesList._id": ObjectId(bid)
        }, (err, make) => {
            if (!err) {

                make.update((err, make) => {
                    if (!err) {
                        reply({
                            message: `updated  makes list record successfully ${bid}`,
                            make: make
                        });
                    } else {
                        reply(Boom.badImplementation(err)); // 500 error
                    }
                })
            } else {
                reply(Boom.badImplementation(err)); // 500 error
            }
        })
    }
}