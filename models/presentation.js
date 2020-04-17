const mongoose = require('../connection')
const Schema = mongoose.Schema


const TalkingPoints = new Schema ({
    "point": String
})

const Section = new Schema({
    "title": String,
    "time": Number,
    "talking_points": [TalkingPoints]
})

const PresentationSchema = new Schema({
    "name": String,
    "sections": [Section]
})

const Presentation = mongoose.model('User', PresentationSchema)
module.exports= Presentation