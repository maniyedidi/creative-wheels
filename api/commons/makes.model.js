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
    maskingName: {
        type: String,
        required: true
    },
    hostUrl: {
        type: String,
        required: true
    },
    logoUrl: {
        type: String,
        required: true
    },
})

module.exports = {
    Makes: Mongoose.model('makes', MakesSchema)
};