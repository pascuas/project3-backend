const mongoose = require('../db/connection')
const Schema = mongoose.Schema


const TalkingPointSchema = new Schema ({
    "point": String
})

const TalkingPoint = mongoose.model('Talkingpoint', TalkingPointSchema)

module.exports = TalkingPoint