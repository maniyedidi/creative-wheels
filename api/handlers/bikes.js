const Makes = require('../commons/makes.model').Makes;

module.exports.bikes = {
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
        Makes.find({
        }, (err, user) => {
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
    }
}