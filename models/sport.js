const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sportSchema = new Schema({
    _id: Schema.ObjectId,
    name: String,
    athletes: [{ type: Schema.ObjectId, ref: 'athlete' }]
});

module.exports = mongoose.model('sport', sportSchema);