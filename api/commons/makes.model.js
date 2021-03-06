const Mongoose = require('mongoose'),
    Schema = Mongoose.Schema;
const MakesSchema = new Schema({
    makeId: {
        type: Number,
        unique: true,
        required: true
    },
    makeName: {
        type: String,
        required: true
    },
    makesList: [{
        brandName: {type: String},
        srcUrls: [{
            url: {type: String},
            mediaType: {type: String}
        }]
    }]
})

module.exports = {
    Makes: Mongoose.model('makes', MakesSchema)
};