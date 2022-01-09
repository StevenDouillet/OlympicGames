const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const athleteSchema = new Schema({
    _id: Schema.ObjectId,
    firstName: String,
    lastName: String,
    gender: String,
    country: String,
    createdDate: Date,
    sports: [{ type: Schema.ObjectId, ref: 'sport' }]
});

module.exports = mongoose.model('athlete', athleteSchema);