const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const SectionSchema = new Schema({
    "title": String,
    "time": Number,
    "talking_points": [
        {
            ref:'Talkingpoint',
            type: mongoose.Schema.Types.ObjectId
        }
    ]
})

const Section = mongoose.model('Section', SectionSchema)

module.exports = Section