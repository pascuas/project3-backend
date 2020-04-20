const mongoose = require('../db/connection')
const Schema = mongoose.Schema



const PresentationSchema = new Schema({
    "name": String,
    "sections": [
        {
            ref: "Section",
            type: mongoose.Schema.Types.ObjectId
        }
    ]
})

const Presentation = mongoose.model('User', PresentationSchema)

module.exports= Presentation
   