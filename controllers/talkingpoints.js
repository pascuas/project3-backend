const Model = require('../models/presentation')


// const getAll = (req, res) => {
//     Talkingpoints.TalkingPoint.find().then(talkingpoints=>{
//         res.json(talkingpoints)
//     })
// }

// const getById = (req, res) => {
//     Talkingpoints.TalkingPoint.findById(req.params.id).then(talkingpoints => res.json(talkingpoints))
// }

const create = (req, res) => {
    Model.Presentation.updateOne({_id: req.params.presId, "sections._id": req.params.sectId},{$push: {"sections.$.talking_points": req.body}}).then(pre => Model.Presentation.find().then(prez =>{
        res.json(prez)}))
}

const remove = (req, res) => {
    Model.Presentation.updateOne({_id: req.params.presId, "sections._id": req.params.sectId}, {$pull: {"sections.$.talking_points": {_id: req.params.pointId}}}).then(pre => Model.Presentation.find().then(prez =>{
        res.json(prez)}))
}

// const update = (req, res) => {
//     Model.Presentation.updateOne({_id: req.params.presId, "sections._id": req.params.sectId, "talking_points._id": req.params.pointId}, {$set: {"sections.$": {"talking_points.$": req.body}}}).then(pre => Model.Presentation.find().then(prez =>{
//         res.json(prez)}))
// }

// const removeAll = (req, res) => {
//     Talkingpoints.TalkingPoint.deleteMany({}).then(talkingpoints=> res.json(talkingpoints))
// }

module.exports ={
    create,
    remove
}